import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Box } from '@chakra-ui/react'

// Copied into public/ by scripts/copy-pdf-worker.js, named by version so it
// always matches the pdf.js bundled here
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.${pdfjs.version}.min.mjs`

// Renders every page of a PDF to canvas with pdf.js, so it works on mobile
// browsers that can't display a PDF inside an iframe.
const PdfSlides = ({ file }) => {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setWidth(Math.floor(el.getBoundingClientRect().width))

    // Debounced so resizing or rotating doesn't re-render every page per pixel.
    // Zero widths are ignored so a hidden container keeps the loaded PDF, and
    // small changes (like a scrollbar appearing) are left to CSS scaling below.
    let timer
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.floor(entry.contentRect.width)
      if (next === 0) return
      clearTimeout(timer)
      timer = setTimeout(
        () => setWidth(prev => (Math.abs(next - prev) < 24 ? prev : next)),
        150
      )
    })
    observer.observe(el)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <Box
      ref={containerRef}
      // Keep canvases inside the container while a re-render is pending
      sx={{ '& canvas': { maxWidth: '100% !important', height: 'auto !important' } }}
    >
      {width > 0 && (
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          onLoadError={error => console.error('Failed to load slides:', error)}
          loading="Loading slides..."
          error="Couldn't load the slides. Use the download button above."
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i + 1}
              pageNumber={i + 1}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      )}
    </Box>
  )
}

export default PdfSlides

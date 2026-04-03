import { useRef, useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

const PREVIEW_W = 260
const PREVIEW_H = 170
const OFFSET_X = 24
const MARGIN = 12

const ProjectHoverPreview = ({ children, projects, hoveredIndex }) => {
  const containerRef = useRef(null)
  const previewRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const smoothRef = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef(null)
  const wasVisible = useRef(false)
  const [mounted, setMounted] = useState(false)

  const overlayBg = useColorModeValue('#FBF7F2', '#241F1A')
  const borderColor = useColorModeValue('#E8DCD0', '#3D352C')
  const gradientDir = useColorModeValue(
    'linear(to-t, blackAlpha.100, transparent)',
    'linear(to-t, blackAlpha.300, transparent)'
  )

  const isVisible = hoveredIndex !== null

  useEffect(() => {
    setMounted(true)
  }, [])

  // Snap smooth position to mouse on first hover (no fly-in from corner)
  useEffect(() => {
    if (isVisible && !wasVisible.current) {
      smoothRef.current.x = mouseRef.current.x
      smoothRef.current.y = mouseRef.current.y
    }
    wasVisible.current = isVisible
  }, [isVisible])

  // rAF loop — directly sets DOM style, no React re-renders
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      let tx = mx + OFFSET_X
      let ty = my - PREVIEW_H / 2

      const vw = window.innerWidth
      const vh = window.innerHeight
      if (tx + PREVIEW_W > vw - MARGIN) {
        tx = mx - OFFSET_X - PREVIEW_W
      }
      if (ty < MARGIN) ty = MARGIN
      if (ty + PREVIEW_H > vh - MARGIN) ty = vh - PREVIEW_H - MARGIN

      smoothRef.current.x = lerp(smoothRef.current.x, tx, 0.15)
      smoothRef.current.y = lerp(smoothRef.current.y, ty, 0.15)

      const el = previewRef.current
      if (el) {
        el.style.transform = `translate3d(${smoothRef.current.x}px, ${smoothRef.current.y}px, 0)`
        el.style.opacity = isVisible ? '1' : '0'
        el.style.scale = isVisible ? '1' : '0.85'
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible])

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.x = e.clientX
    mouseRef.current.y = e.clientY
  }, [])

  // Render preview via portal to escape the motion.article transform/filter
  // which breaks position:fixed
  const preview = mounted
    ? createPortal(
        <Box
          ref={previewRef}
          pointerEvents="none"
          position="fixed"
          left="0px"
          top="0px"
          zIndex={9998}
          overflow="hidden"
          borderRadius="xl"
          boxShadow="dark-lg"
          display={{ base: 'none', md: 'block' }}
          willChange="transform, opacity"
          sx={{
            opacity: 0,
            scale: 0.85,
            transition: 'opacity 0.2s ease, scale 0.2s ease',
          }}
        >
          <Box
            w={`${PREVIEW_W}px`}
            h={`${PREVIEW_H}px`}
            bg={overlayBg}
            borderRadius="xl"
            overflow="hidden"
            position="relative"
            border="2px solid"
            borderColor={borderColor}
          >
            {projects.map((project, index) => (
              <Box
                key={project.id}
                position="absolute"
                inset="0"
                sx={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform:
                    hoveredIndex === index ? 'scale(1)' : 'scale(1.08)',
                  filter: hoveredIndex === index ? 'none' : 'blur(8px)',
                  transition: 'all 0.4s ease-out',
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="260px"
                />
              </Box>
            ))}
            <Box
              position="absolute"
              inset="0"
              bgGradient={gradientDir}
            />
          </Box>
        </Box>,
        document.body
      )
    : null

  return (
    <Box ref={containerRef} onMouseMove={handleMouseMove} position="relative">
      {preview}
      {children}
    </Box>
  )
}

export default ProjectHoverPreview

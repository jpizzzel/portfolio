// Copies the pdf.js worker into public/ for the Foosball slides viewer.
// It resolves pdfjs-dist from react-pdf's own location so the worker always
// matches the pdf.js react-pdf loads, and puts the version in the filename so
// a cached old worker is never paired with a newer pdf.js.
const fs = require('fs')
const path = require('path')

const reactPdfDir = path.dirname(require.resolve('react-pdf'))
const pdfjsPkg = require.resolve('pdfjs-dist/package.json', { paths: [reactPdfDir] })
const { version } = require(pdfjsPkg)

const src = path.join(path.dirname(pdfjsPkg), 'legacy', 'build', 'pdf.worker.min.mjs')
const publicDir = path.join(__dirname, '..', 'public')
const destName = `pdf.worker.${version}.min.mjs`

fs.mkdirSync(publicDir, { recursive: true })

for (const file of fs.readdirSync(publicDir)) {
  if (/^pdf\.worker\..*\.mjs$/.test(file) && file !== destName) {
    fs.unlinkSync(path.join(publicDir, file))
  }
}
fs.copyFileSync(src, path.join(publicDir, destName))

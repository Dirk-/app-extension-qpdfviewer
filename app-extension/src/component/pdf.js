import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
const PDFJS = require('pdfjs-dist/build/pdf.js')
PDFJS.GlobalWorkerOptions.workerPort = new PdfjsWorker()

export default PDFJS

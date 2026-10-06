'use client'

import { useRef, useState } from 'react'
import { toBlob } from 'html-to-image'
import { ArrowDownToLine } from 'lucide-react'

export function CoverExport() {
  const coverRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [exportStatus, setExportStatus] = useState('')

  async function downloadCover() {
    if (!coverRef.current || isExporting) return

    setIsExporting(true)
    setExportStatus('')

    try {
      const blob = await toBlob(coverRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        filter: (node) => !(node instanceof HTMLElement && node.classList.contains('cover-download')),
      })

      if (!blob) throw new Error('Cover image could not be created.')

      const downloadUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = 'abi-maria-gomes-los-angeles-cover.png'
      link.click()
      window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000)
      setExportStatus('Cover downloaded with its text and background.')
    } catch {
      setExportStatus('The cover could not be downloaded. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <section className="cover-section" aria-labelledby="cover-title">
      <div className="cover-artwork" ref={coverRef}>
        <img src="/images/los-angeles-cover.png" alt="Los Angeles architecture and palm trees at dusk" />
        <div className="cover-shade" aria-hidden="true" />
        <div className="cover-content">
          <div>
            <p className="cover-kicker">LOS ANGELES · CALIFORNIA</p>
            <h2 id="cover-title">Abi-Maria Gomes</h2>
            <p className="cover-subtitle">Enterprise technology · Real estate</p>
          </div>
          <button className="cover-download" type="button" onClick={downloadCover} disabled={isExporting} aria-busy={isExporting}>
            <ArrowDownToLine aria-hidden="true" />
            <span>{isExporting ? 'Preparing cover…' : 'Download cover'}</span>
          </button>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">{exportStatus}</p>
    </section>
  )
}

export default CoverExport

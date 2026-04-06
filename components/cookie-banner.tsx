'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('imt-cookies')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('imt-cookies', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('imt-cookies', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-brand-surface border-t border-brand-border md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-lg">
      <p className="text-sm text-foreground leading-relaxed mb-3">
        Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico del sito. Consulta
        la nostra{' '}
        <Link href="/cookie-policy" className="text-primary underline underline-offset-2">
          Cookie Policy
        </Link>{' '}
        e la{' '}
        <Link href="/privacy-policy" className="text-primary underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 py-2 px-4 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity"
        >
          Accetta
        </button>
        <button
          onClick={reject}
          className="flex-1 py-2 px-4 bg-muted text-muted-foreground text-sm font-semibold uppercase tracking-wider rounded hover:bg-border transition-colors"
        >
          Rifiuta
        </button>
      </div>
    </div>
  )
}

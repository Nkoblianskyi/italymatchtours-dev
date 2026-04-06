'use client'

import { useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  tourContext?: string
}

export function ContactModal({ open, onClose, tourContext }: ContactModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState(tourContext ? 'info-tour' : '')
  const [message, setMessage] = useState(tourContext ? `Sono interessato al tour: ${tourContext}. Potete inviarmi maggiori informazioni?` : '')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const reset = () => {
    setName('')
    setEmail('')
    setSubject(tourContext ? 'info-tour' : '')
    setMessage(tourContext ? `Sono interessato al tour: ${tourContext}. Potete inviarmi maggiori informazioni?` : '')
    setSent(false)
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <div className="relative bg-brand-surface border border-brand-border rounded-lg w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
          <div>
            <h2
              className="text-2xl font-extrabold uppercase text-foreground"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {sent ? 'Messaggio Inviato' : 'Richiedi Informazioni'}
            </h2>
            {!sent && tourContext && (
              <p className="text-xs text-muted-foreground mt-0.5 truncate max-w-xs">
                Tour: {tourContext}
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Chiudi"
          >
            <X size={20} />
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Grazie per averci contattato. Il nostro team ti risponderà entro{' '}
              <span className="text-foreground font-semibold">24 ore lavorative</span>.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
            >
              Chiudi
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Mario Rossi"
                  className="w-full bg-background border border-brand-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mario@email.it"
                  className="w-full bg-background border border-brand-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                Oggetto *
              </label>
              <select
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-background border border-brand-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Seleziona un argomento...</option>
                <option value="info-tour">Informazioni su un Tour</option>
                <option value="prenotazione">Prenotazione Tour</option>
                <option value="personalizzato">Pacchetto Personalizzato</option>
                <option value="gruppo">Tour di Gruppo</option>
                <option value="altro">Altro</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                Messaggio *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descrivici cosa stai cercando..."
                className="w-full bg-background border border-brand-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="modal-privacy"
                required
                className="mt-0.5 accent-primary"
              />
              <label htmlFor="modal-privacy" className="text-xs text-muted-foreground leading-relaxed">
                Ho letto e accetto la{' '}
                <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                e la{' '}
                <a href="/cookie-policy" target="_blank" className="text-primary hover:underline">
                  Cookie Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <Send size={15} />
              )}
              {loading ? 'Invio in corso...' : 'Invia Messaggio'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

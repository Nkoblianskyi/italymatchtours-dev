'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@italymatchtours.com',
    href: 'mailto:info@italymatchtours.com',
  },
  {
    icon: MapPin,
    label: 'Indirizzo',
    value: 'Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus',
    href: null,
  },
  {
    icon: Clock,
    label: 'Orario di supporto',
    value: 'Lun–Ven: 09:00–18:00 (CET) · Sab: 10:00–14:00',
    href: null,
  },
]

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <Image src="/images/tips-bg.jpg" alt="Contatti Italy Match Tours" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Siamo Qui</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground mb-4 text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Contattaci
          </h1>
          <p className="text-muted-foreground max-w-lg leading-relaxed text-pretty">
            Hai domande su un tour? Vuoi un pacchetto personalizzato? Il nostro team è pronto ad aiutarti.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info */}
          <div className="lg:col-span-2">
            <h2
              className="text-2xl font-extrabold uppercase text-foreground mb-6"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Informazioni di Contatto
            </h2>
            <div className="space-y-5 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 bg-brand-surface border border-brand-border rounded hover:border-primary transition-colors">
                  <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <info.icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-foreground hover:text-primary transition-colors break-all">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground leading-relaxed">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Company */}
            <div className="p-5 bg-brand-surface border border-brand-border rounded">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Società</p>
              <p className="text-sm font-bold text-foreground mb-1">K.C. NTOMATA LIMITED</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Stylianou Lena, 24 Christiana Court, Flat/Office 202
                <br />
                Strovolos, 2019 Nicosia, Cyprus
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-surface border border-brand-border rounded p-6 md:p-8">
              <h2
                className="text-2xl font-extrabold uppercase text-foreground mb-6"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Inviaci un Messaggio
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descrivici cosa stai cercando. Più dettagli ci dai, meglio potremo aiutarti..."
                    className="w-full bg-background border border-brand-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-0.5 accent-primary"
                  />
                  <label htmlFor="privacy" className="text-xs text-muted-foreground leading-relaxed">
                    Ho letto e accetto la{' '}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{' '}
                    e la{' '}
                    <a href="/cookie-policy" className="text-primary hover:underline">
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
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSent(false)} />
          <div className="relative bg-brand-surface border border-brand-border rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
            <button
              onClick={() => setSent(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Chiudi"
            >
              <X size={18} />
            </button>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h3
              className="text-2xl font-extrabold uppercase text-foreground mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Messaggio Inviato!
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Grazie per averci contattato. Il nostro team ti risponderà entro 24 ore lavorative.
            </p>
            <button
              onClick={() => setSent(false)}
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Italy Match Tours',
  description: 'Informativa sui cookie di Italy Match Tours (italymatchtours.com).',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Legale</p>
        <h1
          className="text-4xl md:text-6xl font-extrabold uppercase text-foreground mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Cookie Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-10">Ultimo aggiornamento: 2026</p>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Cosa sono i Cookie</h2>
            <p className="leading-relaxed">
              I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo quando li visiti. Vengono utilizzati per far funzionare il sito in modo efficiente, per ricordare le tue preferenze e per raccogliere informazioni statistiche anonimizzate sulla navigazione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Tipologie di Cookie Utilizzati</h2>

            <div className="space-y-5">
              <div className="p-5 bg-brand-surface border border-brand-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">Necessari</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Indispensabili per il corretto funzionamento del sito. Non raccolgono dati personali identificabili e non possono essere disattivati. Esempi: sessione utente, preferenze cookie.
                </p>
              </div>

              <div className="p-5 bg-brand-surface border border-brand-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest border border-brand-border">Analitici</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonimizzata. Utilizziamo strumenti di analytics di terze parti conformi al GDPR. Puoi disattivarli rifiutando i cookie tramite il banner.
                </p>
              </div>

              <div className="p-5 bg-brand-surface border border-brand-border rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest border border-brand-border">Preferenze</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Consentono al sito di memorizzare le tue scelte (es. lingua, preferenze di navigazione) per offrirti un&apos;esperienza personalizzata nelle visite successive.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Cookie di Terze Parti</h2>
            <p className="leading-relaxed mb-3">
              Il sito potrebbe utilizzare servizi di terze parti che installano propri cookie, tra cui:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong className="text-foreground">Google Analytics / equivalente:</strong> per statistiche di navigazione anonimizzate. Dati conservati in forma aggregata.
              </li>
              <li>
                <strong className="text-foreground">Provider di mappe (es. Google Maps):</strong> per la visualizzazione delle destinazioni.
              </li>
              <li>
                <strong className="text-foreground">Piattaforme di pagamento:</strong> per la sicurezza delle transazioni.
              </li>
            </ul>
            <p className="leading-relaxed mt-3 text-sm">
              Ti invitiamo a consultare le privacy policy di ciascun provider per maggiori dettagli.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Come Gestire i Cookie</h2>
            <p className="leading-relaxed mb-3">
              Puoi gestire o disattivare i cookie in qualsiasi momento attraverso:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Il <strong className="text-foreground">banner cookie</strong> che appare alla prima visita del sito</li>
              <li>Le <strong className="text-foreground">impostazioni del tuo browser</strong> (Chrome, Firefox, Safari, Edge)</li>
              <li>Strumenti di opt-out specifici dei provider (es. Google Analytics Opt-out Browser Add-on)</li>
            </ul>
            <p className="leading-relaxed mt-3 text-sm">
              <strong className="text-foreground">Attenzione:</strong> disattivare i cookie necessari potrebbe compromettere il funzionamento di alcune parti del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Contatti</h2>
            <p className="leading-relaxed">
              Per qualsiasi informazione sulla nostra Cookie Policy, scrivi a:{' '}
              <a href="mailto:info@italymatchtours.com" className="text-primary hover:underline">
                info@italymatchtours.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo — Italy Match Tours',
  description:
    'Italy Match Tours: tour d’autore in Italia e in Europa. Scopri la nostra storia, i nostri valori e il nostro team.',
}

const values = [
  {

    title: 'Passione',
    text: 'Amiamo la strada, i sentieri e la montagna. Ogni itinerario nasce dall’entusiasmo per il viaggio lento e per le esperienze autentiche.',
  },
  {

    title: 'Affidabilità',
    text: 'Logistica curata, strutture selezionate, ritmi sostenibili. La nostra reputazione si costruisce sulla fiducia e sulla qualità del servizio.',
  },
  {
    title: 'Eccellenza',
    text: 'Non ci accontentiamo del minimo indispensabile. Ogni dettaglio del tour è curato per offrire un\'esperienza superiore alle aspettative.',
  },
  {

    title: 'Connessioni',
    text: 'Un network di guide e partner locali ci permette di aprire porte, trovare angoli nascosti e creare esperienze su misura.',
  },
]

const team = [
  {
    name: 'Alessandro M.',
    role: 'Fondatore & Direttore',
    bio: '20 anni di esperienza nell’organizzazione viaggi in Italia e in Europa. Cura gli itinerari e seleziona guide e partner sul territorio.',
  },
  {
    name: 'Sofia R.',
    role: 'Responsabile Tour Italia',
    bio: 'Specialista di turismo culturale e outdoor. Trasforma ogni tappa in una storia: luoghi, sapori e incontri autentici.',
  },
  {
    name: 'Marco D.',
    role: 'Coordinatore Europa',
    bio: 'Poliglotta con network in Germania, Spagna, Francia e Inghilterra. Coordina logistica e partner locali lungo gli itinerari.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <Image src="/images/about-team.jpg" alt="Il team di Italy Match Tours" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Chi Siamo</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground mb-5 text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            La Storia di Italy Match Tours
          </h1>
          <p className="text-muted-foreground max-w-lg leading-relaxed text-pretty">
            Nati dalla passione per il viaggio e per l’outdoor, creiamo tour d’autore tra Italia ed Europa: montagne,
            strade panoramiche, sentieri e borghi.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold uppercase text-foreground mb-5"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              La Nostra Storia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
              <p>
                Italy Match Tours nasce nel 2014 da una constatazione semplice: molte persone desideravano viaggiare in
                modo attivo e autentico, ma faticavano a trovare itinerari ben progettati e organizzati con cura.
              </p>
              <p>
                Da quella intuizione, abbiamo costruito un servizio su misura: non “pacchetti standard”, ma tour d’autore
                che uniscono attività all’aria aperta, cultura locale e tempi giusti per vivere davvero i luoghi.
              </p>
              <p>
                Oggi progettiamo esperienze in Italia e in Europa per piccoli gruppi: trekking in quota, viaggi in bici,
                moto-tour panoramici e avventure MTB, con assistenza e logistica curate.
              </p>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded overflow-hidden">
            <Image src="/images/about-team.jpg" alt="Il team di Italy Match Tours" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Cosa ci Guida</p>
            <h2
              className="text-4xl font-extrabold uppercase text-foreground"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              I Nostri Valori
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background border border-brand-border rounded p-6 hover:border-primary transition-colors">

                <h3
                  className="text-xl font-extrabold uppercase text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Company Info */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Informazioni Legali</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase text-foreground mb-5"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                La Società
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Ragione Sociale:</span> K.C. NTOMATA LIMITED
                </p>
                <p>
                  <span className="font-semibold text-foreground">Indirizzo:</span> Stylianou Lena, 24 Christiana Court, Flat/Office 202
                </p>
                <p>
                  <span className="font-semibold text-foreground">Città:</span> Strovolos, 2019 Nicosia, Cyprus
                </p>
                <p>
                  <span className="font-semibold text-foreground">Sito Web:</span>{' '}
                  <a href="https://italymatchtours.com" className="text-primary hover:underline">
                    italymatchtours.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 bg-background border border-brand-border rounded">

                <div>
                  <div className="text-sm font-bold text-foreground">Operatore Registrato</div>
                  <div className="text-xs text-muted-foreground">Attività regolarmente registrata a Cipro</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-background border border-brand-border rounded">

                <div>
                  <div className="text-sm font-bold text-foreground">Organizzazione Trasparente</div>
                  <div className="text-xs text-muted-foreground">Preventivi chiari e supporto dedicato</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold uppercase text-foreground mb-5 text-balance"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Pronto a Partire?
        </h2>
        <p className="text-muted-foreground mb-8 text-pretty max-w-md mx-auto">
          Esplora i nostri tour o contattaci per costruire un itinerario su misura.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tours"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
          >
            Esplora i Tour <ArrowRight size={15} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand-border text-foreground text-sm font-bold uppercase tracking-widest rounded hover:border-primary hover:text-primary transition-colors"
          >
            Contattaci
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { getFeaturedTours } from '@/lib/tours-data'
import {
  ArrowRight,
  MapPin,
  Shield,
  Users,
  Star,
  ChevronDown,
  Plane,
  Calendar,
  CreditCard,
  HelpCircle,
} from 'lucide-react'

const tips = [
  {
    icon: Plane,
    title: 'Prenota con anticipo',
    text: "I biglietti per le grandi partite europee si esauriscono rapidamente. Ti consigliamo di prenotare almeno 8-10 settimane prima dell'evento per garantirti i posti migliori.",
  },
  {
    icon: Calendar,
    title: 'Pianifica il viaggio',
    text: "Arriva in città almeno il giorno prima della partita. Avrai tempo per esplorare, riposare ed essere in forma per l'evento. La sera del match, considera il traffico e pianifica i trasferimenti.",
  },
  {
    icon: Shield,
    title: 'Assicurazione di viaggio',
    text: "Non partire mai senza copertura assicurativa adeguata. I nostri pacchetti includono assistenza h24, ma ti raccomandiamo sempre un'assicurazione personale per voli e bagagli.",
  },
  {
    icon: CreditCard,
    title: 'Budget intelligente',
    text: "Considera sempre un budget extra del 10-15% per spese impreviste: souvenir, ristorazione autonoma, attività facoltative. Avere liquidità locale è sempre consigliato.",
  },
]

const faqs = [
  {
    q: "I biglietti delle partite sono inclusi nel prezzo del tour?",
    a: "Sì, tutti i nostri pacchetti includono i biglietti per la partita specificata. La categoria del posto è indicata nella descrizione di ogni tour. È possibile richiedere un upgrade a categorie superiori soggetto a disponibilità.",
  },
  {
    q: "Cosa succede se la partita viene rinviata o annullata?",
    a: "In caso di rinvio ufficiale, il nostro staff ti assisterà nel riprogrammare il viaggio senza costi aggiuntivi. In caso di annullamento definitivo, verrai rimborsato integralmente entro 14 giorni lavorativi.",
  },
  {
    q: "I tour sono adatti anche a bambini e famiglie?",
    a: "Assolutamente sì. Abbiamo pacchetti family con biglietti ridotti per i minori e hotel con sistemazioni familiari. Contattaci per personalizzare il tour in base alle esigenze della tua famiglia.",
  },
  {
    q: "Come posso prenotare un tour?",
    a: "Per prenotare un tour, utilizza il modulo di contatto nella pagina di ogni tour oppure scrivici direttamente a info@italymatchtours.com. Il nostro team ti invierà una proposta dettagliata con disponibilità e tutti i dettagli logistici entro 24 ore lavorative.",
  },
  {
    q: "I trasferimenti dall'aeroporto sono inclusi?",
    a: "Tutti i nostri pacchetti standard includono i trasferimenti privati da/per l'aeroporto principale della città di destinazione. Il personale sarà ad attenderti all'uscita arrivi con cartello identificativo.",
  },
  {
    q: "Posso personalizzare un tour o richiedere un pacchetto su misura?",
    a: "Certamente. Il nostro team è specializzato nella creazione di esperienze su misura. Dalla scelta della partita alla categoria dei biglietti, dalle escursioni agli hotel, possiamo costruire il tour perfetto per te.",
  },
]

export default function HomePage() {
  const featured = getFeaturedTours()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative h-[80vh] min-h-[520px] max-h-[720px] flex items-end overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Stadio italiano di notte"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-10 md:pb-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Tour Sportivi · Italia &amp; Europa
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground mb-5 text-balance"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Vivi il Calcio
              <br />
              <span className="text-primary">dal Vivo.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8 max-w-sm text-pretty">
              Pacchetti esclusivi per assistere alle partite più emozionanti d&apos;Europa. Hotel, biglietti e
              trasferimenti inclusi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
              >
                Scopri i Tour <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground/30 text-foreground text-sm font-bold uppercase tracking-widest rounded hover:border-primary hover:text-primary transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 right-6 hidden md:flex flex-col items-center gap-1 text-foreground/40 animate-bounce">
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ─── ABOUT US PREVIEW ─── */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative h-80 md:h-96 rounded overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Il team di Italy Match Tours"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-3 rounded hidden md:block">
              <div
                className="text-2xl font-extrabold leading-none"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                12 Anni
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-0.5">di Esperienza</div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Chi Siamo</p>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground mb-5 text-balance"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Esperienza e Passione per il Calcio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              Italy Match Tours nasce dalla passione condivisa per il calcio e il viaggio. Siamo un team di specialisti
              in turismo sportivo con sede a Nicosia, Cipro, e un network consolidato in tutta Europa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Da oltre 12 anni organizziamo esperienze indimenticabili per tifosi italiani ed europei, combinando i
              migliori biglietti con hotel selezionati e trasferimenti privati.
            </p>
            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: Shield, text: 'Biglietti garantiti e autenticati' },
                { icon: Users, text: 'Assistenza personale prima e durante il tour' },
                { icon: Star, text: 'Esperienze personalizzabili su richiesta' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all"
            >
              Scopri di più <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TOURS PREVIEW ─── */}
      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">I Nostri Tour</p>
              <h2
                className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Tour in Evidenza
              </h2>
            </div>
            <Link
              href="/tours"
              className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Vedi Tutti <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border text-sm font-bold uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary transition-colors rounded"
            >
              Vedi Tutti i Tour <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TIPS ─── */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Consigli Utili</p>
          <h2
            className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Prima di Partire
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-brand-surface border border-brand-border rounded p-6 hover:border-primary transition-colors"
            >
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-4">
                <tip.icon size={20} className="text-primary" />
              </div>
              <h3
                className="text-lg font-extrabold uppercase mb-2 text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {tip.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFO SECTION ─── */}
      <section className="relative py-20 overflow-hidden bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
            {[
              {
                tag: 'Il Tuo Posto',
                headline: 'Biglietti Autentici, Posti Premium',
                body: "Collaboriamo direttamente con i migliori canali ufficiali per garantirti biglietti autentici nelle migliori categorie. Niente rivenditori di seconda mano, niente sorprese.",
                icon: '⚡',
              },
              {
                tag: 'Il Tuo Hotel',
                headline: 'Sistemazioni Selezionate',
                body: "Ogni hotel nei nostri pacchetti è visitato e valutato dal nostro team. Scegliamo strutture nel cuore della città, a breve distanza dagli impianti e dai principali punti di interesse.",
                icon: '🏆',
              },
              {
                tag: 'La Tua Esperienza',
                headline: 'Molto Più di una Partita',
                body: "Un tour Italy Match non è solo una partita: è una immersione culturale nella città ospitante. Visite guidate, ristoranti locali, esperienze uniche e ricordi duraturi.",
                icon: '🌍',
              },
            ].map((item) => (
              <div key={item.tag} className="bg-brand-surface p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">{item.tag}</p>
                <h3
                  className="text-2xl md:text-3xl font-extrabold uppercase leading-tight text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {item.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-foreground mb-5 text-balance"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Domande Frequenti
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Non trovi la risposta che cerchi? Il nostro team è sempre disponibile.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
            >
              Contattaci <ArrowRight size={14} />
            </Link>
          </div>

          <div className="md:col-span-3 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-brand-border rounded overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <HelpCircle size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground text-pretty">{faq.q}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className="text-muted-foreground flex-shrink-0 group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <div className="px-5 pb-4 pt-2">
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/tips-bg.jpg"
          alt="Pianifica il tuo prossimo tour sportivo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
        <div className="relative z-10 max-w-xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Pronto a Partire?</p>
          <h2
            className="text-4xl md:text-6xl font-extrabold uppercase leading-tight text-foreground mb-5 text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Il Tuo Prossimo Match Ti Aspetta
          </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Scegli tra gli oltre 38 tour disponibili in Italia e in Europa. Contattaci per ricevere tutti i dettagli e
              costruire il tuo pacchetto su misura.
            </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
          >
            Esplora Tutti i Tour <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

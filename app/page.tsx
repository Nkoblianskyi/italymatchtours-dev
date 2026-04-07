import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { getFeaturedTours } from '@/lib/tours-data'
import {
  ArrowRight,
  Shield,
  Users,
  Star,
  ChevronDown,
  Compass,
  Calendar,
  Backpack,
  HelpCircle,
  Wind,
  Map,
} from 'lucide-react'

const tips = [
  {
    icon: Calendar,
    title: 'Prenota con anticipo',
    text: "I posti nei nostri tour sono limitati per garantire un\'esperienza autentica. Ti consigliamo di prenotare almeno 8-10 settimane prima della data di partenza, specialmente per i tour estivi in montagna.",
  },
  {
    icon: Backpack,
    title: 'Equipaggiamento giusto',
    text: "Ogni tour ha una lista equipaggiamento dettagliata che ti invieremo dopo la prenotazione. Investire in calzature e abbigliamento tecnici di qualità fa la differenza tra una buona e un\'eccellente esperienza.",
  },
  {
    icon: Shield,
    title: 'Assicurazione di viaggio',
    text: "I nostri pacchetti includono assicurazione alpinistica o sportiva di base. Per i tour internazionali o ad alta quota raccomandiamo un\'integrazione personale con copertura per rimpatrio e soccorso aereo.",
  },
  {
    icon: Wind,
    title: 'Preparazione fisica',
    text: "Ogni tour ha un livello di difficoltà indicato. Ti suggeriamo di iniziare un piano di allenamento graduale almeno 6 settimane prima. Su richiesta inviamo un programma di preparazione specifico per il tour scelto.",
  },
]

const faqs = [
  {
    q: "Che livello di esperienza occorre per partecipare ai vostri tour?",
    a: "Ogni tour indica chiaramente il livello richiesto: principiante, intermedio o avanzato. Per i trek ad alta quota e i tour MTB impegnativi è consigliata esperienza specifica. Per i tour cicloturistici e le maratone accogliamo tutti i livelli. Contattaci se hai dubbi: troveremo il tour adatto a te.",
  },
  {
    q: "Le attrezzature (bici, moto, bastoncini) sono incluse?",
    a: "Dipende dal tour. Nei tour ciclistici e MTB la bici è inclusa nel pacchetto base (gravel o full-suspension a seconda del percorso). Nei moto-tour il partecipante porta la propria moto; su richiesta possiamo facilitare il noleggio locale. Bastoncini da trekking inclusi in tutti i tour hiking.",
  },
  {
    q: "Quante persone ci sono per gruppo?",
    a: "Lavoriamo con gruppi piccoli: da un minimo di 4 a un massimo di 10 partecipanti per i tour avventura, e fino a 8 moto per i tour motociclistici. Questa scelta garantisce un\'esperienza personalizzata, sicura e rispettosa degli ecosistemi attraversati.",
  },
  {
    q: "Come posso prenotare un tour?",
    a: "Utilizza il modulo di contatto presente nella pagina di ogni tour oppure scrivici direttamente a info@italymatchtours.com. Il nostro team ti risponderà entro 24 ore lavorative con disponibilità, dettagli logistici e proposta personalizzata.",
  },
  {
    q: "Cosa include il trasferimento da/per l\'aeroporto?",
    a: "Tutti i pacchetti standard includono il trasferimento privato da/per l\'aeroporto principale della città di partenza. Verrai accolto all\'uscita arrivi da un membro del nostro staff con cartello identificativo.",
  },
  {
    q: "Posso personalizzare un tour o richiedere un itinerario su misura?",
    a: "Assolutamente sì. Progettiamo tour completamente personalizzati per gruppi privati, aziende e famiglie. Dalla scelta dell\'itinerario alla difficoltà del percorso, dall\'alloggio al servizio catering: costruiamo l\'avventura perfetta per te.",
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
          src="/images/tour-trekking-alpi.jpg"
          alt="Tour avventura in montagna"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-10 md:pb-16">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Tour d’Autore &middot; Italia &amp; Europa
            </p>
            <h1
              className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground mb-5 text-balance"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Vivi
              <br />
              <span className="text-primary">l&apos;Avventura.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-8 max-w-sm text-pretty">
              Trekking d’alta quota, viaggi in bici, moto-tour panoramici e avventure MTB. Esperienze d’autore in Italia
              e in tutta Europa, con guida esperta e logistica curata.
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
              Esperienza e Passione per l’Outdoor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              Italy Match Tours nasce dalla passione per l’outdoor e per il viaggio autentico. Siamo un team di guide
              certificate e specialisti di turismo attivo con sede a Nicosia, Cipro, e un network consolidato in tutta
              Europa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Da oltre 12 anni organizziamo trekking, viaggi in bici, moto-tour e avventure in mountain bike,
              combinando attività all’aria aperta ed esplorazione culturale del territorio.
            </p>
            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: Shield, text: 'Guide certificate e assicurazione inclusa' },
                { icon: Users, text: 'Gruppi piccoli, esperienza personalizzata' },
                { icon: Star, text: 'Itinerari d’autore progettati sul territorio' },
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
                tag: 'Le tue Guide',
                headline: 'Certified & Passionate',
                body: "Tutte le nostre guide sono certificate e selezionate sul territorio. Prima di condurre un tour, ogni percorso viene verificato in più stagioni per garantire sicurezza e qualità.",
                icon: Compass,
              },
              {
                tag: 'Il tuo Alloggio',
                headline: 'Selezionato sul Territorio',
                body: "Agriturismi biologici, rifugi alpini tradizionali, masi tirolesi, paradores storici. Ogni struttura nei nostri pacchetti è visitata e approvata dal nostro team: nessun compromesso sulla qualità.",
                icon: Map,
              },
              {
                tag: 'La tua Avventura',
                headline: 'Molto più di un Tour',
                body: "Un’esperienza Italy Match Tours non è solo attività: include cultura locale, sapori del territorio, racconti delle guide e la magia dei luoghi attraversati. Ricordi che durano.",
                icon: Star,
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
              Non trovi la risposta che cerchi? Il nostro team &egrave; sempre disponibile.
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
          src="/images/tour-moto-dolomiti.jpg"
          alt="Pianifica il tuo prossimo tour"
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
            La Tua Prossima Avventura Ti Aspetta
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Scegli tra i tour disponibili in Italia e in Europa. Contattaci per ricevere tutti i dettagli e
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

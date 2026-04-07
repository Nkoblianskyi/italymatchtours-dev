'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { ContactModal } from '@/components/contact-modal'
import { tours, getTourBySlug, formatDate } from '@/lib/tours-data'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Users,
  Shield,
  MessageCircle,
} from 'lucide-react'

const categoryLabel: Record<string, string> = {
  bici: 'Bici',
  mtb: 'Mountain Bike',
  moto: 'Moto Tour',
  trekking: 'Trekking',
}

export default function TourDetailPage() {
  const params = useParams<{ slug: string }>()
  const tour = getTourBySlug(params.slug)
  const [modalOpen, setModalOpen] = useState(false)

  if (!tour) return notFound()

  const related = tours
    .filter((t) => t.id !== tour.id && (t.region === tour.region || t.categoria === tour.categoria))
    .slice(0, 3)

  const tourLabel = `${tour.city}, ${tour.country} — ${formatDate(tour.dateStart)}`

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[65vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden">
        <Image
          src={tour.image}
          alt={`Tour a ${tour.city}`}
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-foreground mb-5 transition-colors"
          >
            <ArrowLeft size={14} /> Tutti i Tour
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest">
              {tour.region === 'italia' ? 'Italia' : 'Europa'}
            </span>
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest">
              {categoryLabel[tour.categoria]}
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold uppercase leading-tight text-foreground mb-2 text-balance"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {tour.city}, {tour.country}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/70">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              {formatDate(tour.dateStart)} — {formatDate(tour.dateEnd)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {tour.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              {tour.country}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-10">
              <h2
                className="text-3xl font-extrabold uppercase mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Il Tour
              </h2>
              <p className="text-foreground/80 leading-relaxed text-pretty">{tour.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div className="mb-10">
              <h2
                className="text-3xl font-extrabold uppercase mb-5 text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Punti Salienti
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-start gap-3 p-4 bg-brand-surface border border-brand-border rounded hover:border-primary transition-colors"
                  >
                    <Star size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="mb-10">
              <h2
                className="text-3xl font-extrabold uppercase mb-5 text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Cosa Include
              </h2>
              <ul className="space-y-3">
                {tour.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: 'Organizzazione', text: 'Logistica curata e checklist condivisa' },
                { icon: Users, title: 'Assistenza', text: 'Il nostro staff è sempre disponibile' },
                { icon: CheckCircle, title: 'Selezione', text: 'Percorsi e strutture verificati' },
              ].map((badge) => (
                <div key={badge.title} className="flex items-start gap-3 p-4 bg-brand-surface border border-brand-border rounded">
                  <badge.icon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-0.5">{badge.title}</div>
                    <div className="text-xs text-muted-foreground">{badge.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-brand-surface border border-brand-border rounded overflow-hidden">
                {/* Header */}
                <div className="bg-primary px-6 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-1">
                    Interessato a questo tour?
                  </div>
                  <div
                    className="text-2xl font-extrabold text-primary-foreground leading-tight"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    Richiedi Informazioni
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 border-b border-brand-border">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Destinazione</span>
                      <span className="font-semibold text-foreground">{tour.city}, {tour.country}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Data inizio</span>
                      <span className="font-semibold text-foreground">{formatDate(tour.dateStart)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Durata</span>
                      <span className="font-semibold text-foreground">{tour.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Attività</span>
                      <span className="font-semibold text-foreground">{categoryLabel[tour.categoria]}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 space-y-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={15} />
                    Contattaci per questo Tour
                  </button>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Il nostro team risponde entro 24 ore lavorative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {related.length > 0 && (
        <section className="bg-brand-surface border-t border-brand-border py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <h2
                className="text-3xl md:text-4xl font-extrabold uppercase text-foreground"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Tour Simili
              </h2>
              <Link
                href="/tours"
                className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                Tutti i Tour
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tourContext={tourLabel}
      />
    </div>
  )
}

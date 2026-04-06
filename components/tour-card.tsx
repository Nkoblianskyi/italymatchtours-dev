'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tour, formatDateShort, formatDate } from '@/lib/tours-data'
import { Calendar, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import { ContactModal } from '@/components/contact-modal'

interface TourCardProps {
  tour: Tour
  variant?: 'default' | 'wide'
}

export function TourCard({ tour, variant = 'default' }: TourCardProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const tourLabel = `${tour.city}, ${tour.country} — ${formatDate(tour.dateStart)}`

  if (variant === 'wide') {
    return (
      <>
        <article className="relative overflow-hidden rounded bg-brand-surface border border-brand-border hover:border-primary transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row h-full">
            {/* Image */}
            <Link href={`/tours/${tour.slug}`} className="block relative w-full sm:w-64 h-52 sm:h-auto flex-shrink-0 overflow-hidden">
              <Image
                src={tour.image}
                alt={`Tour sportivo a ${tour.city}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-surface/50 sm:block hidden" />
              {tour.featured && (
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1">
                  In Evidenza
                </span>
              )}
            </Link>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={12} className="text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{tour.city}, {tour.country}</span>
                  <span className="text-brand-border">·</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{tour.region === 'italia' ? 'Italia' : 'Europa'}</span>
                </div>
                <Link href={`/tours/${tour.slug}`}>
                  <h3
                    className="text-xl font-extrabold uppercase leading-tight mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                  >
                    {tour.city} — {tour.country}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{tour.shortDescription}</p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-border">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {formatDateShort(tour.dateStart)} — {formatDateShort(tour.dateEnd)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{tour.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={12} />
                  Richiedi Info
                </button>
              </div>
            </div>
          </div>
        </article>

        <ContactModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          tourContext={tourLabel}
        />
      </>
    )
  }

  return (
    <>
      <article className="relative overflow-hidden rounded h-full bg-brand-surface border border-brand-border hover:border-primary transition-all duration-300 group flex flex-col">
        {/* Image */}
        <Link href={`/tours/${tour.slug}`} className="block relative h-56 overflow-hidden flex-shrink-0">
          <Image
            src={tour.image}
            alt={`Tour sportivo a ${tour.city}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="tour-card-overlay absolute inset-0" />
          {tour.featured && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1">
              In Evidenza
            </span>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-1 mb-1">
              <MapPin size={11} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{tour.city}</span>
              <span className="text-xs text-white/60 ml-1">· {tour.country}</span>
            </div>
            <div className="text-xs text-white/60">
              {formatDate(tour.dateStart)}
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">{tour.shortDescription}</p>
          <div className="flex items-center justify-between pt-3 border-t border-brand-border">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={11} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/tours/${tour.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Dettagli tour"
              >
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={11} />
                Info
              </button>
            </div>
          </div>
        </div>
      </article>

      <ContactModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tourContext={tourLabel}
      />
    </>
  )
}

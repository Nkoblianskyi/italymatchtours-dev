'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { tours, Tour } from '@/lib/tours-data'
import { Search, SlidersHorizontal, X } from 'lucide-react'

type RegionFilter = 'tutti' | 'italia' | 'europa'
type CategoryFilter = 'tutti' | 'bici' | 'moto' | 'trekking' | 'mtb'
type SortOption = 'data' | 'durata-asc' | 'durata-desc'

const regionLabels: Record<RegionFilter, string> = {
  tutti: 'Tutte le Regioni',
  italia: 'Italia',
  europa: 'Europa',
}

const categoryLabels: Record<CategoryFilter, string> = {
  tutti: 'Tutte le Attività',
  bici: 'Bici',
  moto: 'Moto Tour',
  trekking: 'Trekking',
  mtb: 'Mountain Bike',
}

const sortLabels: Record<SortOption, string> = {
  data: 'Data (prossimi)',
  'durata-asc': 'Durata crescente',
  'durata-desc': 'Durata decrescente',
}

export default function ToursPage() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<RegionFilter>('tutti')
  const [category, setCategory] = useState<CategoryFilter>('tutti')
  const [sort, setSort] = useState<SortOption>('data')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let result: Tour[] = [...tours]

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.city.toLowerCase().includes(q) ||
          t.country.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q)
      )
    }

    if (region !== 'tutti') result = result.filter((t) => t.region === region)
    if (category !== 'tutti') result = result.filter((t) => t.categoria === category)

    result.sort((a, b) => {
      if (sort === 'data') return a.dateStart.localeCompare(b.dateStart)
      if (sort === 'durata-asc') return parseInt(a.duration) - parseInt(b.duration)
      if (sort === 'durata-desc') return parseInt(b.duration) - parseInt(a.duration)
      return 0
    })

    return result
  }, [search, region, category, sort])

  const hasActiveFilters = region !== 'tutti' || category !== 'tutti' || search.trim()

  const resetFilters = () => {
    setRegion('tutti')
    setCategory('tutti')
    setSearch('')
    setSort('data')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <Image
          src="/images/tour-ciclismo-toscana.jpg"
          alt="Catalogo tour"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Catalogo Completo</p>
          <h1
            className="text-5xl md:text-7xl font-extrabold uppercase leading-none text-foreground mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Tutti i Tour
          </h1>
          <p className="text-muted-foreground max-w-xl text-pretty">
            Esplora la nostra selezione di tour in Italia e in tutta Europa. Usa i filtri per trovare l&apos;esperienza
            più adatta a te.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          {/* Mobile: search + toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cerca città, paese..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-muted border border-brand-border rounded pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 px-4 py-2 border rounded text-sm font-semibold transition-colors ${
                hasActiveFilters
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-brand-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              <SlidersHorizontal size={15} />
              <span className="hidden sm:inline">Filtri</span>
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Expanded Filters */}
          {filtersOpen && (
            <div className="mt-3 pt-3 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Region */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">
                  Regione
                </label>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(regionLabels) as RegionFilter[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setRegion(key)}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded transition-colors ${
                        region === key
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {regionLabels[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">
                  Attività
                </label>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(categoryLabels) as CategoryFilter[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setCategory(key)}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded transition-colors ${
                        category === key
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {categoryLabels[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort + Reset */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1.5">
                  Ordina per
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="flex-1 bg-muted border border-brand-border rounded px-3 py-1.5 text-xs text-foreground focus:outline-none focus:border-primary"
                  >
                    {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                      <option key={key} value={key}>
                        {sortLabels[key]}
                      </option>
                    ))}
                  </select>
                  {hasActiveFilters && (
                    <button
                      onClick={resetFilters}
                      className="px-3 py-1.5 border border-brand-border text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-foreground/30 rounded transition-colors whitespace-nowrap"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'tour trovato' : 'tour trovati'}
          </p>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-opacity"
            >
              <X size={12} /> Azzera filtri
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div
              className="text-6xl font-extrabold uppercase text-brand-border mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Nessun Risultato
            </div>
            <p className="text-muted-foreground mb-6">
              Nessun tour corrisponde ai tuoi criteri di ricerca.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
            >
              Mostra Tutti i Tour
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} variant="wide" />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}

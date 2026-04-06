'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/tours', label: 'Tour' },
  { href: '/about', label: 'Chi Siamo' },
  { href: '/contact', label: 'Contatti' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 items-center font-mono text-xl font-800 uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          style={{ fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800 }}
        >
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="text-primary">ITALY</span>
          <span className="text-foreground">MATCH</span>
          <span className="text-muted-foreground text-sm font-semibold ml-1">TOURS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
          >
            Contattaci
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center py-3 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
              >
                Contattaci
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="flex gap-2 items-center text-2xl font-extrabold uppercase tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <span className="text-primary">ITALY</span>
              <span className="text-foreground">MATCH</span>
              <span className="text-muted-foreground text-base font-semibold ml-1">TOURS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Tour d’autore in Italia e in Europa: trekking, bici, moto-tour e avventure MTB. Piccoli gruppi, logistica
              curata e un modo autentico di vivere i luoghi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/tours', label: 'Tutti i Tour' },
                { href: '/about', label: 'Chi Siamo' },
                { href: '/contact', label: 'Contatti' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Legale</h4>
            <ul className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company info */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-xs text-muted-foreground leading-relaxed">
            <p className="font-semibold text-foreground mb-1">K.C. NTOMATA LIMITED</p>
            <p>Stylianou Lena, 24 Christiana Court, Flat/Office 202</p>
            <p>Strovolos, 2019 Nicosia, Cyprus</p>
          </div>
          <p className="text-xs text-muted-foreground self-end">
            &copy; {new Date().getFullYear()} italymatchtours.com — Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}

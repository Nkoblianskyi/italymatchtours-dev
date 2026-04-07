import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Italy Match Tours',
  description: 'Informativa sulla privacy di Italy Match Tours (italymatchtours.com).',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">Legale</p>
        <h1
          className="text-4xl md:text-6xl font-extrabold uppercase text-foreground mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground mb-10">Ultimo aggiornamento: 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>1. Titolare del Trattamento</h2>
            <p className="leading-relaxed">
              Il titolare del trattamento dei dati personali è <strong className="text-foreground">K.C. NTOMATA LIMITED</strong>, con sede legale in Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus. Sito web: <a href="https://italymatchtours.com" className="text-primary hover:underline">italymatchtours.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>2. Dati Raccolti</h2>
            <p className="leading-relaxed mb-3">Raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dati di contatto: nome, cognome, indirizzo email</li>
              <li>Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, durata della visita</li>
              <li>Dati di prenotazione: preferenze di tour e dati necessari alla gestione amministrativa (se applicabile)</li>
              <li>Cookie tecnici e analitici (vedi Cookie Policy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>3. Finalità del Trattamento</h2>
            <p className="leading-relaxed mb-3">I dati vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Gestire le prenotazioni dei tour</li>
              <li>Migliorare il servizio attraverso analisi statistiche anonimizzate</li>
              <li>Adempiere agli obblighi di legge</li>
              <li>Inviare comunicazioni promozionali (solo con consenso esplicito)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>4. Base Giuridica</h2>
            <p className="leading-relaxed">
              Il trattamento si basa sul contratto (esecuzione del servizio prenotato), sull&apos;interesse legittimo (miglioramento del servizio) e sul consenso (comunicazioni promozionali). Il consenso può essere revocato in qualsiasi momento contattandoci via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>5. Conservazione dei Dati</h2>
            <p className="leading-relaxed">
              I dati sono conservati per il tempo strettamente necessario alle finalità di cui sopra e comunque non oltre 5 anni dalla conclusione del rapporto contrattuale, salvo obblighi di legge che impongano periodi più lunghi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>6. I Tuoi Diritti (GDPR)</h2>
            <p className="leading-relaxed mb-3">Ai sensi del GDPR (Reg. UE 2016/679) hai diritto a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Richiedere la cancellazione (&quot;diritto all&apos;oblio&quot;)</li>
              <li>Limitare il trattamento</li>
              <li>Portabilità dei dati</li>
              <li>Opporsi al trattamento</li>
              <li>Proporre reclamo all&apos;autorità di controllo competente</li>
            </ul>
            <p className="leading-relaxed mt-3">Per esercitare questi diritti, scrivi a: <a href="mailto:info@italymatchtours.com" className="text-primary hover:underline">info@italymatchtours.com</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>7. Trasferimenti Internazionali</h2>
            <p className="leading-relaxed">
              Alcuni fornitori di servizi tecnici (es. hosting, analytics) potrebbero elaborare dati al di fuori dello Spazio Economico Europeo. In tali casi, ci assicuriamo che siano adottate garanzie adeguate (es. Standard Contractual Clauses della Commissione Europea).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold uppercase text-foreground mb-3" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>8. Contatti</h2>
            <p className="leading-relaxed">
              Per qualsiasi domanda relativa al trattamento dei tuoi dati, contattaci all&apos;indirizzo: <a href="mailto:info@italymatchtours.com" className="text-primary hover:underline">info@italymatchtours.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

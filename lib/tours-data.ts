// Central tours data — all dates in the future (after April 6, 2026)
export interface Tour {
  id: string
  slug: string
  city: string
  country: string
  region: 'italia' | 'europa'
  categoria: 'bici' | 'moto' | 'trekking' | 'mtb'
  dateStart: string
  dateEnd: string
  duration: string
  image: string
  shortDescription: string
  fullDescription: string
  includes: string[]
  highlights: string[]
  featured?: boolean
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'grande-anello-toscano',
    city: 'Siena',
    country: 'Italia',
    region: 'italia',
    categoria: 'bici',
    dateStart: '2026-05-09',
    dateEnd: '2026-05-14',
    duration: '5 notti',
    image: '/images/tour-ciclismo-toscana.jpg',
    shortDescription:
      'Cinque giorni in sella attraverso i paesaggi più iconici della Toscana: colline senesi, vigneti del Chianti e strade bianche silenziose.',
    fullDescription:
      'Il Grande Anello Toscano è un viaggio in bicicletta tra le colline ondulate delle Crete Senesi, i vigneti del Chianti Classico, i borghi medievali di Montalcino e Pienza, e i panorami senza fine della Val d\'Orcia. Le strade bianche — tratturi di ghiaia finissima storicamente battuti dai contadini — regalano una sensazione di libertà assoluta. Ogni tappa è calibrata per unire ritmo e scoperta: si pedala al mattino, si esplorano borghi al pomeriggio, si cena al tramonto. Il gruppo è limitato a 10 persone per garantire un\'esperienza autentica e personalizzata. Bici da touring o gravel disponibili su richiesta.',
    includes: [
      '5 notti in agriturismi e dimore storiche selezionati',
      'Guida ciclistica certificata per tutto il percorso',
      'Bici gravel disponibile su richiesta (inclusa nel prezzo)',
      'Trasferimento bagagli tra le tappe',
      'Colazione e cena tipica toscana ogni giorno',
      'Degustazione vini Chianti Classico con produttore locale',
      'Mappa GPX dettagliata e supporto via app',
      'Assistenza meccanica mobile inclusa',
    ],
    highlights: [
      'Strade bianche della Val d\'Orcia',
      'Borghi medievali di Montalcino e Pienza',
      'Degustazione vini con produttore locale',
      'Gruppo limitato a 10 ciclisti',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'serpenti-di-asfalto-dolomiti',
    city: 'Bolzano',
    country: 'Italia',
    region: 'italia',
    categoria: 'moto',
    dateStart: '2026-06-06',
    dateEnd: '2026-06-11',
    duration: '5 notti',
    image: '/images/tour-moto-dolomiti.jpg',
    shortDescription:
      'Sei giorni in moto tra i passi più spettacolari delle Dolomiti: curve perfette, panorami da cartolina e la libertà delle Alpi italiane.',
    fullDescription:
      'Le Dolomiti sono un paradiso per chi ama la guida su due ruote. Passi leggendari come lo Stelvio, il Pordoi, il Sella e il Gardena si succedono in un itinerario costruito per chi vuole asfalto perfetto, pareti rocciose verticali e pascoli infiniti. Il tour parte da Bolzano e percorre un anello di circa 1.200 km in sei tappe, con soste in masi tirolesi e rifugi alpini. Le strade sono prevalentemente a traffico ridotto, scelte per la qualità dell\'asfalto e la spettacolarità delle curve. Si viaggia in gruppo di massimo 8 moto, con guida in testa e sweeper in coda. È consigliata esperienza su strade di montagna.',
    includes: [
      '5 notti in masi e hotel alpini 4 stelle',
      'Guida motociclistica esperta (lead + sweep)',
      'Tracciato GPS pre-caricato su navigatore',
      'Briefing quotidiano mattutino e debriefing serale',
      'Cena tirolese con prodotti locali ogni sera',
      'Assistenza stradale 24h per il gruppo',
      'Zaino tecnico impermeabile in omaggio',
      'Assicurazione viaggio inclusa',
    ],
    highlights: [
      'Passo dello Stelvio e Passo Pordoi',
      'Gruppo limitato a 8 moto',
      'Masi tirolesi e rifugi alpini',
      'Asfalto perfetto e zero traffico',
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'tetto-delle-alpi-trekking',
    city: 'Courmayeur',
    country: 'Italia',
    region: 'italia',
    categoria: 'trekking',
    dateStart: '2026-07-18',
    dateEnd: '2026-07-24',
    duration: '6 notti',
    image: '/images/tour-trekking-alpi.jpg',
    shortDescription:
      'Sette giorni di trekking d\'alta quota tra i ghiacciai e le vette delle Alpi valdostane: un viaggio fisico e spirituale oltre i 3.000 metri.',
    fullDescription:
      'Il trekking ad alta quota nelle Alpi valdostane è un\'esperienza che ridefinisce il concetto di grandezza. Partendo da Courmayeur, il percorso sale progressivamente attraverso boschi di larici, alpeggi con marmotte e stambecchi, morene glaciali e creste panoramiche con viste su ghiacciai eterni. Le tappe giornaliere variano dai 12 ai 18 km con dislivelli tra i 700 e i 1.200 metri. Si dorme in rifugi alpini tradizionali, dove la semplicità dell\'ambiente si accompagna alla generosità della cucina montana. La guida alpina certificata UIAGM accompagna il gruppo in ogni tappa, garantendo sicurezza e trasmettendo la profonda conoscenza di questi luoghi. Limite di gruppo: 8 persone.',
    includes: [
      '6 notti in rifugi alpini tradizionali certificati',
      'Guida alpina UIAGM per tutta la durata',
      'Mezza pensione in rifugio (cena e colazione)',
      'Noleggio bastoncini da trekking',
      'Cartografia dettagliata e tracciati GPS',
      'Assicurazione alpinistica inclusa',
      'Transfer da/per Courmayeur',
      'Briefing tecnico pre-partenza',
    ],
    highlights: [
      'Vette oltre i 3.000 metri slm',
      'Guida alpina UIAGM certificata',
      'Rifugi alpini tradizionali',
      'Gruppo limitato a 8 persone',
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'etna-e-mare-mountain-bike',
    city: 'Catania',
    country: 'Italia',
    region: 'italia',
    categoria: 'mtb',
    dateStart: '2026-09-19',
    dateEnd: '2026-09-24',
    duration: '5 notti',
    image: '/images/tour-ciclismo-sicilia.jpg',
    shortDescription:
      'Mountain bike sull\'Etna e lungo la costa siciliana: un tour unico che unisce lava, mare cristallino e la cultura barocca di Catania.',
    fullDescription:
      'La Sicilia in mountain bike è un contrasto permanente: dalla durezza vulcanica dell\'Etna alla morbidezza delle spiagge ioniche. Questo tour di cinque notti parte da Catania e sale progressivamente sulle pendici del vulcano attivo più grande d\'Europa, percorrendo sentieri di lava solidificata con vista sul mare a 2.000 metri di quota. Le tappe alternate portano lungo la costa, su mulattiere che attraversano vigneti di Nerello Mascalese e agrumeti profumati. Le bici full-suspension sono fornite dalla guida e calibrate per ogni partecipante. Ogni sera, cena in masseria con prodotti a chilometro zero. Adatto a ciclisti con esperienza su terreno misto, livello intermedio.',
    includes: [
      '5 notti in masserie e hotel charme',
      'MTB full-suspension fornita e tarata (inclusa)',
      'Guida MTB certificata per tutto il percorso',
      'Casco e protezioni forniti',
      'Cena in masseria con prodotti locali ogni sera',
      'Degustazione vino Nerello Mascalese',
      'Shuttle per i tratti di risalita su Etna',
      'Kit pronto soccorso e assistenza meccanica',
    ],
    highlights: [
      'Sentieri vulcanici sull\'Etna',
      'Vista sul mare Ionio a 2.000 m slm',
      'MTB full-suspension inclusa',
      'Cene in masseria a km zero',
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'andalusia-in-moto',
    city: 'Siviglia',
    country: 'Spagna',
    region: 'europa',
    categoria: 'moto',
    dateStart: '2026-10-10',
    dateEnd: '2026-10-16',
    duration: '6 notti',
    image: '/images/tour-moto-andalusia.jpg',
    shortDescription:
      'Sette giorni in moto attraverso l\'Andalusia più autentica: pueblos blancos, sierra selvagge e strade che sembrano disegnate per le due ruote.',
    fullDescription:
      'L\'Andalusia in autunno è il paradiso dei motociclisti: temperature miti, nessun turista di massa, asfalto impeccabile e paesaggi che cambiano completamente ogni 50 km. Il tour parte da Siviglia e attraversa la Sierra Morena, i pueblos blancos di Ronda e Arcos de la Frontera, la costa di Tarifa con vista sull\'Africa, le gole di El Chorro e il Parco Nazionale di Grazalema. Circa 1.400 km in sette tappe di intensità progressiva. Si alloggia in paradores storici e boutique hotel nei borghi medievali. La guida parla italiano e spagnolo e conosce queste strade in ogni stagione. Gruppo massimo 10 moto.',
    includes: [
      '6 notti in paradores e boutique hotel storici',
      'Guida motociclistica bilingue (IT/ES)',
      'Tracciati GPS per ogni tappa',
      'Cena tipica andalusa ogni sera',
      'Ingresso al Parco Nazionale di Grazalema',
      'Assicurazione viaggio completa',
      'Assistenza meccanica mobile',
      'Guida cartacea del percorso in omaggio',
    ],
    highlights: [
      'Pueblos blancos e Ronda',
      'Costa di Tarifa con vista sull\'Africa',
      'Paradores storici',
      'Asfalto perfetto in bassa stagione',
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'pirenei-selvaggi-trekking',
    city: 'Pamplona',
    country: 'Spagna',
    region: 'europa',
    categoria: 'trekking',
    dateStart: '2026-08-08',
    dateEnd: '2026-08-15',
    duration: '7 notti',
    image: '/images/tour-trekking-pyrenees.jpg',
    shortDescription:
      'Otto giorni di trekking d\'alta quota attraverso i Pirenei spagnoli: valichi antichi, laghi glaciali e la pura solitudine della montagna selvaggia.',
    fullDescription:
      'I Pirenei spagnoli custodiscono alcuni dei paesaggi più selvaggi e integri d\'Europa. Questo trekking attraversa il cuore del Parco Nazionale di Ordesa e Monte Perdido, patrimonio UNESCO, con tappe che superano i 3.000 metri toccando laghi glaciali di colore smeraldo, canyon profondi e creste esposte con panorami infiniti. Il percorso è calibrato per escursionisti con buona esperienza e buona condizione fisica. Si dorme in rifugi e pequenos hoteles rurales nelle valli. La guida alpina parla italiano e spagnolo. Ogni mattina, briefing meteorologico e aggiornamento del percorso in tempo reale. Gruppo limitato a 8 persone per rispettare l\'ambiente e garantire sicurezza.',
    includes: [
      '7 notti tra rifugi alpini e hotel rurali',
      'Guida alpina certificata bilingue (IT/ES)',
      'Ingresso Parco Nazionale Ordesa (UNESCO)',
      'Mezza pensione per tutta la durata',
      'Cartografia dettagliata e tracciati GPS',
      'Transfer da/per Pamplona',
      'Assicurazione alpinistica e soccorso montagna',
      'Noleggio bastoncini incluso',
    ],
    highlights: [
      'Parco Nazionale UNESCO Ordesa',
      'Laghi glaciali oltre i 2.800 m slm',
      'Guida certificata bilingue',
      'Massimo 8 partecipanti',
    ],
    featured: false,
  },
]

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug)
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured)
}

export function getToursByRegion(region: 'italia' | 'europa'): Tour[] {
  return tours.filter((t) => t.region === region)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'short',
  }).format(date)
}

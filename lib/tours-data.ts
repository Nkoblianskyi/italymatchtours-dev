// Central tours data — all dates in the future (after April 6, 2026)
export interface Tour {
  id: string
  slug: string
  city: string
  country: string
  region: 'italia' | 'europa'
  sport: 'calcio' | 'tennis' | 'atletica' | 'ciclismo'
  dateStart: string
  dateEnd: string
  duration: string // e.g. "3 notti"
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
    slug: 'notte-di-fuoco-roma',
    city: 'Roma',
    country: 'Italia',
    region: 'italia',
    sport: 'calcio',
    dateStart: '2026-05-10',
    dateEnd: '2026-05-13',
    duration: '3 notti',
    image: '/images/tour-rome.jpg',
    shortDescription:
      'Un weekend indimenticabile nella Città Eterna per assistere a una delle sfide più accese della Serie A sotto le stelle romane.',
    fullDescription:
      'Roma di notte è un palcoscenico senza eguali. Questo pacchetto ti porta nel cuore della capitale italiana per vivere un weekend di calcio ad alta intensità emotiva. Soggiorno in hotel di charme nel centro storico, trasferimenti privati, visita guidata del Foro Romano al mattino e poi la serata più attesa: una partita di Serie A in un impianto da brivido, con la città che risuona di cori e passione. Il tour include anche una cena gastronomica tipica romana la sera del match.',
    includes: [
      '3 notti in hotel 4 stelle nel centro di Roma',
      'Trasferimenti aeroportuali privati',
      'Biglietti per la partita di Serie A (Curva Superiore)',
      'Visita guidata al Foro Romano e Palatino',
      'Cena gastronomica tipica romana (sera del match)',
      'Assistenza h24 del nostro staff',
    ],
    highlights: [
      'Match serale in atmosfera elettrica',
      'Hotel con vista su monumenti storici',
      'Guida locale esperta',
      'Check-in anticipato garantito',
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'derby-della-madonnina-milano',
    city: 'Milano',
    country: 'Italia',
    region: 'italia',
    sport: 'calcio',
    dateStart: '2026-05-24',
    dateEnd: '2026-05-27',
    duration: '3 notti',
    image: '/images/tour-milan.jpg',
    shortDescription:
      'Il derby più famoso d\'Italia ti aspetta. Tre notti nel cuore della fashion capital per un match di Serie A da vivere in prima persona.',
    fullDescription:
      'Milano non si ferma mai, e il suo calcio è uno spettacolo permanente. Questo esclusivo weekend milanese ti porta dentro la rivalità cittadina più leggendaria della Serie A. Soggiorno nel quartiere di Brera, shopping lungo i Navigli, visita al Duomo e poi la serata clou con un match ad alta tensione in uno degli stadi più suggestivi d\'Europa. Il pacchetto comprende anche un tour dello stadio il giorno prima della partita, con accesso agli spogliatoi storici.',
    includes: [
      '3 notti in boutique hotel 4 stelle nel quartiere Brera',
      'Trasferimenti da/per Malpensa in business van',
      'Biglietti per la partita di Serie A (Tribuna Centrale)',
      'Tour dello stadio il giorno precedente (spogliatoi inclusi)',
      'Aperitivo milanese guidato ai Navigli',
      'Colazione inclusa ogni mattina',
    ],
    highlights: [
      'Accesso agli spogliatoi storici',
      'Aperitivo milanese con vista Navigli',
      'Tribuna Centrale per il match',
      'Personal concierge dedicato',
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'vesuvio-di-passione-napoli',
    city: 'Napoli',
    country: 'Italia',
    region: 'italia',
    sport: 'calcio',
    dateStart: '2026-06-07',
    dateEnd: '2026-06-10',
    duration: '3 notti',
    image: '/images/tour-naples.jpg',
    shortDescription:
      'Napoli, il Vesuvio e il tifo più caldo d\'Italia: vivi un\'esperienza unica nella città dove il calcio è religione.',
    fullDescription:
      'Nessuna tifoseria in Europa ha la stessa intensità emotiva di quella partenopea. Questo pacchetto ti immerge nella cultura napoletana più autentica: pizza fritta ai quartieri spagnoli, tramonto sul Castel dell\'Ovo, e poi l\'esperienza più intensa — una partita nella bolgia partenopea. Lo stadio di Napoli è un calderone di emozioni irripetibili. Il tour include anche un\'escursione mattutina al sito di Pompei con guida privata.',
    includes: [
      '3 notti in hotel 4 stelle sul Lungomare Caracciolo',
      'Trasferimenti privati da/per Capodichino',
      'Biglietti per la partita di Serie A (Curva superiore)',
      'Tour privato di Pompei con guida specializzata',
      'Degustazione di pizza napoletana autentica',
      'Mappa interattiva della città con i nostri consigli',
    ],
    highlights: [
      'Tifoseria tra le più iconiche al mondo',
      'Vista sul Golfo di Napoli dall\'hotel',
      'Visita privata a Pompei',
      'Pizza napoletana doc inclusa',
    ],
    featured: false,
  },
  {
    id: '4',
    slug: 'giganti-di-catalonia-barcellona',
    city: 'Barcellona',
    country: 'Spagna',
    region: 'europa',
    sport: 'calcio',
    dateStart: '2026-05-16',
    dateEnd: '2026-05-20',
    duration: '4 notti',
    image: '/images/tour-barcelona.jpg',
    shortDescription:
      'Quattro notti nel cuore della Catalogna per assistere a una grande serata di Champions League in un impianto da record.',
    fullDescription:
      'Barcellona è molto più di una città — è un universo culturale dove arte, architettura e calcio si fondono in un\'esperienza senza pari. Il tour include l\'accesso a una partita di Champions League o Liga nell\'impianto rinnovato, con una vista privilegiata dal livello medio della tribuna. Il tour dedica un\'intera mattinata alla Sagrada Familia con visita guidata privata, e una serata libera nel Barrio Gotico per immergersi nella vita notturna catalana.',
    includes: [
      '4 notti in hotel design 4 stelle a Eixample',
      'Trasferimenti privati da/per El Prat',
      'Biglietti per match Champions League o Liga (Tribuna Lateral)',
      'Visita guidata privata alla Sagrada Familia',
      'Passeggiata serale guidata nel Barrio Gotico',
      'Welcome drink in rooftop bar con vista su Barcellona',
    ],
    highlights: [
      'Champions League in un impianto da record',
      'Welcome drink in rooftop panoramico',
      'Sagrada Familia con guida privata',
      'Hotel design nel cuore di Eixample',
    ],
    featured: true,
  },
  {
    id: '5',
    slug: 'luci-di-parigi-psg',
    city: 'Parigi',
    country: 'Francia',
    region: 'europa',
    sport: 'calcio',
    dateStart: '2026-06-20',
    dateEnd: '2026-06-24',
    duration: '4 notti',
    image: '/images/tour-paris.jpg',
    shortDescription:
      'Parigi e il calcio d\'élite: quattro notti nella Ville Lumière per un match indimenticabile e la magia della capitale francese.',
    fullDescription:
      'La Ville Lumière offre uno scenario incomparabile per chi ama lo sport e la cultura. Questo tour di quattro notti ti porta a vivere il calcio parigino di alto livello, con pernottamento in un hotel boutique a Saint-Germain-des-Prés. La giornata precedente la partita è dedicata a una crociera sulla Senna con cena inclusa, seguita da una visita mattutina al Museo d\'Orsay. Il match serale coronerà un\'esperienza che rimarrà impressa per sempre.',
    includes: [
      '4 notti in boutique hotel 4 stelle a Saint-Germain-des-Prés',
      'Trasferimenti privati da/per CDG',
      'Biglietti per il match (Tribune Latérale)',
      'Crociera serale sulla Senna con cena a bordo',
      'Visita al Museo d\'Orsay',
      'Colazione inclusa e paris breakfast box il giorno del match',
    ],
    highlights: [
      'Cena a bordo con crociera sulla Senna',
      'Match in un impianto iconico parigino',
      'Hotel boutique a Saint-Germain-des-Prés',
      'Vista sulla Torre Eiffel garantita',
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'muro-giallo-dortmund',
    city: 'Dortmund',
    country: 'Germania',
    region: 'europa',
    sport: 'calcio',
    dateStart: '2026-07-11',
    dateEnd: '2026-07-14',
    duration: '3 notti',
    image: '/images/tour-dortmund.jpg',
    shortDescription:
      'Il muro giallo più famoso d\'Europa, un boato che non dimenticherai mai: tre notti in Renania per un\'esperienza calcistica leggendaria.',
    fullDescription:
      'C\'è uno spettacolo nella curva sud di questo iconico stadio tedesco che non ha eguali in Europa: oltre 24.000 tifosi in piedi che formano un\'unica, incessante marea di colore. Questo tour ti porta a Dortmund per una partita di Bundesliga nell\'impianto più caldo della Germania. Il tour include anche una visita alla città vecchia e una birra artigianale nella storica birreria locale, seguita da una passeggiata serale nel centro.',
    includes: [
      '3 notti in hotel 4 stelle nel centro di Dortmund',
      'Trasferimenti da/per Düsseldorf Airport',
      'Biglietti per la partita di Bundesliga (Südtribüne area)',
      'Visita guidata alla città vecchia di Dortmund',
      'Degustazione birreria storica locale',
      'Merchandise pack di benvenuto',
    ],
    highlights: [
      'Curva sud con 24.000 tifosi in piedi',
      'Bundesliga in un impianto leggendario',
      'Degustazione birre artigianali',
      'Merchandise pack esclusivo',
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'rinascimento-sportivo-firenze',
    city: 'Firenze',
    country: 'Italia',
    region: 'italia',
    sport: 'calcio',
    dateStart: '2026-08-22',
    dateEnd: '2026-08-25',
    duration: '3 notti',
    image: '/images/tour-florence.jpg',
    shortDescription:
      'Arte, storia e calcio nel cuore della Toscana: Firenze ti accoglie per un weekend sportivo tra le colline e i tesori del Rinascimento.',
    fullDescription:
      'Firenze è un\'opera d\'arte a cielo aperto, e il calcio qui ha una tradizione secolare. Questo weekend toscano unisce la visita degli Uffizi con le emozioni di una partita di Serie A al tramonto. L\'hotel si trova a pochi passi da Ponte Vecchio, e l\'itinerario include anche un\'escursione nelle colline del Chianti con degustazione di vino biologico locale. Il match serale sarà il capitolo finale di un\'avventura culturale e sportiva unica.',
    includes: [
      '3 notti in palazzo storico convertito in hotel 4 stelle',
      'Trasferimenti privati da/per Peretola',
      'Biglietti per la partita di Serie A',
      'Visita guidata alla Galleria degli Uffizi',
      'Escursione Chianti con degustazione vini biologici',
      'Cena nella trattoria storica più rinomata',
    ],
    highlights: [
      'Palazzo storico nel centro di Firenze',
      'Degustazione vini nel Chianti',
      'Galleria degli Uffizi con guida privata',
      'Cena in trattoria storica',
    ],
    featured: false,
  },
  {
    id: '8',
    slug: 'notti-di-champions-madrid',
    city: 'Madrid',
    country: 'Spagna',
    region: 'europa',
    sport: 'calcio',
    dateStart: '2026-09-12',
    dateEnd: '2026-09-16',
    duration: '4 notti',
    image: '/images/tour-barcelona.jpg',
    shortDescription:
      'Madrid e il calcio più blasonato d\'Europa: quattro notti nella capitale spagnola per una notte di Champions League senza precedenti.',
    fullDescription:
      'Madrid è la capitale europea del calcio d\'élite, e questo tour ti porta al centro del potere sportivo con biglietti per una serata di Champions League nell\'impianto più iconico di Spagna. Il tour include una visita al Museo del Prado, un pranzo al mercato di San Miguel e un tour in e-bike del Parque del Retiro. La serata del match sarà preceduta da un aperitivo di benvenuto in un rooftop panoramico con vista sullo skyline madrileno.',
    includes: [
      '4 notti in hotel 5 stelle nel quartiere Salamanca',
      'Trasferimenti privati da/per Barajas',
      'Biglietti per Champions League (Tribuna Preferente)',
      'Visita al Museo del Prado con guida privata',
      'Tour in e-bike del Parque del Retiro',
      'Aperitivo rooftop con vista skyline madrileno',
    ],
    highlights: [
      'Champions League nell\'impianto più iconico di Spagna',
      'Hotel 5 stelle nel quartiere Salamanca',
      'Aperitivo rooftop panoramico',
      'Tour e-bike nel Parque del Retiro',
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

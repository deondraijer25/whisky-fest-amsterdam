// src/data/ticketsAmsterdam.ts
// Officiële dataset voor Amsterdam Whisky Festival (Zuiderkerk Amsterdam)
// Direct overgenomen uit "Alle items per website voor Deon.xlsx"

export interface TicketItem {
  id: string;
  row: number;
  title: string;
  price: number;
  date: string;
  time: string;
  day: 'vrijdag' | 'zaterdag' | 'zondag' | 'all';
  daypart: 'ochtend' | 'middag' | 'avond' | 'all';
  category: 'entree' | 'botteling' | 'warehouse' | 'masterclass' | 'trail' | 'tram' | 'vatenmaken';
  categoryName: string;
  bookingType: string;
  location: string;
  capacity: number;
  sold: number;
  isSoldOut: boolean;
  isLowStock: boolean;
  status?: 'sold-out' | 'limited' | 'popular' | 'selling-fast';
  statusText?: string;
  extra?: string;
  description?: string;
  ambassadorName?: string;
  ambassadorTitle?: string;
  ambassadorBio?: string;
  tastingLineup?: string[];
}

export const TICKETS_AMSTERDAM: TicketItem[] = [
  // 1. Entrees (Zaterdag 16 januari 2027)
  {
    id: "ams-entree-zaterdagmiddag",
    row: 149,
    title: "Entree Zaterdagmiddag",
    price: 39.95,
    date: "Zaterdag 16 Jan 2027",
    time: "13:00 - 17:00 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Zuiderkerk Amsterdam",
    capacity: 575,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Inclusief officieel Glencairn proefglas",
    description: "Beleef het Amsterdam Whisky Festival in de monumentale Zuiderkerk. Geniet 4 uur lang van honderden whisky's, distilleerders en de unieke sfeer.",
    ambassadorName: "Amsterdam Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team heet u van harte welkom in de historische Zuiderkerk van Amsterdam.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Vrije toegang tot alle beursstands en distilleerders",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festival programmaboekje met plattegrond"
    ]
  },
  {
    id: "ams-entree-zaterdagavond",
    row: 150,
    title: "Entree Zaterdagavond",
    price: 39.95,
    date: "Zaterdag 16 Jan 2027",
    time: "19:00 - 23:00 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "entree",
    categoryName: "Entreeticket",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Zuiderkerk Amsterdam",
    capacity: 575,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Inclusief officieel Glencairn proefglas",
    description: "Sfeervolle avondsessie in de Zuiderkerk Amsterdam met intieme verlichting, live doedelzakmuziek en topselectie drams.",
    ambassadorName: "Amsterdam Festival Team",
    ambassadorTitle: "Festival Host",
    ambassadorBio: "Ons team heet u van harte welkom in de historische Zuiderkerk van Amsterdam.",
    tastingLineup: [
      "Officieel Glencairn festival proefglas",
      "Vrije toegang tot alle beursstands en distilleerders",
      "Talloze gratis te proeven drams op de beursvloer",
      "Compleet festival programmaboekje met plattegrond"
    ]
  },

  // 2. Festival Botteling
  {
    id: "ams-botteling-glen-scotia-5yo",
    row: 151,
    title: "Glen Scotia 5YO 1st fill Oloroso Hogshead Cask",
    price: 82.50,
    date: "Zaterdag 16 Jan 2027",
    time: "Gehele festivaldag",
    day: "zaterdag",
    daypart: "all",
    category: "botteling",
    categoryName: "Festival Botteling",
    bookingType: "Vrij te boeken voor iedereen",
    location: "Festival Info Desk / Thuisbezorgd",
    capacity: 40,
    sold: 0,
    isSoldOut: false,
    isLowStock: true,
    status: "limited",
    statusText: "Gelimiteerd (40 flessen)",
    extra: "Exclusief single cask voor Amsterdam Whisky Festival. Gelimiteerde oplage van slechts 40 flessen!",
    description: "Een buitengewone single cask botteling van Glen Scotia, gerijpt op een first fill Oloroso Hogshead cask. Rijk aan gedroogd fruit, maritieme ziltigheid en diepe kruidigheid.",
    ambassadorName: "Glen Scotia Distillery",
    ambassadorTitle: "Campbeltown Single Malt",
    ambassadorBio: "De legendarische distilleerderij uit Campbeltown presenteert deze exclusieve festivalrelease.",
    tastingLineup: [
      "70cl Fles Single Cask Glen Scotia 5YO",
      "First Fill Oloroso Sherry Hogshead Finish",
      "Cask Strength botteling zonder koude filtratie",
      "Individueel genummerd flescertificaat"
    ]
  },

  // 3. Masterclasses (8 tijdslots - Zuiderkerk Amsterdam)
  {
    id: "ams-masterclass-slot-1",
    row: 153,
    title: "Masterclass Middag Sessie 1",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "12:00 - 12:45 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Intieme masterclass van 45 minuten onder leiding van een internationale whisky ambassador in de Zuiderkerk.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-2",
    row: 154,
    title: "Masterclass Middag Sessie 2",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "13:15 - 14:00 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande proeverij met zeldzame expressies en deskundige toelichting.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-3",
    row: 155,
    title: "Masterclass Middag Sessie 3",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "14:30 - 15:15 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande proeverij met zeldzame expressies en deskundige toelichting.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-4",
    row: 156,
    title: "Masterclass Middag Sessie 4",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "15:45 - 16:30 uur",
    day: "zaterdag",
    daypart: "middag",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande proeverij met zeldzame expressies en deskundige toelichting.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-5",
    row: 157,
    title: "Masterclass Avond Sessie 1",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "18:00 - 18:45 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande avondproeverij met exclusieve vaten en distilleerderijverhalen.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-6",
    row: 158,
    title: "Masterclass Avond Sessie 2",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "19:15 - 20:00 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande avondproeverij met exclusieve vaten en distilleerderijverhalen.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-7",
    row: 159,
    title: "Masterclass Avond Sessie 3",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "20:30 - 21:15 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "Diepgaande avondproeverij met exclusieve vaten en distilleerderijverhalen.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  },
  {
    id: "ams-masterclass-slot-8",
    row: 160,
    title: "Masterclass Avond Sessie 4",
    price: 25.00,
    date: "Zaterdag 16 Jan 2027",
    time: "21:45 - 22:30 uur",
    day: "zaterdag",
    daypart: "avond",
    category: "masterclass",
    categoryName: "Masterclass",
    bookingType: "Enkel i.c.m. entreeticket",
    location: "Masterclass Zaal Zuiderkerk",
    capacity: 30,
    sold: 0,
    isSoldOut: false,
    isLowStock: false,
    extra: "Programma en line-up worden binnenkort bekendgemaakt",
    description: "De feestelijke afsluitende masterclass van het Amsterdam Whisky Festival.",
    ambassadorName: "Brand Ambassador",
    ambassadorTitle: "Distillery Specialist",
    tastingLineup: [
      "4 tot 5 exclusieve proefdrams",
      "Deskundige uitleg over het distilleerproces en houtrijping",
      "Gelegenheid voor Q&A met de distilleerder"
    ]
  }
];

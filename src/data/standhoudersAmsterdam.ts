// src/data/standhoudersAmsterdam.ts
// Officiële dataset voor standhouders / exposanten - Amsterdam Whisky Festival (De Hallen Studio 2)

export interface ExhibitorItem {
  id: string;
  name: string;
  category: 'scotch' | 'dutch' | 'independent' | 'world' | 'catering' | 'organisation';
  brands: string[];
  description: string;
  isNotOnMap?: boolean;
  hall?: string;
  isAvailable?: boolean;
}

export const EXHIBITORS_AMSTERDAM: ExhibitorItem[] = [
  // --- Organisatie Stand (Centraal Eiland Studio 2) ---
  {
    id: "O",
    name: "Organisatie stand (drams verkoop en informatie)",
    category: "organisation",
    brands: ["Drams Verkoop", "Informatie", "Muntverkoop", "Festival Boekjes", "Programma Vragen"],
    description: "Centrale infodesk van het Amsterdam Whisky Festival. Hier kunt u terecht voor drams verkoop, festivalgidsen, vragen over het programma en algemene assistentie.",
    hall: "Studio 2"
  },

  // --- Fysieke Stands in Studio 2 (conform officiële standhouderlijst 1 t/m 20) ---
  {
    id: "1",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze standplek in Studio 2 is momenteel nog beschikbaar. Geïnteresseerde standhouders kunnen contact opnemen met de organisatie.",
    hall: "Studio 2",
    isAvailable: true
  },
  {
    id: "2",
    name: "DAM dranken - Thalassa",
    category: "independent",
    brands: ["Thalassa", "DAM Dranken Selecties", "Craft Spirits"],
    description: "DAM dranken presenteert Thalassa en een unieke selectie van ambachtelijke spirits en karaktervolle whisky's voor de fijnproever.",
    hall: "Studio 2"
  },
  {
    id: "3",
    name: "De Monnik Dranken",
    category: "scotch",
    brands: ["Glenallachie", "Loch Lomond", "Glen Scotia", "Tomatin", "Glencadam"],
    description: "Koninklijk bekroond familiebedrijf en kwaliteitsimporteur met een prachtig portfolio aan Schotse single malts uit de Highlands, Speyside en Campbeltown. Grote presentatie langs de noordwand.",
    hall: "Studio 2"
  },
  {
    id: "4",
    name: "Mitra Drankspeciaalzaken",
    category: "world",
    brands: ["Mitra Selecties", "Single Casks", "Exclusieve Import", "Festival Aanbiedingen"],
    description: "Mitra Drankspeciaalzaken presenteert een gevarieerde selectie van bekende en zeldzame whisky's, deskundig advies en unieke festivalaanbiedingen in de noordoosthoek.",
    hall: "Studio 2"
  },
  {
    id: "5",
    name: "Bresser & Timmer",
    category: "scotch",
    brands: ["Craft Spirits", "Signatory Vintage", "Edradour", "Kilchoman", "Gordon & MacPhail"],
    description: "Toonaangevende kwaliteitsimporteur van craft spirits, Schotse independent bottelings en legendarische distilleerderijen.",
    hall: "Studio 2"
  },
  {
    id: "6",
    name: "Whisky Import Nederland (WIN)",
    category: "independent",
    brands: ["Blackadder", "The Ultimate", "Samaroli", "Creative Whisky Co."],
    description: "Gespecialiseerd importeur van exclusieve onafhankelijke bottelingen, ongefilterde single casks en legendarische distillaatjaren.",
    hall: "Studio 2"
  },
  {
    id: "7",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze standplek in Studio 2 is momenteel nog beschikbaar. Geïnteresseerde standhouders kunnen contact opnemen met de organisatie.",
    hall: "Studio 2",
    isAvailable: true
  },
  {
    id: "8",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze standplek in de alkoof van Studio 2 is momenteel nog beschikbaar. Geïnteresseerde standhouders kunnen contact opnemen met de organisatie.",
    hall: "Studio 2",
    isAvailable: true
  },
  {
    id: "9",
    name: "Craft Spirits",
    category: "independent",
    brands: ["Craft Spirits Selecties", "Artisan Malts", "Small Batch Releases"],
    description: "Ambachtelijke gedistilleerde dranken, unieke small-batch whisky's en innovatieve expressies met een puur en eigenzinnig karakter.",
    hall: "Studio 2"
  },
  {
    id: "10",
    name: "Distilleerderij de Bronckhorst",
    category: "dutch",
    brands: ["Bronckhorst Single Malt", "Achterhoekse Graanwhisky", "Special Cask Finishes"],
    description: "Ambachtelijke Nederlandse single malt whisky, ter plaatse gedistilleerd in de Achterhoek met passie voor lokaal graan en eikenhout.",
    hall: "Studio 2"
  },
  {
    id: "11",
    name: "Van Weringhs Whisky World",
    category: "independent",
    brands: ["Oude Whisky’s", "Zeldzame Specials", "Vintage Bottelingen", "Collectibles"],
    description: "Zeldzame en oude whisky specials, historische verzamelflessen en bijzondere vondsten voor de doorgewinterde kenner en verzamelaar.",
    hall: "Studio 2"
  },
  {
    id: "12",
    name: "Dutch Whisky Teers",
    category: "dutch",
    brands: ["Dutch Whisky Teers", "Single Casks", "Independent Selections"],
    description: "Passievolle Nederlandse whisky-enthousiastelingen en bottelaars met eigenzinnige drams, single casks en een hart voor het ambacht.",
    hall: "Studio 2"
  },
  {
    id: "13",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze standplek is momenteel nog beschikbaar. Neem contact op met de organisatie voor deelname als standhouder.",
    hall: "Studio 2",
    isAvailable: true,
    isNotOnMap: true
  },
  {
    id: "14",
    name: "Niet op plattegrond",
    category: "organisation",
    brands: ["Niet op plattegrond"],
    description: "Standnummer 14 bevindt zich niet op de zaalplattegrond van Studio 2.",
    hall: "Niet op plattegrond",
    isNotOnMap: true
  },
  {
    id: "15",
    name: "International Whisky Society",
    category: "world",
    brands: ["IWS Club", "Festival Bottelingen 2000-2026", "25 Jaar Jubileum Uitgaven", "Glazen & Merchandise"],
    description: "De International Whisky Society viert het festivaljubileum met historische festivalbottelingen, exclusieve glazen, clublidmaatschappen en merchandise.",
    hall: "Studio 2"
  },
  {
    id: "16",
    name: "Cane & Grain Slijterij",
    category: "independent",
    brands: ["Cane & Grain Selecties", "Rare Malts", "Distillery Collectibles"],
    description: "Onafhankelijke bottelingen, zeldzame whisky-vondsten en unieke single casks met een verhaal.",
    hall: "Studio 2"
  },
  {
    id: "17",
    name: "Brugse Whisky Company",
    category: "world",
    brands: ["Brugse Single Malt", "Vlaamse Whisky Expressies", "Special Cask Finishes"],
    description: "Ambachtelijke whisky rechtstreeks uit het historische Brugge met karaktervolle vatrijpingen en passie voor het vak.",
    hall: "Studio 2"
  },
  {
    id: "18",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze centrale standplek in Studio 2 is momenteel nog beschikbaar. Geïnteresseerde standhouders kunnen contact opnemen met de organisatie.",
    hall: "Studio 2",
    isAvailable: true
  },
  {
    id: "19",
    name: "Bacardi Martini",
    category: "scotch",
    brands: ["Aberfeldy", "Aultmore", "Craigellachie", "The Deveron", "Royal Brackla"],
    description: "Het befaamde 'Last Great Malts of Scotland' portfolio van Bacardi met o.a. de honingzachte single malts van Aberfeldy en de expressies van Craigellachie.",
    hall: "Studio 2"
  },
  {
    id: "20",
    name: "Nog te verkopen",
    category: "independent",
    brands: ["Beschikbare Standplek"],
    description: "Deze standplek in Studio 2 is momenteel nog beschikbaar. Geïnteresseerde standhouders kunnen contact opnemen met de organisatie.",
    hall: "Studio 2",
    isAvailable: true
  },

  // --- Exposanten & Specialisten in Foyer / Niet op zaalplattegrond ---
  {
    id: "S",
    name: "Festival Slijterij",
    category: "organisation",
    brands: ["Festival Botteling 2026", "Flesverkoop Standhouders"],
    description: "De officiële festivalslijterij waar u geproefde flessen en speciale festivaluitgaven direct kunt aanschaffen voor thuis.",
    hall: "Foyer / Doorgang",
    isNotOnMap: true
  },
  {
    id: "C",
    name: "Festival Catering & Food",
    category: "catering",
    brands: ["Warme Hapjes", "Broodjes", "Waterpunten"],
    description: "Cateringpunten voor een stevige bodem tijdens het proeven, snacks en gratis waterpunten.",
    hall: "Foyer / Passage",
    isNotOnMap: true
  },
  {
    id: "NP1",
    name: "Demi’s Chocolaterie",
    category: "catering",
    brands: ["Ambachtelijke Bonbons", "Whisky Truffels"],
    description: "Ambachtelijke chocolaterie gespecialiseerd in handgemaakte chocolade en whisky bonbons.",
    hall: "Foyer",
    isNotOnMap: true
  },
  {
    id: "NP2",
    name: "Kiltshop & Celtic Crafts",
    category: "catering",
    brands: ["Traditionele Kilts", "Schotse Accessoires", "Tweed"],
    description: "Traditionele Schotse kilts, kleding, glencairn-accessoires en Keltische geschenken.",
    hall: "Foyer",
    isNotOnMap: true
  },
  {
    id: "NP3",
    name: "Barrel Atelier",
    category: "catering",
    brands: ["Vatmeubilair", "Eikenhouten Accessoires"],
    description: "Handgemaakte meubels en decoratieve accessoires vervaardigd uit authentieke gebruikte whiskyvaten.",
    hall: "Foyer",
    isNotOnMap: true
  },
  {
    id: "NP4",
    name: "Whisky Passion Magazine",
    category: "catering",
    brands: ["Tijdschrift Whisky Passion", "Boeken & Naslagwerken"],
    description: "Het toonaangevende Nederlandstalige whiskymagazine met achtergrondverhalen, distilleerderij-reportages en boeken.",
    hall: "Foyer",
    isNotOnMap: true
  },
  {
    id: "NP5",
    name: "Whisky Base",
    category: "world",
    brands: ["WhiskyBase Community", "Bottle Archive"],
    description: "De grootste online whisky database en community ter wereld met proefnotities, scores en marktinzichten.",
    hall: "Digitaal / Community",
    isNotOnMap: true
  }
];

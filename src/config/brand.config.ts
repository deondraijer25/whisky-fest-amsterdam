// src/config/brand.config.ts
// Centrale merk- en thema-inrichting voor Whisky Fest Amsterdam

export interface BrandConfig {
  id: 'denhaag' | 'amsterdam' | 'gent';
  name: string;
  shortName: string;
  city: string;
  country: string;
  venue: string;
  venueShort: string;
  foundingYear: number;
  edition: string;
  datesText: string;
  datesShort: string;
  domain: string;
  localPort: number;
  
  colors: {
    primary: string;
    primaryHover: string;
    accent: string;
    accentLight: string;
    bgParchment: string;
    bgSand: string;
    bgPaperCard: string;
    textCharcoal: string;
    textMuted: string;
    border: string;
    borderDark: string;
    heroGradient: string;
    heroTintRadial: string;
  };

  copy: {
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroTitleLine3: string;
    heroSubtitle: string;
    preloaderTitle: string;
    preloaderSubtitle: string;
    announcementBar: string;
    tramTitle: string;
    tramDesc: string;
    floorplanTitle: string;
    metaTitle: string;
    metaDescription: string;
  };
}

export const BRAND: BrandConfig = {
  id: 'amsterdam',
  name: 'Amsterdam Whisky Festival',
  shortName: 'Whisky Fest Amsterdam',
  city: 'Amsterdam',
  country: 'Nederland',
  venue: 'Zuiderkerk Amsterdam',
  venueShort: 'Zuiderkerk',
  foundingYear: 2002,
  edition: 'Editie 2027',
  datesText: 'Zaterdag 16 januari 2027',
  datesShort: '16 Jan 2027',
  domain: 'https://whisky-fest-amsterdam.vercel.app',
  localPort: 4331,

  colors: {
    primary: '#E30613',         // Amsterdam Flag Red
    primaryHover: '#B91C1C',
    accent: '#D5C28A',          // Warm Gold
    accentLight: '#E9DFB7',
    bgParchment: '#FAF7F2',     // Warm paper
    bgSand: '#FAF0F0',          // Soft warm tint
    bgPaperCard: '#FCFAF7',
    textCharcoal: '#1E1C1A',    // Anthracite black
    textMuted: '#4B4642',
    border: '#E8D5D5',
    borderDark: '#B91C1C',
    heroGradient: 'linear-gradient(135deg, #180505 0%, #7F1D1D 35%, #991B1B 65%, #180505 100%)',
    heroTintRadial: 'radial-gradient(circle at 70% 50%, rgba(227, 6, 19, 0.15) 0%, rgba(24, 5, 5, 0.5) 100%)'
  },

  copy: {
    heroTitleLine1: 'Het meest geliefde',
    heroTitleLine2: 'whisky festival',
    heroTitleLine3: 'van Amsterdam.',
    heroSubtitle: 'Beleef de magie van het meest toonaangevende whiskyfestival in de historische Zuiderkerk van Amsterdam. Of u nu een beginnend proever bent of een doorgewinterde kenner, wij bieden een onvergetelijke ervaring.',
    preloaderTitle: 'AMSTERDAM WHISKY FESTIVAL',
    preloaderSubtitle: 'EST. 2002 • AMSTERDAM',
    announcementBar: 'Sluit je aan bij duizenden whiskyliefhebbers in Amsterdam – Bestel vandaag nog je tickets!',
    tramTitle: 'Amsterdamse Whiskytram',
    tramDesc: 'Rondrit door historisch Amsterdam in een klassieke tram inclusief deskundig geleide proeverij van 4 topdrams.',
    floorplanTitle: 'Plattegrond Zuiderkerk Amsterdam',
    metaTitle: 'Amsterdam Whisky Festival | Zuiderkerk',
    metaDescription: 'Bezoek het meest sfeervolle en bekende whiskyfestival van Amsterdam in de Zuiderkerk. Bestel nu direct uw entreekaarten.'
  }
};

export const SITE = {
  name: "Matos de boxe",
  domain: "matos-de-boxe.fr",
  url: "https://www.matos-de-boxe.fr",
  tagline: "L'équipement des combattants",
  description:
    "Boutique spécialisée matos de boxe, gants MMA, protections et matériel de sports de combat en France. Catalogue Metal Boxe, ouverture de la vente prochaine.",
}

export const NAV = [
  {
    id: "nouveau",
    label: "Nouveau",
    href: "/nouveau",
    columns: [
      {
        title: "À la une",
        links: [
          { label: "Nouveautés", href: "/nouveau" },
          { label: "Indispensables", href: "/matos-de-boxe" },
          { label: "Équipement débutant", href: "/equipement-debutant" },
          { label: "Guides d'achat", href: "/guides-achat" },
        ],
      },
      {
        title: "Boxe",
        links: [
          { label: "Gants de boxe", href: "/gants-de-boxe" },
          { label: "Protections boxe", href: "/protections-boxe" },
          { label: "Sacs de frappe", href: "/sacs-de-frappe" },
        ],
      },
      {
        title: "MMA",
        links: [
          { label: "Gants MMA", href: "/gants-mma" },
          { label: "Protections MMA", href: "/protections-mma" },
          { label: "Matériel MMA", href: "/materiel-mma" },
        ],
      },
    ],
  },
  {
    id: "boxe",
    label: "Boxe",
    href: "/gants-de-boxe",
    columns: [
      {
        title: "Gants",
        links: [
          { label: "Tous les gants de boxe", href: "/gants-de-boxe" },
          { label: "Entraînement", href: "/gants-de-boxe" },
          { label: "Sparring", href: "/gants-de-boxe" },
          { label: "Sac de frappe", href: "/gants-de-boxe" },
        ],
      },
      {
        title: "Protections",
        links: [
          { label: "Casques", href: "/protections-boxe" },
          { label: "Bandes et sous-gants", href: "/accessoires-boxe" },
          { label: "Protège-dents", href: "/protections-boxe" },
        ],
      },
      {
        title: "Entraînement",
        links: [
          { label: "Sacs de frappe", href: "/sacs-de-frappe" },
          { label: "Pattes d'ours et paos", href: "/sacs-de-frappe" },
          { label: "Textile boxe", href: "/textile-combat" },
        ],
      },
    ],
  },
  {
    id: "mma",
    label: "MMA",
    href: "/gants-mma",
    columns: [
      {
        title: "Gants MMA",
        links: [
          { label: "Tous les gants MMA", href: "/gants-mma" },
          { label: "Sparring", href: "/gants-mma" },
          { label: "Combat", href: "/gants-mma" },
        ],
      },
      {
        title: "Protections MMA",
        links: [
          { label: "Tibias", href: "/protections-mma" },
          { label: "Casques", href: "/protections-mma" },
          { label: "Coquilles", href: "/protections-mma" },
        ],
      },
      {
        title: "Tenue",
        links: [
          { label: "Shorts MMA", href: "/textile-combat" },
          { label: "Rashguards", href: "/textile-combat" },
          { label: "Tout le matériel MMA", href: "/materiel-mma" },
        ],
      },
    ],
  },
  {
    id: "protections",
    label: "Protections",
    href: "/protections-boxe",
    columns: [
      {
        title: "Boxe",
        links: [
          { label: "Casques de boxe", href: "/protections-boxe" },
          { label: "Bandes", href: "/accessoires-boxe" },
          { label: "Protège-dents", href: "/protections-boxe" },
        ],
      },
      {
        title: "MMA",
        links: [
          { label: "Tibias-pieds", href: "/protections-mma" },
          { label: "Genouillères", href: "/protections-mma" },
          { label: "Coudières", href: "/protections-mma" },
        ],
      },
    ],
  },
  {
    id: "entrainement",
    label: "Entraînement",
    href: "/sacs-de-frappe",
    columns: [
      {
        title: "Frappe",
        links: [
          { label: "Sacs de frappe", href: "/sacs-de-frappe" },
          { label: "Boucliers et paos", href: "/sacs-de-frappe" },
        ],
      },
      {
        title: "Cardio",
        links: [{ label: "Accessoires d'entraînement", href: "/accessoires-boxe" }],
      },
    ],
  },
  {
    id: "textile",
    label: "Textile",
    href: "/textile-combat",
    columns: [
      {
        title: "Combat",
        links: [
          { label: "Shorts", href: "/textile-combat" },
          { label: "Rashguards", href: "/textile-combat" },
          { label: "Arts martiaux", href: "/arts-martiaux" },
        ],
      },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    href: "/guides-achat",
    columns: [
      {
        title: "Conseils",
        links: [
          { label: "Tous les guides", href: "/guides-achat" },
          { label: "Choisir ses gants", href: "/guides-achat/comment-choisir-ses-gants-de-boxe" },
          { label: "Débuter en boxe", href: "/guides-achat/quel-matos-de-boxe-acheter-pour-debuter" },
          { label: "Débuter en MMA", href: "/guides-achat/quel-equipement-pour-commencer-le-mma" },
        ],
      },
    ],
  },
]

export const CATEGORIES = {
  nouveau: {
    slug: "nouveau",
    title: "Nouveautés matos de boxe et MMA | France",
    h1: "Nouveautés",
    intro:
      "Dernières arrivées Metal Boxe : gants de boxe, gants MMA, protections et textile. Catalogue national matos-de-boxe.fr, vente bientôt ouverte.",
    filter: () => true,
  },
  "matos-de-boxe": {
    slug: "matos-de-boxe",
    title: "Matos de boxe — équipement et matériel | France",
    h1: "Matos de boxe",
    intro:
      "Tout le matos de boxe pour s’entraîner et sparrer en France : gants, protections, sacs et accessoires Metal Boxe, pensé pour le pratiquant.",
    filter: (p) => ["boxe", "entrainement", "accessoires"].includes(p.family),
  },
  "gants-de-boxe": {
    slug: "gants-de-boxe",
    title: "Gants de boxe — 10 à 16 oz, entraînement et sparring",
    h1: "Gants de boxe",
    intro:
      "Acheter des gants de boxe Metal Boxe pour le sac, les pads et le sparring. Velcro ou cuir, 10 oz, 12 oz, 14 oz et 16 oz. Livraison France à l’ouverture des ventes.",
    filter: (p) => p.family === "boxe" && p.type === "gants",
  },
  "gants-mma": {
    slug: "gants-mma",
    title: "Gants MMA — sparring, combat et hybrid | Metal Boxe",
    h1: "Gants MMA",
    intro:
      "Gants MMA pour le sparring et le combat : main libre pour les saisies, mousse pour encaisser. Sélection Metal Boxe sur matos-de-boxe.fr.",
    filter: (p) => p.family === "mma" && p.type === "gants",
  },
  "protections-boxe": {
    slug: "protections-boxe",
    title: "Protections boxe — casque, protège-dents, bandes",
    h1: "Protections boxe",
    intro:
      "Casques de boxe, protège-dents et protections pour sparrer sans se casser. Matériel de protection boxe Metal Boxe, catalogue France.",
    filter: (p) => p.family === "boxe" && p.type === "protection",
  },
  "protections-mma": {
    slug: "protections-mma",
    title: "Protections MMA — protège-tibias, casques, genouillères",
    h1: "Protections MMA",
    intro:
      "Protège-tibias MMA, casques, genouillères et coudières. Protection pour le sparring sans bloquer les déplacements.",
    filter: (p) => p.family === "mma" && p.type === "protection",
  },
  "accessoires-boxe": {
    slug: "accessoires-boxe",
    title: "Accessoires boxe — bandes de boxe et sous-gants",
    h1: "Accessoires boxe",
    intro:
      "Bandes de boxe, sous-gants et accessoires d’entraînement. Le petit matos qui protège poignets et mains à chaque séance.",
    filter: (p) => p.type === "accessoire",
  },
  "materiel-mma": {
    slug: "materiel-mma",
    title: "Matériel MMA — gants, tibias, tenue | France",
    h1: "Matériel MMA",
    intro:
      "Matériel MMA pour débuter ou confirmer : gants MMA, protège-tibias, shorts et protections. Catalogue Metal Boxe.",
    filter: (p) => p.family === "mma",
  },
  "sports-de-combat": {
    slug: "sports-de-combat",
    title: "Équipement sports de combat — boxe, MMA, arts martiaux",
    h1: "Sports de combat",
    intro:
      "Équipement pour la boxe, le MMA et les sports de combat. Boutique en ligne nationale : un seul endroit pour ton matos.",
    filter: () => true,
  },
  "arts-martiaux": {
    slug: "arts-martiaux",
    title: "Arts martiaux — protections et matériel de combat",
    h1: "Arts martiaux",
    intro:
      "Matériel utile aux arts martiaux et au grappling : protections, textile et accessoires. Catalogue en cours d’enrichissement.",
    filter: (p) => p.family === "arts-martiaux",
  },
  "textile-combat": {
    slug: "textile-combat",
    title: "Textile combat — shorts MMA et tenues d’entraînement",
    h1: "Textile combat",
    intro: "Shorts MMA, fight shorts enfant et tenues d’entraînement Metal Boxe pour la salle.",
    filter: (p) => p.type === "textile",
  },
  "sacs-de-frappe": {
    slug: "sacs-de-frappe",
    title: "Sacs de frappe — matériel d’entraînement boxe et MMA",
    h1: "Sacs de frappe",
    intro:
      "Sacs de frappe, boucliers et matériel de frappe pour la salle ou la maison. Sélection Metal Boxe, livraison France à l’ouverture.",
    filter: (p) => p.type === "entrainement",
  },
  "equipement-debutant": {
    slug: "equipement-debutant",
    title: "Équipement débutant boxe et MMA — premier matos",
    h1: "Équipement débutant",
    intro:
      "Premier matos de boxe ou MMA : gants, bandes, protège-dents. Pour arriver au premier cours déjà prêt, sans suracheter.",
    filter: (p) => p.level === "debutant" || p.price < 55,
  },
}

export function formatPrice(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n)
}

export function categoryHref(product) {
  if (product.type === "gants") return product.family === "mma" ? "/gants-mma" : "/gants-de-boxe"
  if (product.type === "protection") return product.family === "mma" ? "/protections-mma" : "/protections-boxe"
  if (product.type === "textile") return "/textile-combat"
  if (product.type === "accessoire") return "/accessoires-boxe"
  if (product.type === "entrainement") return "/sacs-de-frappe"
  return "/matos-de-boxe"
}

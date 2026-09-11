export const SITE = {
  name: "Matos de boxe",
  domain: "matos-de-boxe.fr",
  url: "https://www.matos-de-boxe.fr",
  tagline: "L'équipement des combattants",
  description:
    "Boutique spécialisée dans le matos de boxe, les gants MMA, les protections et le matériel de sports de combat. Catalogue Metal Boxe, ouverture de la vente prochaine.",
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
    title: "Nouveau matos de boxe et MMA",
    h1: "Nouveautés",
    intro: "Les dernières arrivées Metal Boxe : gants, protections et textile de combat. Catalogue en cours d’intégration, vente bientôt ouverte.",
    filter: () => true,
  },
  "matos-de-boxe": {
    slug: "matos-de-boxe",
    title: "Matos de boxe — équipement et matériel",
    h1: "Matos de boxe",
    intro: "Tout le matos de boxe pour s’entraîner et sparrer : gants, protections, sacs et accessoires. Sélection Metal Boxe, pensé pour le pratiquant.",
    filter: (p) => ["boxe", "entrainement", "accessoires"].includes(p.family),
  },
  "gants-de-boxe": {
    slug: "gants-de-boxe",
    title: "Gants de boxe — entraînement, sparring, sac",
    h1: "Gants de boxe",
    intro: "Gants de boxe Metal Boxe pour le sac, l’entraînement et le sparring. Du gant débutant au cuir pro, en 10 oz, 12 oz, 14 oz et 16 oz.",
    filter: (p) => p.family === "boxe" && p.type === "gants",
  },
  "gants-mma": {
    slug: "gants-mma",
    title: "Gants MMA — sparring, combat, hybrid",
    h1: "Gants MMA",
    intro: "Gants MMA pour le sac, le sparring et le combat. Main libre pour les saisies, mousse pensée pour encaisser les échanges.",
    filter: (p) => p.family === "mma" && p.type === "gants",
  },
  "protections-boxe": {
    slug: "protections-boxe",
    title: "Protections boxe — casques, dents, bandes",
    h1: "Protections boxe",
    intro: "Casques, protège-dents et bandes : le trio pour sparrer sans se casser. Matériel de protection boxe Metal Boxe.",
    filter: (p) => p.family === "boxe" && p.type === "protection",
  },
  "protections-mma": {
    slug: "protections-mma",
    title: "Protections MMA — tibias, casques, coquilles",
    h1: "Protections MMA",
    intro: "Tibias-pieds, casques, genouillères et coudières pour le MMA. Protection sans bloquer les déplacements.",
    filter: (p) => p.family === "mma" && p.type === "protection",
  },
  "accessoires-boxe": {
    slug: "accessoires-boxe",
    title: "Accessoires boxe — bandes, sous-gants, entretien",
    h1: "Accessoires boxe",
    intro: "Bandes, sous-gants et petits accessoires qui font la différence à l’entraînement.",
    filter: (p) => p.type === "accessoire",
  },
  "materiel-mma": {
    slug: "materiel-mma",
    title: "Matériel MMA — gants, protections, tenue",
    h1: "Matériel MMA",
    intro: "Le matériel MMA pour débuter ou confirmer : gants, tibias, shorts et protections.",
    filter: (p) => p.family === "mma",
  },
  "sports-de-combat": {
    slug: "sports-de-combat",
    title: "Sports de combat — équipement boxe, MMA, arts martiaux",
    h1: "Sports de combat",
    intro: "Équipement pour la boxe, le MMA et les sports de combat. Une boutique nationale, un seul endroit pour le matos.",
    filter: () => true,
  },
  "arts-martiaux": {
    slug: "arts-martiaux",
    title: "Arts martiaux — kimonos, ceintures, protections",
    h1: "Arts martiaux",
    intro: "Matériel d’arts martiaux : grappling, kimono, ceintures et protections. Catalogue en cours d’enrichissement.",
    filter: (p) => p.family === "arts-martiaux" || p.family === "mma",
  },
  "textile-combat": {
    slug: "textile-combat",
    title: "Textile combat — shorts, rashguards, tenues",
    h1: "Textile combat",
    intro: "Shorts MMA, fight shorts enfant et tenues d’entraînement Metal Boxe.",
    filter: (p) => p.type === "textile",
  },
  "sacs-de-frappe": {
    slug: "sacs-de-frappe",
    title: "Sacs de frappe et matériel d’entraînement",
    h1: "Sacs de frappe",
    intro: "Sacs, boucliers et matériel de frappe pour la salle ou la maison. Sélection Metal Boxe à venir en stock.",
    filter: (p) => p.type === "entrainement",
  },
  "equipement-debutant": {
    slug: "equipement-debutant",
    title: "Équipement débutant boxe et MMA",
    h1: "Équipement débutant",
    intro: "Le premier matos : gants, bandes, protège-dents. Pour arriver au premier cours déjà prêt.",
    filter: (p) => p.level === "debutant" || p.price < 55,
  },
}

export function formatPrice(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n)
}

import { SITE } from "./nav.js"

/** Guides liés par catégorie (maillage SEO) */
export const CATEGORY_GUIDES = {
  "gants-de-boxe": [
    "comment-choisir-ses-gants-de-boxe",
    "quelle-taille-de-gants-de-boxe-choisir",
    "gants-de-boxe-10-oz-12-oz-14-oz-16-oz",
    "comment-entretenir-ses-gants-de-boxe",
  ],
  "gants-mma": ["gants-mma-ou-gants-de-boxe", "quel-equipement-pour-commencer-le-mma", "matos-mma-les-essentiels-pour-debuter"],
  "protections-boxe": ["protections-de-boxe-casque-protege-dents-protege-tibias", "materiel-de-boxe-anglaise-les-indispensables"],
  "protections-mma": ["protections-de-boxe-casque-protege-dents-protege-tibias", "quel-equipement-pour-commencer-le-mma"],
  "accessoires-boxe": ["quel-matos-de-boxe-acheter-pour-debuter", "comment-entretenir-ses-gants-de-boxe"],
  "sacs-de-frappe": ["comment-choisir-un-sac-de-frappe", "quel-materiel-pour-s-entrainer-au-sac-de-frappe"],
  "equipement-debutant": [
    "quel-matos-de-boxe-acheter-pour-debuter",
    "quel-equipement-pour-commencer-le-mma",
    "materiel-de-boxe-pour-enfant",
  ],
  "matos-de-boxe": ["quel-matos-de-boxe-acheter-pour-debuter", "materiel-de-boxe-anglaise-les-indispensables"],
  "materiel-mma": ["matos-mma-les-essentiels-pour-debuter", "quel-equipement-pour-commencer-le-mma"],
  "sports-de-combat": ["quel-equipement-pour-les-sports-de-combat", "gants-mma-ou-gants-de-boxe"],
  "textile-combat": ["quel-equipement-pour-commencer-le-mma", "materiel-de-boxe-pour-enfant"],
  nouveau: ["quel-matos-de-boxe-acheter-pour-debuter", "comment-choisir-ses-gants-de-boxe"],
  "arts-martiaux": ["quel-equipement-pour-les-sports-de-combat"],
}

/** FAQ par catégorie (FAQPage schema + contenu visible) */
export const CATEGORY_FAQS = {
  "gants-de-boxe": [
    {
      q: "Quelle taille de gants de boxe choisir ?",
      a: "Pour le sac et la technique, 10 ou 12 oz conviennent souvent. Pour le sparring, la plupart des adultes prennent 14 ou 16 oz. Le poids, le niveau et le règlement du club comptent aussi.",
    },
    {
      q: "Gants velcro ou lacets ?",
      a: "Le velcro est pratique au vestiaire et pour débuter. Les lacets offrent un maintien plus ferme, surtout en compétition, mais demandent d’être noués.",
    },
    {
      q: "Puis-je commander sur matos-de-boxe.fr ?",
      a: "Le catalogue est en ligne. La vente nationale n’est pas encore ouverte : tu peux t’inscrire sur les fiches pour être prévenu.",
    },
  ],
  "gants-mma": [
    {
      q: "Quelle différence entre gants MMA et gants de boxe ?",
      a: "Les gants MMA laissent les doigts libres pour saisir et passer au sol. Les gants de boxe couvrent toute la main et sont pensés pour le punching bag et le sparring boxe.",
    },
    {
      q: "Quels gants MMA pour le sparring ?",
      a: "Prends un modèle avec assez de mousse (type The Shell ou sparring Legacy). Les gants combat très fins sont plutôt pour le match, pas pour les rounds durs.",
    },
    {
      q: "Les gants hybrid servent à quoi ?",
      a: "Ils conviennent pour débuter le MMA ou mélanger pads et grappling léger, avec un bon compromis entre protection et main libre.",
    },
  ],
  "protections-boxe": [
    {
      q: "Le casque de boxe est-il obligatoire ?",
      a: "En club, dès que tu sparres à la tête, le casque est souvent exigé. Il protège surtout les arcades et le nez, pas contre tous les impacts.",
    },
    {
      q: "Protège-dents moulé ou boîte ?",
      a: "Un modèle à mouler à chaud tient mieux et protège mieux lèvres et dents. Garde-le propre dans un sachet après chaque séance.",
    },
  ],
  "protections-mma": [
    {
      q: "Quand porter des protège-tibias en MMA ?",
      a: "Dès que tu kicks ou reçois des low kicks en sparring. Sans tibias, les chocs s’accumulent vite.",
    },
    {
      q: "Tibias ou tibias-pieds ?",
      a: "Les tibias-pieds couvrent aussi le cou-de-pied, utile en thaï et MMA. Les tibias seuls peuvent suffire selon le règlement de ta salle.",
    },
  ],
  "accessoires-boxe": [
    {
      q: "Pourquoi mettre des bandes de boxe ?",
      a: "Elles stabilisent le poignet et les métacarpes. Même avec de bons gants, les bandes restent le premier réflexe avant le sac ou le sparring.",
    },
    {
      q: "Bandes ou sous-gants ?",
      a: "Les bandes classiques offrent le meilleur maintien. Les sous-gants sont plus rapides à enfiler pour une séance courte.",
    },
  ],
  "sacs-de-frappe": [
    {
      q: "Quel sac de frappe pour débuter à la maison ?",
      a: "Un sac suspendu 90 à 120 cm peut suffire en appartement. Vérifie le point d’ancrage. En salle, un 150–180 cm apporte plus de volume.",
    },
    {
      q: "Faut-il remplir le sac soi-même ?",
      a: "Certains modèles arrivent garnis (plus simples). Les sacs vides coûtent moins cher mais demandent du temps et le bon matériau de remplissage.",
    },
  ],
  "equipement-debutant": [
    {
      q: "Quel est le minimum pour le premier cours de boxe ?",
      a: "Souvent : gants 12 ou 14 oz, bandes ou sous-gants, protège-dents. Demande à ton club ce qui est prêté avant d’acheter le reste.",
    },
    {
      q: "Faut-il tout acheter le jour J ?",
      a: "Non. Commence par le trio gants / bandes / dents, puis ajoute casque et tibias selon la discipline et le rythme des sparrings.",
    },
  ],
  "matos-de-boxe": [
    {
      q: "Qu’est-ce que le matos de boxe indispensable ?",
      a: "Gants, bandes, protège-dents. Ensuite casque pour le sparring tête, et éventuellement sac ou paos selon ton entraînement.",
    },
    {
      q: "Livrez-vous en France ?",
      a: "La boutique prépare une ouverture nationale. Les modalités de livraison seront publiées à l’activation des ventes.",
    },
  ],
  "materiel-mma": [
    {
      q: "Quel matériel MMA pour débuter ?",
      a: "Gants MMA (ou hybrid), protège-dents, short, et tibias dès que tu kicks. Le rashguard et les genouillères viennent ensuite.",
    },
  ],
  "sports-de-combat": [
    {
      q: "Boxe, MMA ou arts martiaux : quel équipement ?",
      a: "Chaque discipline a ses contraintes. Les gants, protections et textile changent : suis les guides d’achat selon ton sport.",
    },
  ],
  "textile-combat": [
    {
      q: "Short de boxe ou short MMA ?",
      a: "Le short MMA est plus libre pour les kicks et le sol. Le short de boxe / thaï convient mieux aux sports debout.",
    },
  ],
  nouveau: [
    {
      q: "Les nouveautés sont-elles disponibles à l’achat ?",
      a: "Elles sont visibles au catalogue. La vente n’est pas encore ouverte : inscris-toi sur la fiche pour être prévenu.",
    },
  ],
  "arts-martiaux": [
    {
      q: "Proposez-vous du matériel d’arts martiaux ?",
      a: "Le catalogue s’enrichit. Tu y trouveras surtout du matériel de combat (boxe, MMA) Metal Boxe, avec des protections utiles au grappling.",
    },
  ],
}

export function absoluteUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`
  return `${SITE.url}${p}`
}

export function productSeoTitle(product) {
  return `${product.name} Metal Boxe — prix et fiche`
}

export function productSeoDescription(product) {
  return `${product.short} ${product.brand}. ${product.discipline}. Prix indicatif ${product.price} € sur matos-de-boxe.fr.`
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.item ? { item: it.item } : {}),
    })),
  }
}

export function faqLd(faqs) {
  if (!faqs?.length) return null
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function itemListLd(name, url, products) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.slice(0, 24).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/p/${p.slug}`),
        name: p.name,
      })),
    },
  }
}

export function articleLd(guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    mainEntityOfPage: absoluteUrl(`/guides-achat/${guide.slug}`),
  }
}

/** Guides liés à un produit selon type / famille */
export function guidesForProduct(product) {
  if (product.type === "gants" && product.family === "boxe") return CATEGORY_GUIDES["gants-de-boxe"]
  if (product.type === "gants" && product.family === "mma") return CATEGORY_GUIDES["gants-mma"]
  if (product.type === "protection" && product.family === "boxe") return CATEGORY_GUIDES["protections-boxe"]
  if (product.type === "protection" && product.family === "mma") return CATEGORY_GUIDES["protections-mma"]
  if (product.type === "accessoire") return CATEGORY_GUIDES["accessoires-boxe"]
  if (product.type === "entrainement") return CATEGORY_GUIDES["sacs-de-frappe"]
  if (product.type === "textile") return CATEGORY_GUIDES["textile-combat"]
  return CATEGORY_GUIDES["matos-de-boxe"]
}

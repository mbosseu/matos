import { CATEGORIES } from "./nav.js"

const img = (file) =>
  `https://cdn.shopify.com/s/files/1/0805/2480/4445/files/${file}`

export const PRODUCTS = [
  {
    slug: "gants-de-boxe-ergo90-miami-vibe-noir",
    name: "Gants de boxe Ergo90 Miami Vibe",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe entraînement",
    discipline: "Boxe anglaise",
    level: "debutant",
    price: 42.5,
    colors: ["Noir"],
    sizes: ["10 oz", "12 oz", "14 oz", "16 oz"],
    image: img("gants_metal_boxe_ergo_90_miami_vibe_noir.jpg?v=1770202178"),
    short: "Gant d’entraînement polyvalent, velcro, pour le sac et les pads.",
    benefits: ["Bonne prise en main pour débuter", "Velcro rapide au vestiaire", "Quatre tailles d’onces"],
    specs: ["Marque Metal Boxe", "Fermeture velcro", "Usage sac et pads"],
    care: "Laisser sécher à l’air après la séance, loin d’un radiateur. Glisser un absorbeur d’humidité si tu enchaînes les rounds.",
    use: "Idéal premier gant club : sac, technique, un peu de pads. Pour le sparring long, passe sur un 14 ou 16 oz plus rembourré.",
    description: `Le Ergo90 Miami Vibe est le gant qu’on enfile sans se poser cinquante questions. Velcro, forme compacte, ça va au sac comme aux paos.

Chez Matos de boxe on le range dans le matos de boxe « quotidien » : tu arrives au club, tu tapes, tu rentres. La mousse absorbe assez pour un débutant et un confirmé qui veut un gant léger en 10 ou 12 oz. En 14 et 16 oz, tu gagnes en couverture pour les échanges un peu plus denses.

Ce n’est pas un gant de compétition lacets. C’est un gant d’entraînement Metal Boxe, clair, solide, taillé pour durer les mois où tu poses tes bases : garde, jab, déplacement.`,
  },
  {
    slug: "gants-de-boxe-cuir-sparring",
    name: "Gants de boxe cuir sparring",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe sparring",
    discipline: "Boxe anglaise",
    level: "confirme",
    price: 80.75,
    colors: ["Noir / blanc / rouge"],
    sizes: ["12 oz", "14 oz", "16 oz", "18 oz", "20 oz", "24 oz"],
    image: img("P1151428.jpg?v=1712237487"),
    short: "Cuir, gros volume d’onces, pensé pour le sparring régulier.",
    benefits: ["Cuir qui se fait au fil des séances", "Grosses tailles jusqu’au 24 oz", "Protège mieux le partenaire"],
    specs: ["Cuir", "Velcro", "Sparring"],
    care: "Essuyer le cuir, sécher ouvert, graisser de temps en temps avec un soin cuir neutre.",
    use: "Sparring club. 16 oz pour la plupart des adultes, 14 oz si tu es léger, 18 oz et plus pour les lourds ou le travail d’endurance d’épaules.",
    description: `Le sparring, ce n’est pas le sac. Il te faut du volume, une mousse qui encaisse le round, et un gant que tu peux prêter sans t’excuser.

Ce modèle cuir Metal Boxe vise ça : des onces larges, une forme classique, un look club. Tu le sors le jour où ça tape vraiment, pas seulement le jour technique. Le cuir se travaille, il sent le vestiaire, il vieillit mieux qu’un PU bas de gamme.

Si tu cherches à acheter des gants de boxe pour sparrer deux fois par semaine, c’est dans cette famille qu’il faut chercher — pas dans un 10 oz de sac.`,
  },
  {
    slug: "gants-de-boxe-cuir-apollon",
    name: "Gants de boxe cuir Apollon",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe cuir",
    discipline: "Boxe anglaise",
    level: "confirme",
    price: 68,
    colors: ["Noir"],
    sizes: ["8 oz", "10 oz", "12 oz", "14 oz"],
    image: img("P1152303.jpg?v=1712659305"),
    short: "Gant cuir compact, du sac à la technique.",
    benefits: ["Cuir", "Moins de volume que le sparring", "Bonne frappe au sac"],
    specs: ["Cuir", "Velcro", "8 à 14 oz"],
    care: "Séchage à l’air, jamais en machine.",
    use: "Sac, technique, pads. Complémentaire d’un 16 oz de sparring.",
    description: `L’Apollon est le gant cuir « travail ». Moins gonflé qu’un sparring 16 oz, plus sérieux qu’un premier prix synthétique.

Tu le mets pour le sac lourd, les enchaînements, le feeling poing fermé. En 10 ou 12 oz la plupart des pratiquants sont à l’aise. Le 8 oz reste plutôt sac / compétition selon les règles de ta ligue.

Un bon duo club : Apollon pour taper, sparring cuir pour échanger.`,
  },
  {
    slug: "gants-de-boxe-legacy-horse-hair-noir",
    name: "Gants de boxe Legacy Horse Hair",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe haut de gamme",
    discipline: "Boxe anglaise",
    level: "confirme",
    price: 136,
    colors: ["Noir"],
    sizes: ["8 oz", "10 oz", "10 oz XL"],
    image: img("P1202229.jpg?v=1750229476"),
    short: "Ligne Legacy, crin, finition haut de gamme.",
    benefits: ["Finition Legacy", "Crin pour un toucher différent", "Pièce de collection autant que d’entraînement"],
    specs: ["Ligne Legacy", "Horse hair", "Haut de gamme"],
    care: "Cuir précieux : séchage lent, soin régulier, pas de soleil direct.",
    use: "Travail technique et séances soignées. Vérifie le règlement si tu vises la compétition.",
    description: `La ligne Legacy, c’est l’autre visage de Metal Boxe : moins « premier gant club », plus objet de pratiquant qui veut un cuir travaillé.

Le Horse Hair change la sensation à l’impact par rapport à une mousse classique. Ce n’est pas le gant qu’on jette au fond du sac après le cours kids. C’est le gant qu’on range, qu’on entretient, qu’on ressort.

Prix indicatif haut de gamme : tu l’achètes quand tu as déjà un 16 oz de sparring et que tu veux un deuxième gant qui claque.`,
  },
  {
    slug: "gants-mma-hybrid",
    name: "Gants MMA Hybrid",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA entraînement",
    discipline: "MMA",
    level: "debutant",
    price: 41.65,
    colors: ["Noir"],
    sizes: ["S/M", "L/XL"],
    image: img("hybrid.jpg?v=1783506692"),
    short: "Gant MMA polyvalent, doigts libres, pour grappling et frappe.",
    benefits: ["Main plus libre qu’un gant de boxe", "Deux tailles simples", "Bon premier gant MMA"],
    specs: ["MMA hybrid", "Velcro", "S/M et L/XL"],
    care: "Séchage ouvert, laver la sangle velcro pour qu’elle tienne.",
    use: "Drills, sac MMA, sparring léger. Pour le sparring dur, un modèle plus moussé type Shell ou Legacy sparring.",
    description: `En MMA tu ne peux pas arriver avec des gants de boxe 16 oz : tu dois saisir, checker, passer au sol.

L’Hybrid Metal Boxe est pensé pour ça. Doigts dégagés, mousse sur le dessus, velcro. C’est le gant qu’on recommande pour commencer le MMA sans se ruiner, le temps de comprendre si tu sparres surtout debout ou au sol.

Matériel MMA de base, au même titre que le protège-dents et la coquille.`,
  },
  {
    slug: "gants-mma-the-shell-noir",
    name: "Gants MMA sparring The Shell",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA sparring",
    discipline: "MMA",
    level: "confirme",
    price: 34,
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("P1202075_593d7c85-5295-4520-910e-879e3668c2d4.jpg?v=1749561889"),
    short: "Best-seller sparring MMA, mousse bombée, pouce protégé.",
    benefits: ["Mousse plus généreuse pour sparrer", "Pouce renforcé", "Tailles du S au XXL"],
    specs: ["Sparring MMA", "Mousse injectée", "Velcro large"],
    care: "Sécher loin de la chaleur. Ne pas laisser mouillé dans le sac.",
    use: "Sparring MMA. La mousse rapproche la sensation d’un gant de boxe tout en laissant la main travailler au sol.",
    description: `The Shell, c’est le gant que les salles sortent quand ça sparre pour de vrai en MMA.

La mousse bombée absorbe mieux qu’une mitaine de grappling. Le pouce est calé. Le velcro tient quand tu transpires. Tu peux checker, underhook, frapper — sans avoir l’impression d’avoir des plaquettes de beurre au bout des poings.

Si tu hésites entre gants MMA ou gants de boxe : pour l’octogone et le sol, c’est celui-là. Pour le ring de boxe anglaise, tu prends un 14 ou 16 oz.`,
  },
  {
    slug: "gants-mma-combat-legacy",
    name: "Gants de combat MMA Legacy",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA combat",
    discipline: "MMA",
    level: "confirme",
    price: 51,
    colors: ["Noir / or"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    image: img("P1202160.jpg?v=1750240534"),
    short: "Gant combat MMA, ligne Legacy, look noir et or.",
    benefits: ["Profil combat plus fin", "Ligne Legacy", "Grandes tailles"],
    specs: ["Combat MMA", "Legacy", "Noir or"],
    care: "Cuir / matériaux premium : séchage lent.",
    use: "Travail combat et drills spécifiques. Le sparring quotidien reste plus sûr en Shell ou Legacy sparring.",
    description: `Le gant combat est plus fin : tu gagnes en toucher, tu perds en coussin. C’est voulu.

La version Legacy ajoute la finition noir et or Metal Boxe. Tu ne le mets pas pour 12 rounds de sparring amateur le dimanche matin. Tu le sors pour le travail spécifique, les photos de club, les séances où le feeling poing-cible compte.

Complète-le avec des tibias et un casque si tu sparres pieds-poings.`,
  },
  {
    slug: "gants-mma-sparring-legacy",
    name: "Gants MMA sparring Legacy",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA sparring",
    discipline: "MMA",
    level: "confirme",
    price: 51,
    colors: ["Noir / or"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    image: img("P1165206.jpg?v=1750170252"),
    short: "Sparring MMA Legacy, mousse généreuse, finition premium.",
    benefits: ["Plus de mousse que le combat", "Esthétique Legacy", "Maintien velcro"],
    specs: ["Sparring", "Legacy", "Noir or"],
    care: "Séchage à l’air, soin cuir si besoin.",
    use: "Sparring MMA régulier pour pratiquants qui veulent la ligne Legacy.",
    description: `Même famille que The Shell, autre niveau de finition. Le sparring Legacy est fait pour les rounds, pas pour le show.

Si tu t’entraînes plusieurs fois par semaine en MMA, c’est le genre de gant qui reste dans le sac. Le noir et or ne change rien à l’impact — la mousse, si.`,
  },
  {
    slug: "gants-mma-the-claw-noir",
    name: "Gants MMA fight The Claw",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA combat",
    discipline: "MMA",
    level: "confirme",
    price: 34,
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("the_claw.jpg?v=1770199874"),
    short: "Mitaine fight, profil agressif, main très libre.",
    benefits: ["Léger", "Saisies faciles", "Prix accessible"],
    specs: ["Fight MMA", "The Claw", "Velcro"],
    care: "Séchage ouvert après chaque séance.",
    use: "Drills grappling + frappe. Sparring dur : prévois un modèle plus moussé.",
    description: `The Claw assume le côté mitaine : peu de mousse, beaucoup de main. Parfait pour sentir les poignets, les parades, les contrôles.

Ce n’est pas le gant qu’on met sur un débutant pour son premier sparring intense. C’est le gant de travail, celui qui va au sac MMA et aux drills de sol.`,
  },
  {
    slug: "protege-tibias-pieds-mma-legacy",
    name: "Protège-tibias pieds MMA Legacy",
    brand: "Metal Boxe",
    family: "mma",
    type: "protection",
    category: "Protège-tibias MMA",
    discipline: "MMA",
    level: "confirme",
    price: 85,
    colors: ["Noir / or"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("tib.jpg?v=1750255597"),
    short: "Tibias + cou-de-pied, ligne Legacy, pour low kicks et checks.",
    benefits: ["Couvre tibia et pied", "Maintien pour checker", "Finition Legacy"],
    specs: ["Tibias-pieds", "MMA", "Legacy"],
    care: "Sécher la mousse et les sangles. Velcros propres = tibias qui ne tournent pas.",
    use: "Sparring pieds-poings, MMA, boxe thaï. Taille : le tibia doit être couvert sans gêner la flexion de cheville.",
    description: `Un low kick sans tibia, ça se paie. En MMA et en thaï, le protège-tibias n’est pas optionnel dès que ça sparre.

Le modèle Legacy couvre tibia et cou-de-pied, assez pour checker sans transformer ta jambe en plâtre. Les sangles doivent serrer : un tibia qui tourne, c’est plus dangereux que pas de tibia.

C’est un des équipements MMA les plus utiles après les gants et le protège-dents.`,
  },
  {
    slug: "protege-tibia-pied-blade-miami-vibe",
    name: "Protège-tibias pieds Blade Miami Vibe",
    brand: "Metal Boxe",
    family: "mma",
    type: "protection",
    category: "Protège-tibias MMA",
    discipline: "MMA / Thaï",
    level: "debutant",
    price: 25.07,
    colors: ["Miami Vibe"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("tibias_pieds_blade_metal_boxe_mma.jpg?v=1770200089"),
    short: "Tibias accessibles pour débuter les sports pieds-poings.",
    benefits: ["Prix entrée de gamme", "Tibia + pied", "Plusieurs tailles"],
    specs: ["Blade", "Miami Vibe", "Velcro"],
    care: "Séchage à l’air, pas de machine.",
    use: "Premiers cours thaï / MMA. Quand tu sparres plus dur, monte en densité de mousse.",
    description: `Pour commencer le MMA ou la boxe thaï, tu n’as pas besoin du tibia le plus cher du catalogue. Tu as besoin d’un modèle qui tient, qui couvre, que tu oses mettre à chaque cours.

Le Blade Miami Vibe fait ce job. Ensuite, si tu kicks tous les soirs, tu passeras sur un Legacy ou un tibia plus dense.`,
  },
  {
    slug: "casque-barre-polycarbonate-noir",
    name: "Casque barre polycarbonate",
    brand: "Metal Boxe",
    family: "boxe",
    type: "protection",
    category: "Casque de boxe",
    discipline: "Boxe / MMA",
    level: "confirme",
    price: 51,
    colors: ["Noir"],
    sizes: ["Taille unique"],
    image: img("casque_visi_re_barre_metal_boxe_mma.jpg?v=1770199812"),
    short: "Casque à barre, visière polycarbonate, pour le sparring visage.",
    benefits: ["Barre face", "Protège nez et arcades", "Usage sparring"],
    specs: ["Polycarbonate", "Barre", "Noir"],
    care: "Nettoyer la visière sans produit abrasif. Sécher mousses et sangles.",
    use: "Sparring boxe et MMA selon le règlement de ta salle. Ajuste bien : un casque trop lâche bouge à chaque jab.",
    description: `Le casque ne rend pas invincible. Il sauve les arcades, le nez, les séances où le partenaire est un peu trop chaud.

La barre polycarbonate change la donne sur les directs au visage. Tu perds un peu de champ, tu gagnes des semaines sans point de suture. En club, c’est souvent le casque qu’on impose aux amateurs.

Une protection boxe à mettre dans le sac dès que tu sparres la tête.`,
  },
  {
    slug: "genouillere-mma-neoprene",
    name: "Genouillère MMA néoprène",
    brand: "Metal Boxe",
    family: "mma",
    type: "protection",
    category: "Genouillère",
    discipline: "MMA",
    level: "debutant",
    price: 29.75,
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("genouill_re_mma_boxe_metal_neoprene.jpg?v=1770203258"),
    short: "Maintien de genou pour le sol, les shoots et les appuis.",
    benefits: ["Néoprène chaud", "Maintien latéral", "Utile au grappling"],
    specs: ["Néoprène", "MMA", "Noir"],
    care: "Lavage à la main, séchage à plat.",
    use: "Drills sol, MMA, parfois muscu genoux fragiles. Pas un substitut à un avis médical.",
    description: `Le MMA use les genoux : shoots, scrambling, poses de genou au sol. Une genouillère néoprène ne remplace pas un kiné, elle évite que le genou parte dans tous les sens pendant le cours.

Prends la taille qui comprime sans couper. Trop lâche, ça glisse. Trop petite, tu ne plies plus.`,
  },
  {
    slug: "coudiere-mma-neoprene",
    name: "Coudière MMA néoprène",
    brand: "Metal Boxe",
    family: "mma",
    type: "protection",
    category: "Coudière",
    discipline: "MMA",
    level: "debutant",
    price: 29.75,
    colors: ["Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: img("protection_coudes_mma_boxe_neoprene.jpg?v=1770203147"),
    short: "Protection de coude pour le sol et les appuis.",
    benefits: ["Moins de brûlures au tapis", "Maintien articulaire", "Paire avec la genouillère"],
    specs: ["Néoprène", "MMA"],
    care: "Lavage main, pas de sèche-linge.",
    use: "Grappling, MMA, parfois boxe thaï contre les coudes au sac.",
    description: `Les coudes s’ouvrent vite au tapis. La coudière néoprène sert autant à protéger la peau qu’à tenir l’articulation.

C’est un accessoire de sports de combat trop souvent oublié, jusqu’au jour où tu saignes sur le kimono du partenaire.`,
  },
  {
    slug: "fight-short-enfant-noir",
    name: "Fight short enfant",
    brand: "Metal Boxe",
    family: "mma",
    type: "textile",
    category: "Short MMA enfant",
    discipline: "MMA / sports de combat",
    level: "debutant",
    price: 24.65,
    colors: ["Noir"],
    sizes: ["6-8 ans", "8-10 ans", "10-12 ans"],
    image: img("P1204368.jpg?v=1778159971"),
    short: "Short de combat enfant, coupe fight, pour le cours kids.",
    benefits: ["Coupe qui ne gêne pas les kicks", "Tailles enfants", "Entretien facile"],
    specs: ["Enfant", "Fight short", "Noir"],
    care: "Lavage 30 °C, pas d’assouplissant agressif sur les élastiques.",
    use: "Cours kids MMA, boxe, kick. Vérifier le règlement tenue de la salle.",
    description: `Le matos de boxe pour enfant commence souvent par un short qui tient et des gants à sa taille — pas un 14 oz adulte.

Ce fight short Metal Boxe est coupé pour bouger : gardes, kicks, sol. Noir, simple, ça passe en club sans look « carnaval ».

Complète avec gants enfants et protège-dents moulé.`,
  },
  {
    slug: "gants-mma-fitness-one-enfant",
    name: "Gants MMA Fitness One enfant",
    brand: "Metal Boxe",
    family: "mma",
    type: "gants",
    category: "Gants MMA enfant",
    discipline: "MMA",
    level: "debutant",
    price: 24.65,
    colors: ["Noir"],
    sizes: ["Enfant"],
    image: img("MMG201NCH_2.jpg?v=1781174991"),
    short: "Premier gant MMA enfant, main libre, velcro.",
    benefits: ["Taille enfant", "Velcro simple", "Pour les cours kids"],
    specs: ["Enfant", "MMA"],
    care: "Sécher après le cours, surtout si la salle est humide.",
    use: "Cours enfants MMA / pankration selon le club. Sparring kids toujours géré par le coach.",
    description: `Un enfant n’a rien à faire dans un gant adulte trop lourd. Le Fitness One enfant est dimensionné pour de petites mains.

C’est le genre de gant qu’on met dans le sac dès le premier essai en club, avec un protège-dents junior.`,
  },
  {
    slug: "gants-de-boxe-cuir-pro-sirius-noir",
    name: "Gants de boxe cuir pro Sirius",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe compétition",
    discipline: "Boxe anglaise",
    level: "confirme",
    price: 119,
    colors: ["Noir"],
    sizes: ["8 oz", "10 oz", "12 oz"],
    image: img("P1152076.jpg?v=1712659807"),
    short: "Gant cuir lacets, profil compétition.",
    benefits: ["Lacets, maintien poignet", "Cuir pro", "Onces de combat"],
    specs: ["Lacets", "Cuir", "Pro"],
    care: "Délacer, sécher, soigner le cuir. Les lacets, tu les changes avant qu’ils cassent en combat.",
    use: "Compétition et sparring technique encadré. En club loisir, un velcro 16 oz reste plus pratique.",
    description: `Le Sirius, c’est le gant que tu ne mets pas dans le métro avec les lacets qui traînent. Poignet serré, onces de combat, cuir.

Si tu boxes en compétition, tu auras besoin de ce type de gant — et d’un second velcro pour l’entraînement. Ne fais pas l’inverse : un 10 oz lacets tous les soirs au sac, tu uses le gant et tes poignets.`,
  },
  {
    slug: "gants-de-boxe-cuir-thai-series",
    name: "Gants de boxe cuir Thai Series",
    brand: "Metal Boxe",
    family: "boxe",
    type: "gants",
    category: "Gants de boxe thaï",
    discipline: "Boxe thaï",
    level: "confirme",
    price: 68,
    colors: ["Noir / or"],
    sizes: ["8 oz", "10 oz", "12 oz", "14 oz"],
    image: img("P1151502.jpg?v=1712660023"),
    short: "Gant cuir orienté thaï, poignet long, frappe pads et sac.",
    benefits: ["Coupe thaï", "Cuir", "Noir et or"],
    specs: ["Thai series", "Cuir", "Velcro"],
    care: "Séchage, soin cuir, velcro propre.",
    use: "Pads, sac, thaï. Pour le clinch et les tibias, ajoute les protège-tibias.",
    description: `La boxe thaï tape aussi des pads, des kicks, du clinch. Le gant Thai Series allonge un peu le poignet et assume le look combat.

Ce n’est pas un gant de grappling. C’est un gant de frappe pour ceux qui enchaînent jab et low kick dans la même séance.`,
  },
  {
    slug: "bandes-de-boxe-elastiques-oko",
    name: "Bandes de boxe élastiques Oko",
    brand: "Metal Boxe",
    family: "boxe",
    type: "accessoire",
    category: "Bandes de boxe",
    discipline: "Boxe / MMA",
    level: "debutant",
    price: 7.65,
    colors: ["Noir"],
    sizes: ["3,5 m"],
    image: img("P1150675_4f31abfb-4efd-4d3d-8b8e-7c68cd79c797.jpg?v=1712846503"),
    short: "Bandes élastiques pour caler le poignet et les métacarpes sous le gant.",
    benefits: ["Moins de jeu dans le gant", "Velcro rapide", "Prix d’entrée club"],
    specs: ["Élastique", "3,5 m", "Noir"],
    care: "Laver à la main, sécher à plat, velcro refermé pour ne pas râper le tissu.",
    use: "Sous n’importe quel gant de boxe ou MMA. 3,5 m convient à une main adulte moyenne ; si tu as de gros poings, passe en 4 m.",
    description: `Le gant ne tient pas tout seul. La bande, c’est ce qui ferme le poignet et tient les articulations quand tu tapes le sac.

Chez Matos de boxe on la range dans les accessoires indispensables, pas dans le gadget. Une paire propre dans le sac, une paire qui sèche : tu n’arrives jamais au cours les mains nues.

L’élastique Oko se tend, se velcro, et rentre dans n’importe quel Ergo90 ou gant cuir.`,
  },
  {
    slug: "protege-dents-gel",
    name: "Protège-dents gel",
    brand: "Metal Boxe",
    family: "boxe",
    type: "protection",
    category: "Protège-dents",
    discipline: "Boxe / MMA / sports de combat",
    level: "debutant",
    price: 9.35,
    colors: ["Blanc", "Noir"],
    sizes: ["Junior", "Senior"],
    image: img("dents.png?v=1715092434"),
    short: "Protège-dents thermoformable, junior ou senior, pour le sparring.",
    benefits: ["Se moule à l’eau chaude", "Deux tailles", "À mettre dès le premier échange"],
    specs: ["Gel thermoformable", "JR / SR", "Blanc ou noir"],
    care: "Rincer, boîte aérée, pas au fond du sac humide.",
    use: "Sparring boxe, MMA, kick. Sans protège-dents, tu ne sparres pas — c’est la règle dans la plupart des salles.",
    description: `Le casque protège les arcades. Le protège-dents protège les dents, la lèvre et un peu la mâchoire. Ce n’est pas optionnel.

Le modèle gel Metal Boxe se forme à l’eau chaude : tu le moules une fois, tu le ranges dans sa boîte. Junior pour les petits maxillaires, senior pour les adultes.

C’est le premier achat avec les bandes, avant même de rêver d’un 16 oz cuir.`,
  },
  {
    slug: "sac-de-frappe-indiana",
    name: "Sac de frappe Indiana",
    brand: "Metal Boxe",
    family: "boxe",
    type: "entrainement",
    category: "Sacs de frappe",
    discipline: "Boxe",
    level: "debutant",
    price: 93.5,
    colors: ["Orange / noir"],
    sizes: ["90 cm", "120 cm", "150 cm", "170 cm"],
    image: img("indiana.png?v=1714488373"),
    short: "Sac suspendu pour la maison ou le garage, plusieurs hauteurs.",
    benefits: ["Plusieurs tailles", "Look club", "Travail poings sans partenaire"],
    specs: ["Suspendu", "90 à 170 cm", "Metal Boxe"],
    care: "Vérifier crochet et chaînes. Essuyer le cuir ou PU. Ne pas laisser dehors sous la pluie.",
    use: "Maison, garage, petite salle. Choisir la hauteur selon le plafond et ta taille. Ancrage plafond à faire faire si tu n’es pas bricoleur — un sac qui tombe, ça casse un plancher.",
    description: `Le sac, c’est le partenaire qui ne râle pas. L’Indiana est un sac suspendu Metal Boxe, orange et noir, du 90 cm kids/appartement au 170 cm pour un adulte qui veut du volume.

On le met dans le matos d’entraînement : tu travailles gardes, jab, déplacements. Ça ne remplace pas le sparring, mais ça construit les séances entre deux cours.

Prévoir le crochet, les chaînes, et un peu de place autour. Un sac collé au mur, tu tapes de travers.`,
  },
  {
    slug: "sac-de-frappe-plein-club-line",
    name: "Sac de frappe plein Club Line",
    brand: "Metal Boxe",
    family: "boxe",
    type: "entrainement",
    category: "Sacs de frappe club",
    discipline: "Boxe",
    level: "confirme",
    price: 170,
    colors: ["Noir / rouge"],
    sizes: ["180 cm"],
    image: img("sac_de_frappe_boxe_club_line_180.png?v=1770199167"),
    short: "Sac plein 180 cm, densité club, pour enchaîner les rounds.",
    benefits: ["Déjà rempli", "Hauteur adulte", "Tenue de frappe plus lourde"],
    specs: ["Plein", "180 cm", "Club Line"],
    care: "Contrôler les sangles. Tourner le sac de temps en temps pour user uniformément.",
    use: "Salle, cave bien ancrée, club. Produit encombrant : le tarif livraison définitif sera spécifique, comme indiqué sur la page livraison.",
    description: `Le Club Line plein, c’est le sac qu’on trouve dans une salle qui tape vraiment. 180 cm, déjà garni, tu n’as pas à le remplir au sable du parking.

Chez Matos de boxe on le classe dans le matériel lourd : plafond costaud, chaînes, éventuellement un ressort. Pas un achat d’impulsion pour un studio.

Si tu veux juste un premier sac appartement, l’Indiana plus court suffit. Celui-ci, c’est pour les rounds complets.`,
  },
  {
    slug: "bouclier-de-frappe-droit",
    name: "Bouclier de frappe droit",
    brand: "Metal Boxe",
    family: "boxe",
    type: "entrainement",
    category: "Boucliers et paos",
    discipline: "Boxe / thaï / kick",
    level: "confirme",
    price: 85,
    colors: ["Rouge / noir / blanc"],
    sizes: ["L"],
    image: img("bouclier.png?v=1714645425"),
    short: "Bouclier droit pour le coach : kicks, crochets, travail lourd.",
    benefits: ["Absorbe pieds et poings", "Poignées coach", "Format salle"],
    specs: ["PU", "Taille L", "Accroche murale possible"],
    care: "Essuyer la sueur, sécher les mousses. Ne pas laisser comprimé sous d’autres sacs.",
    use: "Pads avec un partenaire. Inutile seul à la maison sauf si tu l’accroches au mur. Le coach tient, tu tapes — pas l’inverse.",
    description: `Le bouclier, c’est l’outil du bord du ring. Tu ne l’achètes pas pour décorer le salon : tu l’achètes si tu coaches, ou si tu as un binôme pour les low kicks.

Le modèle droit Metal Boxe existe en plusieurs tailles ; on présente le L, le plus courant en club. Œillets pour évacuer l’air à l’impact, poignées pour tenir sans se faire rentrer les poignets.

Complémentaire du sac : le sac ne bouge pas, le bouclier oui.`,
  },
]

export function productsFor(slug) {
  const cfg = CATEGORIES[slug]
  if (!cfg) return PRODUCTS
  return PRODUCTS.filter(cfg.filter)
}

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function related(product, n = 4) {
  const others = PRODUCTS.filter((p) => p.slug !== product.slug)
  const sameTypeFamily = others.filter((p) => p.type === product.type && p.family === product.family)
  const sameType = others.filter((p) => p.type === product.type && p.family !== product.family)
  const sameFamily = others.filter((p) => p.family === product.family && p.type !== product.type)
  return [...sameTypeFamily, ...sameType, ...sameFamily].slice(0, n)
}

export function searchProducts(q) {
  const s = q.trim().toLowerCase()
  if (!s) return []
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      p.discipline.toLowerCase().includes(s) ||
      p.brand.toLowerCase().includes(s) ||
      p.type.toLowerCase().includes(s) ||
      p.family.toLowerCase().includes(s) ||
      p.short.toLowerCase().includes(s),
  )
}

import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
  meta: {
    siteTitle: "Puis-je m'offrir une maison ?",
    homeTitleTemplate: "Puis-je m'offrir une maison ? | howaffordable.org",
    homeDescription:
      "Un outil libre et gratuit qui prend vos revenus et votre épargne et vous dit quel type de logement cela permet d'acheter dans votre pays, comment l'accessibilité a évolué depuis 1990 et où votre argent va le plus loin dans le monde.",
    homeOgTitle: "Puis-je m'offrir une maison ?",
    homeOgDescription:
      "Prix réels, revenus réels, taux d'intérêt réels. Voyez votre score d'accessibilité dans votre pays et dans 47 autres. Sans inscription.",
  },
  nav: {
    home: "Calculateur",
    compare: "Comparer les pays",
    methodology: "Méthodologie",
    faq: "FAQ",
    about: "À propos",
    menu: "Menu",
    close: "Fermer",
  },
  home: {
    headline: "Pouvez-vous vous offrir une maison ?",
    subheadline:
      "Revenus et épargne en entrée. En sortie : prix de logement abordable, années pour réunir l'apport et comparaison avec 1990.",
    chooseCountryLabel: "Où vivez-vous ?",
  },
  calculator: {
    heading: "Parlez-nous de vos finances",
    intro: "Chiffres annuels. Nous utilisons les taux d'intérêt et les apports minimums typiques du pays, sauf si vous les modifiez.",
    incomeLabel: "Revenu annuel du foyer (après impôts)",
    incomeHelp: "Salaire net cumulé de toutes les personnes du foyer.",
    savingsLabel: "Épargne disponible pour l'apport",
    savingsHelp: "Épargne liquide uniquement. Pas les fonds de retraite.",
    debtLabel: "Mensualités de dettes actuelles",
    debtHelp: "Prêts étudiants, prêts auto, minimums de carte de crédit. Pas le loyer.",
    mortgageYearsLabel: "Durée du prêt (années)",
    savingsRateLabel: "Taux d'épargne (% du revenu/an)",
    savingsRateHelp: "Quelle part de votre revenu vous pouvez épargner chaque année. La médiane OCDE tourne autour de 7 %.",
    seeResults: "Voir si je peux me le permettre",
    recalculate: "Recommencer",
  },
  result: {
    heading: "Votre instantané d'accessibilité",
    maxPriceLabel: "Prix maximum que vous pouvez vous offrir",
    priceToIncomeLabel: "Coût médian d'un logement dans le pays",
    priceToIncomeYears: "{ratio}× votre revenu annuel",
    verdict: {
      affordable: "Abordable : logement médian sous 4× le revenu",
      stretch: "Tendu : logement médian de 4 à 6× le revenu",
      unaffordable: "Inaccessible : logement médian de 6 à 10× le revenu",
      out_of_reach: "Hors de portée : logement médian au-delà de 10× le revenu",
    },
    downPaymentLabel: "Apport minimum pour la médiane",
    yearsToDownPaymentLabel: "Années pour réunir l'apport",
    yearsToDownPaymentTemplate: "{years} ans à votre taux d'épargne actuel",
    mortgageMonthlyLabel: "Mensualité du prêt sur la médiane",
    burdenLabel: "% du revenu mensuel net",
    compareHeading: "À quoi cela ressemble ailleurs",
    compareCountry: "Logement médian en {country}",
    compareOECD: "Ratio prix/revenu moyen OCDE",
    compareHistoric: "Moyenne historique de long terme (1990-2010)",
  },
  chart: {
    historicalHeading: "Prix/revenu depuis 1990",
    historicalSubtitle: "{country} face à la moyenne OCDE",
    currentLabel: "Aujourd'hui",
  },
  cta: {
    support: {
      heading: "Soutenir ce projet",
      body:
        "Gratuit, ouvert, sans publicité, sans traceurs. Si cela vous a aidé, un petit pourboire me permet de continuer à construire des outils éducatifs ouverts.",
      ctaLabel: "Soutenir sur Ko-fi",
    },
    furtherReading: {
      heading: "Pour aller plus loin",
      body:
        "Les livres qui ont façonné ce calculateur. Acheter via Bookshop.org reverse une part aux librairies indépendantes locales.",
      ctaLabel: "Voir la liste de lectures",
      disclosure: "Lien d'affiliation Bookshop.",
    },
    sister: {
      heading: "Projets frères",
      body: "Même design, autre question.",
      howpoorami: "À quel point suis-je pauvre ?",
      howgreenami: "Quelle est la taille de mon empreinte carbone ?",
    },
  },
  footer: {
    tagline: "Données ouvertes, chiffres réels, sans traceurs.",
    source: "Sources de données",
    license: "Licence",
    madeBy: "Réalisé par Yohan Runhaar",
    about: "À propos",
    faq: "FAQ",
    methodology: "Méthodologie",
    github: "GitHub",
    support: "Offrez-moi un café",
    buildDateTemplate: "Données du {date}",
  },
  common: {
    perYear: "par an",
    perMonth: "par mois",
    years: "ans",
    loading: "Chargement...",
    errorTitle: "Quelque chose a mal tourné",
    errorBody: "Rechargez la page. Si le problème persiste, ouvrez un ticket sur GitHub.",
  },
};

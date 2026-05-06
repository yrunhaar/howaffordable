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
    home: "À quel point abordable ?",
    compare: "Comparer les pays",
    report: "Report",
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
  country: {
    headlineTemplate: "Pouvez-vous vous offrir un logement en {country} ?",
    verdictAffordable: "Abordable selon les standards historiques",
    verdictStretch: "Tendu, au-dessus de la norme historique",
    verdictUnaffordable: "Inaccessible selon la classification de Demographia",
    verdictOutOfReach: "Hors de portée pour le foyer médian",
    bodyTemplate:
      "Le logement médian en {country} coûte {price} et le foyer médian gagne {income}, soit un ratio prix/revenu de {ratio}×. Classé {rank} sur {total} pour le coût du logement par rapport au revenu.",
    statMedianHomeLabel: "Prix médian du logement",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Revenu médian du foyer",
    statMedianIncomeSub: "après impôts",
    statMortgageLabel: "Taux moyen du prêt immobilier",
    statMortgageSub: "apport min. {pct} %",
    historyHeading: "Comment l'accessibilité du logement a évolué en {country}",
    historyBodyTemplate:
      "Le ratio prix/revenu a culminé à {peakValue}× en {peakYear}. Aujourd'hui : {todayValue}×. {shift} La moyenne OCDE sur la même période est passée de {oecdStart}× en {oecdYear} à {oecdToday}× aujourd'hui.",
    historyShiftTemplate:
      "Si vous aviez eu le revenu d'aujourd'hui en {startYear}, vous auriez pu vous offrir {pct} % du pouvoir d'achat actuel pour le logement médian du pays.",
    calculatorHeadingTemplate: "À quel point {country} est-il accessible pour vous ?",
    calculatorSubheadingTemplate:
      "Saisissez votre revenu et votre épargne pour voir votre prix maximum personnel, le nombre d'années pour réunir l'apport, et comment cela se compare à la médiane de {country}.",
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
    narrativeHeading: "Ce que cela signifie",
    narrativeBody: "Votre prix maximum est le plafond que la banque accepterait sur votre revenu, au taux moyen du pays, avec le test standard de 36 % d'endettement. La bande de verdict regarde le prix médian du logement comme un multiple de votre revenu, selon la classification de Demographia. Ensemble, ils indiquent à la fois ce que VOUS pourriez emprunter et où se situe le marché du pays par rapport à votre revenu. Quand les deux chiffres sont proches, vous êtes au ras de la médiane et la marge de sécurité est faible.",
    burdenHeading: "Charge du prêt face aux seuils des banques",
    burdenIntro: "La plupart des banques plafonnent la mensualité à 36 % du revenu brut. Certaines vont jusqu'à 43 %. Sous 28 %, c'est confortable ; au-dessus du seuil, le prêt est refusé ou n'est accordé qu'avec conditions.",
    burdenComfortable: "Confortable : nettement sous le plafond DTI de la banque, vous avez de la marge pour les réparations, l'épargne et les hausses de taux.",
    burdenManageable: "Tenable : sous le plafond des 36 %, mais peu de marge en cas d'imprévu.",
    burdenStretched: "Tendu : au-delà du plafond standard de 36 %. Certaines banques vont jusqu'à 43 %, mais chaque point de hausse des taux serre le budget.",
    burdenOverLimit: "Au-dessus de la ligne : la plupart des banques ne valideront pas à ce niveau. Il faudrait un logement moins cher, un apport plus élevé ou une durée plus longue.",
    burdenYouLabel: "Vous",
    historyHeading: "Comment l'accessibilité a évolué",
    historyIntro: "Ratio prix/revenu en {country} de 1990 à aujourd'hui. Plus la courbe monte, moins le même revenu permet d'acheter.",
    historyAffordabilityShiftTemplate: "Si vous aviez eu le même revenu en {year}, vous auriez pu vous offrir {pct} du pouvoir d'achat actuel pour le logement médian du pays.",
    crossHeading: "Ce que votre revenu relatif achète ailleurs dans le monde",
    crossIntro: "Prenez votre position dans la distribution des revenus de votre pays et appliquez-la ailleurs. Même revenu relatif, marchés différents.",
    crossColumnCountry: "Pays",
    crossColumnAffordable: "Maximum accessible",
    crossColumnRatio: "Médiane × votre revenu",
    crossColumnVerdict: "Verdict",
    rentHeading: "Acheter ou louer",
    rentIntro: "Mensualité du prêt sur le logement médian du pays face au loyer médian du pays.",
    rentMonthlyLabel: "Loyer mensuel médian",
    mortgageMonthlyOnMedianLabel: "Mensualité sur logement médian",
    rentBuyDiffMore: "Acheter coûte environ {amount} de plus par mois que louer à la médiane, mais construit du patrimoine avec le temps.",
    rentBuyDiffLess: "Acheter coûte environ {amount} de moins par mois que louer à la médiane. Le calcul achat/location dépend aussi de la durée de détention et de la hausse des prix.",
    takeawaysHeading: "À surveiller",
    takeawaysIntro: "Lectures pratiques tirées de votre instantané.",
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
  report: {
    title: "Rapport personnel d'accessibilité au logement",
    subtitle: "Prix réels, revenus réels, taux réels, calés sur votre chiffre.",
    preparedFor: "Préparé pour : {country}, {date}",
    landingTitle: "Votre rapport personnel d'accessibilité au logement",
    landingFreeBadge: "Gratuit. Sans inscription, sans paiement, sans e-mail",
    landingFeatureA: {
      title: "Votre prix maximum",
      body:
        "Calculé à partir de votre revenu et de votre épargne, du taux du pays, et d'un plafond standard de 36 % d'endettement. Plus l'écart avec la médiane du pays.",
    },
    landingFeatureB: {
      title: "Contexte du pays et historique",
      body:
        "Où se situe votre pays sur l'échelle mondiale de l'accessibilité, et comment le ratio prix/revenu a évolué au fil des décennies.",
    },
    landingFeatureC: {
      title: "Totalement privé",
      body:
        "Le PDF est généré dans votre navigateur. Rien n'est envoyé à un serveur. Pas d'e-mail, pas de compte, pas de pistage.",
    },
    landingPicker: {
      title: "Générer votre rapport",
      subtitle: "Choisissez un pays, saisissez votre revenu et votre épargne, on s'occupe du reste.",
      countryLabel: "Pays",
      incomeLabel: "Revenu annuel du foyer (après impôts)",
      incomeHelp: "Salaire net cumulé de toutes les personnes du foyer.",
      savingsLabel: "Épargne disponible pour l'apport",
      savingsHelp: "Épargne liquide uniquement. Pas les fonds de retraite.",
      generateButton: "Générer le PDF",
      generatingButton: "Génération...",
    },
    pdfPageLabel: "Page",
    pdfFooterAttribution: "howaffordable.org · Données ouvertes · Sans pistage",
    pdfCoverGeneratedLabel: "Généré",
    pdfYourPriceLabel: "Prix maximum que vous pouvez vous offrir",
    pdfMaxPriceLeadIn: "Votre plafond d'emprunt",
    pdfCoverNarrative:
      "Votre prix maximum est le plafond que la banque accepterait sur votre revenu, au taux moyen du pays, avec un test DTI à 36 %. Les pages qui suivent replacent ce chiffre face à la médiane du pays, à la trajectoire historique du pays et à la logique achat/location.",
    pdfSection1Title: "Votre instantané",
    pdfSection1Body:
      "Prix maximum, mensualité du prêt sur le logement médian du pays, écart entre votre maximum et la médiane du pays, et nombre d'années pour un apport typique à votre taux d'épargne.",
    pdfSection2Title: "Où se situe le pays",
    pdfSection2Body:
      "Prix médian du logement, revenu médian du foyer, taux du prêt et part minimum d'apport.",
    pdfSection3Title: "Entre pays",
    pdfSection3Body:
      "Votre position relative dans la distribution des revenus de votre pays appliquée à d'autres marchés : même percentile, marchés différents.",
    pdfHistoricalTitle: "Comment l'accessibilité a évolué",
    pdfHistoricalBody:
      "Ratio prix/revenu dans votre pays sur la période disponible dans les données OCDE et BIS. Plus la courbe monte, plus le marché est dur pour le foyer médian.",
    pdfHistoricalInsightTemplate:
      "Le ratio prix/revenu de {country} était de {firstValue}× en {firstYear}. En {lastYear} : {lastValue}×. {direction} {magnitude}× sur la période.",
    pdfHistoricalNoData:
      "Pas de série historique longue pour ce pays. L'instantané ci-dessus reste valable.",
    pdfTakeawaysTitle: "Ce que cela signifie en pratique",
    pdfTakeawaysIntro:
      "Lectures personnelles de votre instantané, selon la charge, le ratio et le régime du pays.",
    pdfTakeawaysAffordable:
      "Le logement médian de votre pays est largement à portée : les prix sont sous 4× le revenu médian. Les choix qui restent portent sur l'endroit où acheter et le niveau d'apport et de levier.",
    pdfTakeawaysStretch:
      "Le logement médian de votre pays est tendu : entre 4 et 6× le revenu, acheter exige en général un apport solide, une durée de prêt longue, ou d'accepter un logement plus petit ou plus excentré.",
    pdfTakeawaysUnaffordable:
      "Le logement médian de votre pays est inaccessible selon la classification de Demographia : 6 à 10× le revenu. Acheter requiert souvent une aide familiale, deux revenus, ou un compromis significatif sur la taille ou la localisation.",
    pdfTakeawaysOutOfReach:
      "Au-delà de 10× le revenu, posséder le logement médian du pays est de fait hors d'atteinte sans capital extérieur conséquent. Surveillez les ratios loyer/prix locaux ; louer peut être le meilleur choix sur le long terme.",
    pdfTakeawaysBuyVsRent:
      "Sous environ 15× le loyer annuel, acheter bat généralement la location sur une détention de 5 ans et plus. Au-dessus de 25× environ, louer l'emporte clairement. Le calcul achat/location dépend aussi de la durée de détention et de la hausse des prix, pas seulement du ratio.",
    pdfMethodologyTitle: "Méthodologie",
    pdfMethodologyBody:
      "Prix médians du logement et ratios prix/revenu issus de l'OECD Affordable Housing Database et de la BIS Selected Property Price Series. Taux des prêts immobiliers issus de l'ECB SDW (zone euro), Federal Reserve H.15 (États-Unis), Bank of England (Royaume-Uni) et des banques centrales nationales ailleurs. Bandes de Demographia pour la classification d'accessibilité. Le calcul s'exécute entièrement côté navigateur ; rien n'est envoyé à un serveur.",
    pdfTipTitle: "Ce rapport vous a plu ?",
    pdfTipBody:
      "Il est gratuit et sans publicité. S'il est utile, un petit pourboire sur Ko-fi me permet de continuer à construire des outils éducatifs ouverts.",
    pdfFilenameTemplate: "howaffordable-{country}-{date}.pdf",
  },
  common: {
    perYear: "par an",
    perMonth: "par mois",
    years: "ans",
    loading: "Chargement. .",
    errorTitle: "Quelque chose a mal tourné",
    errorBody: "Rechargez la page. Si le problème persiste, ouvrez un ticket sur GitHub.",
  },
};

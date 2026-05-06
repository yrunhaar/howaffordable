import type { Dictionary } from "../dictionary";

export const de: Dictionary = {
  meta: {
    siteTitle: "Kann ich mir ein Haus leisten?",
    homeTitleTemplate: "Kann ich mir ein Haus leisten? | howaffordable.org",
    homeDescription:
      "Ein kostenloses, offenes Tool, das aus Ihrem Einkommen und Ihren Ersparnissen ableitet, was für ein Zuhause das in Ihrem Land bedeutet, wie sich die Erschwinglichkeit seit 1990 verändert hat und wo Ihr Geld weltweit am weitesten reicht.",
    homeOgTitle: "Kann ich mir ein Haus leisten?",
    homeOgDescription:
      "Echte Preise, echte Einkommen, echte Zinsen. Sehen Sie Ihren Erschwinglichkeitswert in Ihrem Land und in 47 weiteren. Kein Login.",
  },
  nav: {
    home: "Wie bezahlbar?",
    compare: "Länder vergleichen",
    report: "Report",
    methodology: "Methodik",
    faq: "FAQ",
    about: "Über",
    menu: "Menü",
    close: "Schließen",
  },
  home: {
    headline: "Können Sie sich ein Haus leisten?",
    subheadline:
      "Einkommen und Ersparnisse rein. Bezahlbarer Hauspreis, Jahre bis zur Anzahlung und der Vergleich mit 1990 raus.",
    chooseCountryLabel: "Wo wohnen Sie?",
  },
  country: {
    headlineTemplate: "Können Sie sich ein Haus in {country} leisten?",
    verdictAffordable: "Bezahlbar nach historischen Maßstäben",
    verdictStretch: "Knapp, über der historischen Norm",
    verdictUnaffordable: "Unbezahlbar nach Demographia-Klassifikation",
    verdictOutOfReach: "Für den Median-Haushalt unerreichbar",
    bodyTemplate:
      "Das Median-Haus in {country} kostet {price} und der Median-Haushalt verdient {income}, ein Preis-Einkommens-Verhältnis von {ratio}×. Platz {rank} von {total} bei den Wohnkosten im Verhältnis zum Einkommen.",
    statMedianHomeLabel: "Median-Hauspreis",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Median-Haushaltseinkommen",
    statMedianIncomeSub: "nach Steuern",
    statMortgageLabel: "Durchschnittlicher Hypothekenzins",
    statMortgageSub: "Mindest-Eigenkapital {pct} %",
    historyHeading: "Wie sich die Wohn-Erschwinglichkeit in {country} entwickelt hat",
    historyBodyTemplate:
      "Das Preis-Einkommens-Verhältnis erreichte {peakValue}× im Jahr {peakYear}. Heute: {todayValue}×. {shift} Der OECD-Durchschnitt im gleichen Zeitraum verlief von {oecdStart}× im Jahr {oecdYear} auf {oecdToday}× heute.",
    historyShiftTemplate:
      "Hätten Sie {startYear} das heutige Einkommen gehabt, hätten Sie sich {pct} % der heutigen Kaufkraft für das Median-Haus des Landes leisten können.",
    calculatorHeadingTemplate: "Wie bezahlbar ist {country} für Sie?",
    calculatorSubheadingTemplate:
      "Geben Sie Ihr Einkommen und Ihre Ersparnisse ein, um Ihren persönlichen maximal bezahlbaren Preis, die Jahre bis zum Eigenkapital und den Vergleich zum Median von {country} zu sehen.",
  },
  calculator: {
    heading: "Erzählen Sie uns von Ihren Finanzen",
    intro: "Jahreszahlen. Wir nutzen länderübliche Zinsen und Mindestanzahlungen, sofern Sie sie nicht ändern.",
    incomeLabel: "Jahreshaushaltseinkommen (nach Steuern)",
    incomeHelp: "Gesamtes Nettoeinkommen aller Personen im Haushalt.",
    savingsLabel: "Ersparnisse, die für die Anzahlung verfügbar sind",
    savingsHelp: "Nur liquide Ersparnisse. Keine Altersvorsorge.",
    debtLabel: "Bestehende monatliche Schuldverpflichtungen",
    debtHelp: "Studienkredite, Autokredite, Kreditkarten-Mindestzahlungen. Keine Miete.",
    mortgageYearsLabel: "Hypothekenlaufzeit (Jahre)",
    savingsRateLabel: "Sparquote (% des Einkommens pro Jahr)",
    savingsRateHelp: "Wie viel Ihres Einkommens Sie pro Jahr sparen können. Der OECD-Median liegt bei rund 7 %.",
    seeResults: "Prüfen, ob ich es mir leisten kann",
    recalculate: "Von vorn beginnen",
  },
  result: {
    heading: "Ihre Erschwinglichkeit auf einen Blick",
    maxPriceLabel: "Maximaler Hauspreis, den Sie sich leisten können",
    priceToIncomeLabel: "Median-Hauspreis im Land",
    priceToIncomeYears: "{ratio}× Ihres Jahreseinkommens",
    verdict: {
      affordable: "Bezahlbar: Median-Haus unter 4× Einkommen",
      stretch: "Knapp: Median-Haus 4-6× Einkommen",
      unaffordable: "Unbezahlbar: Median-Haus 6-10× Einkommen",
      out_of_reach: "Außer Reichweite: Median-Haus über 10× Einkommen",
    },
    downPaymentLabel: "Mindestanzahlung für den Median",
    yearsToDownPaymentLabel: "Jahre, um die Anzahlung anzusparen",
    yearsToDownPaymentTemplate: "{years} Jahre bei Ihrer aktuellen Sparquote",
    mortgageMonthlyLabel: "Monatliche Hypothek auf den Median",
    burdenLabel: "% des monatlichen Nettoeinkommens",
    compareHeading: "Wie es sich vergleicht",
    compareCountry: "Median-Haus in {country}",
    compareOECD: "OECD-Durchschnitt Preis-zu-Einkommen",
    compareHistoric: "Langfristiger historischer Durchschnitt (1990-2010)",
    narrativeHeading: "Was das bedeutet",
    narrativeBody: "Ihr maximal bezahlbarer Preis ist die Kreditobergrenze, die Ihnen die Bank zum durchschnittlichen Hypothekenzins des Landes mit dem Standardtest von 36 % Schulden zu Einkommen einräumt. Die Verdikt-Skala betrachtet den Median-Hauspreis des Landes als Vielfaches Ihres Einkommens, basierend auf der Demographia-Klassifikation. Zusammen zeigen beide, wie viel SIE leihen könnten und wie der Markt des Landes im Verhältnis zu Ihrem Einkommen steht. Wenn beide Zahlen nahe beieinander liegen, sitzen Sie am Rand des Medians und haben wenig Sicherheitsmarge.",
    burdenHeading: "Hypothekenbelastung gegenüber Kreditgeber-Schwellen",
    burdenIntro: "Die meisten Banken begrenzen die monatliche Hypothek auf 36 % des Bruttoeinkommens. Manche gehen bis 43 %. Unter 28 % ist komfortabel; über der Schwelle wird der Kredit abgelehnt oder nur mit Auflagen genehmigt.",
    burdenComfortable: "Komfortabel: deutlich unter der DTI-Grenze der Bank. Sie haben Spielraum für Reparaturen, Ersparnisse und Zinserhöhungen.",
    burdenManageable: "Tragbar: unter der 36-%-Grenze, aber wenig Spielraum für Notfälle.",
    burdenStretched: "Angespannt: über der Standardgrenze von 36 %. Einige Kreditgeber erlauben bis zu 43 %, aber jeder Prozentpunkt Zinserhöhung schnürt das Budget.",
    burdenOverLimit: "Über der Linie: die meisten Banken werden auf diesem Niveau nicht genehmigen. Sie bräuchten ein günstigeres Haus, mehr Eigenkapital oder eine längere Laufzeit.",
    burdenYouLabel: "Sie",
    historyHeading: "Wie sich die Erschwinglichkeit entwickelt hat",
    historyIntro: "Preis-Einkommens-Verhältnis in {country} von 1990 bis heute. Je weiter die Linie steigt, desto weniger Wohnen kauft das gleiche Einkommen.",
    historyAffordabilityShiftTemplate: "Hätten Sie {year} das gleiche Einkommen gehabt, hätten Sie sich {pct} der heutigen Kaufkraft für das Median-Haus des Landes leisten können.",
    crossHeading: "Was Ihr relatives Einkommen weltweit kauft",
    crossIntro: "Nehmen Sie Ihre Position in der Einkommensverteilung Ihres Landes und übertragen Sie sie auf andere Länder. Gleiches relatives Einkommen, andere Märkte.",
    crossColumnCountry: "Land",
    crossColumnAffordable: "Maximal bezahlbar",
    crossColumnRatio: "Median × Ihr Einkommen",
    crossColumnVerdict: "Verdikt",
    rentHeading: "Kaufen oder mieten",
    rentIntro: "Monatliche Hypothek auf das Median-Haus des Landes gegenüber der Median-Miete des Landes.",
    rentMonthlyLabel: "Mediane monatliche Miete",
    mortgageMonthlyOnMedianLabel: "Hypothek auf Median-Haus",
    rentBuyDiffMore: "Kaufen kostet etwa {amount} pro Monat mehr als mieten am Median, baut aber mit der Zeit Eigenkapital auf.",
    rentBuyDiffLess: "Kaufen kostet etwa {amount} pro Monat weniger als mieten am Median. Die Kauf-oder-Miete-Rechnung hängt auch von Haltedauer und Preisentwicklung ab.",
    takeawaysHeading: "Worauf zu achten ist",
    takeawaysIntro: "Praktische Lesarten Ihrer Momentaufnahme.",
  },
  chart: {
    historicalHeading: "Preis-zu-Einkommen seit 1990",
    historicalSubtitle: "{country} im Vergleich zum OECD-Durchschnitt",
    currentLabel: "Heute",
  },
  cta: {
    support: {
      heading: "Dieses Projekt unterstützen",
      body:
        "Kostenlos, offen, ohne Werbung, ohne Tracking. Wenn es geholfen hat, hilft eine kleine Spende, weiter offene Bildungstools zu bauen.",
      ctaLabel: "Auf Ko-fi unterstützen",
    },
    furtherReading: {
      heading: "Weiterlesen",
      body:
        "Bücher, die diesen Rechner geprägt haben. Käufe über Bookshop.org bringen einen Anteil an unabhängige Buchhandlungen.",
      ctaLabel: "Leseliste ansehen",
      disclosure: "Bookshop-Affiliate-Link.",
    },
    sister: {
      heading: "Schwesterprojekte",
      body: "Gleiches Design, andere Frage.",
      howpoorami: "Wie arm bin ich?",
      howgreenami: "Wie groß ist mein CO₂-Fußabdruck?",
    },
  },
  footer: {
    tagline: "Offene Daten, echte Zahlen, kein Tracking.",
    source: "Datenquellen",
    license: "Lizenz",
    madeBy: "Erstellt von Yohan Runhaar",
    about: "Über",
    faq: "FAQ",
    methodology: "Methodik",
    github: "GitHub",
    support: "Spendier mir einen Kaffee",
    buildDateTemplate: "Daten Stand {date}",
  },
  report: {
    title: "Persönlicher Bericht zur Wohn-Erschwinglichkeit",
    subtitle: "Echte Preise, echte Einkommen, echte Zinsen, an Ihre Zahl gebunden.",
    preparedFor: "Erstellt für: {country}, {date}",
    landingTitle: "Ihr persönlicher Bericht zur Wohn-Erschwinglichkeit",
    landingFreeBadge: "Kostenlos. Keine Anmeldung, keine Zahlung, keine E-Mail nötig",
    landingFeatureA: {
      title: "Ihr maximal bezahlbarer Preis",
      body:
        "Berechnet aus Ihrem Einkommen und Ihren Ersparnissen, dem Hypothekenzins des Landes und einer Standard-DTI-Obergrenze von 36 %. Plus dem Abstand zum Median des Landes.",
    },
    landingFeatureB: {
      title: "Länderkontext und Historie",
      body:
        "Wo Ihr Land auf der globalen Erschwinglichkeitsleiter steht und wie sich das Preis-Einkommens-Verhältnis über die Jahrzehnte entwickelt hat.",
    },
    landingFeatureC: {
      title: "Voll privat",
      body:
        "Das PDF wird in Ihrem Browser erstellt. Nichts wird an einen Server gesendet. Keine E-Mail, kein Konto, kein Tracking.",
    },
    landingPicker: {
      title: "Bericht erstellen",
      subtitle: "Wählen Sie ein Land, geben Sie Ihr Einkommen und Ihre Ersparnisse ein, den Rest erledigen wir.",
      countryLabel: "Land",
      incomeLabel: "Jahreshaushaltseinkommen (nach Steuern)",
      incomeHelp: "Gesamtes Nettoeinkommen aller Personen im Haushalt.",
      savingsLabel: "Ersparnisse, die für die Anzahlung verfügbar sind",
      savingsHelp: "Nur liquide Ersparnisse. Keine Altersvorsorge.",
      generateButton: "PDF erstellen",
      generatingButton: "Wird erstellt...",
    },
    pdfPageLabel: "Seite",
    pdfFooterAttribution: "howaffordable.org · Offene Daten · Kein Tracking",
    pdfCoverGeneratedLabel: "Erstellt",
    pdfYourPriceLabel: "Maximaler Hauspreis, den Sie sich leisten können",
    pdfMaxPriceLeadIn: "Ihre Kreditobergrenze",
    pdfCoverNarrative:
      "Ihr maximal bezahlbarer Preis ist die Kreditobergrenze, die Ihnen die Bank zum durchschnittlichen Hypothekenzins des Landes mit einem 36-%-DTI-Test einräumt. Die folgenden Seiten setzen diese Zahl in Bezug zum Median des Landes, zur historischen Entwicklung des Landes und zur Kauf-oder-Miete-Ökonomie.",
    pdfSection1Title: "Ihre Momentaufnahme",
    pdfSection1Body:
      "Maximaler bezahlbarer Preis, monatliche Hypothek auf das Median-Haus des Landes, Abstand von Ihrem Maximum zum Median des Landes und Jahre bis zu einer typischen Anzahlung bei Ihrer Sparquote.",
    pdfSection2Title: "Wo das Land steht",
    pdfSection2Body:
      "Median-Hauspreis des Landes, Median-Haushaltseinkommen, Hypothekenzins und Mindestanteil des Eigenkapitals.",
    pdfSection3Title: "Im Ländervergleich",
    pdfSection3Body:
      "Ihre relative Position in der Einkommensverteilung Ihres Landes, übertragen auf andere Märkte: gleiches Perzentil, andere Märkte.",
    pdfHistoricalTitle: "Wie sich die Erschwinglichkeit entwickelt hat",
    pdfHistoricalBody:
      "Preis-Einkommens-Verhältnis in Ihrem Land über den in den OECD- und BIS-Daten verfügbaren Zeitraum. Eine höhere Linie bedeutet einen härteren Markt für den Median-Haushalt.",
    pdfHistoricalInsightTemplate:
      "Das Preis-Einkommens-Verhältnis von {country} lag {firstYear} bei {firstValue}×. In {lastYear}: {lastValue}×. {direction} {magnitude}× über den Zeitraum.",
    pdfHistoricalNoData:
      "Für dieses Land liegt keine lange historische Reihe vor. Die obige Momentaufnahme gilt weiterhin.",
    pdfTakeawaysTitle: "Was das in der Praxis bedeutet",
    pdfTakeawaysIntro:
      "Persönliche Lesarten Ihrer Momentaufnahme, gegeben Belastung, Verhältnis und Länderregime.",
    pdfTakeawaysAffordable:
      "Das Median-Haus Ihres Landes ist klar in Reichweite: Die Preise liegen unter 4× des Median-Einkommens. Die verbleibenden Entscheidungen drehen sich darum, wo Sie kaufen und wie aggressiv Sie sich verschulden.",
    pdfTakeawaysStretch:
      "Das Median-Haus Ihres Landes ist knapp: Bei 4-6× Einkommen erfordert Kaufen typischerweise entweder ein starkes Eigenkapital, eine lange Hypothekenlaufzeit oder ein kleineres bzw. weiter außerhalb gelegenes Haus. Ein Bausparvertrag kann ergänzend helfen.",
    pdfTakeawaysUnaffordable:
      "Das Median-Haus Ihres Landes ist nach Demographia-Klassifikation unbezahlbar: 6-10× Einkommen. Kaufen erfordert oft familiäre Hilfe, Doppelverdiener oder erhebliche Abstriche bei Größe oder Lage.",
    pdfTakeawaysOutOfReach:
      "Über 10× Einkommen ist das Median-Haus des Landes ohne erhebliches externes Kapital faktisch unerreichbar. Beobachten Sie die lokalen Miet-Preis-Verhältnisse; mieten kann langfristig der bessere Schritt sein.",
    pdfTakeawaysBuyVsRent:
      "Unter etwa 15× der Jahresmiete schlägt Kaufen typischerweise das Mieten bei einer Haltedauer von 5+ Jahren. Über etwa 25× gewinnt Mieten klar. Die Kauf-oder-Miete-Rechnung hängt auch von Haltedauer und Preisentwicklung ab, nicht nur vom Verhältnis.",
    pdfMethodologyTitle: "Methodik",
    pdfMethodologyBody:
      "Median-Hauspreise und Preis-Einkommens-Verhältnisse aus der OECD Affordable Housing Database und der BIS Selected Property Price Series. Hypothekenzinsen aus ECB SDW (Eurozone), Federal Reserve H.15 (USA), Bank of England (UK) und nationalen Zentralbanken in anderen Fällen. Demographia-Bänder für die Erschwinglichkeitsklassifikation. Die Berechnung läuft vollständig im Browser; nichts wird an einen Server gesendet.",
    pdfTipTitle: "Gefällt Ihnen dieser Bericht?",
    pdfTipBody:
      "Er ist kostenlos und werbefrei. Wenn er nützlich ist, hilft mir ein kleiner Ko-fi-Beitrag, weiter offene Bildungswerkzeuge zu bauen.",
    pdfFilenameTemplate: "howaffordable-{country}-{date}.pdf",
  },
  common: {
    perYear: "pro Jahr",
    perMonth: "pro Monat",
    years: "Jahre",
    loading: "Wird geladen. .",
    errorTitle: "Etwas ist schiefgelaufen",
    errorBody: "Laden Sie die Seite neu. Wenn es weiter auftritt, öffnen Sie bitte ein Issue auf GitHub.",
  },
};

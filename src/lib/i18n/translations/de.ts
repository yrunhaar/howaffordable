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
    home: "Rechner",
    compare: "Länder vergleichen",
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
  common: {
    perYear: "pro Jahr",
    perMonth: "pro Monat",
    years: "Jahre",
    loading: "Wird geladen...",
    errorTitle: "Etwas ist schiefgelaufen",
    errorBody: "Laden Sie die Seite neu. Wenn es weiter auftritt, öffnen Sie bitte ein Issue auf GitHub.",
  },
};

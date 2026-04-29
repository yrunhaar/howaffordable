import type { Dictionary } from "../dictionary";

export const it: Dictionary = {
  meta: {
    siteTitle: "Posso permettermi una casa?",
    homeTitleTemplate: "Posso permettermi una casa? | howaffordable.org",
    homeDescription:
      "Uno strumento gratuito e aperto che parte dal tuo reddito e dai tuoi risparmi e ti dice che tipo di casa puoi permetterti nel tuo paese, come è cambiata l'accessibilità dal 1990 e dove al mondo i tuoi soldi rendono di più.",
    homeOgTitle: "Posso permettermi una casa?",
    homeOgDescription:
      "Prezzi reali, redditi reali, tassi di interesse reali. Vedi il tuo punteggio di accessibilità nel tuo paese e in altri 47. Senza login.",
  },
  nav: {
    home: "Calcolatore",
    compare: "Confronta paesi",
    methodology: "Metodologia",
    faq: "FAQ",
    about: "Informazioni",
    menu: "Menu",
    close: "Chiudi",
  },
  home: {
    headline: "Puoi permetterti una casa?",
    subheadline:
      "Reddito e risparmi in ingresso. In uscita: prezzo di una casa accessibile, anni per l'anticipo e confronto con il 1990.",
    chooseCountryLabel: "Dove vivi?",
  },
  calculator: {
    heading: "Raccontaci delle tue finanze",
    intro: "Cifre annuali. Usiamo i tassi di interesse e gli anticipi minimi tipici del paese a meno che tu non li modifichi.",
    incomeLabel: "Reddito annuale del nucleo (al netto delle tasse)",
    incomeHelp: "Reddito netto combinato di tutte le persone del nucleo.",
    savingsLabel: "Risparmi disponibili per l'anticipo",
    savingsHelp: "Solo risparmi liquidi. Non fondi pensione.",
    debtLabel: "Rate mensili di debiti esistenti",
    debtHelp: "Prestiti studenteschi, prestiti auto, minimi della carta di credito. Non l'affitto.",
    mortgageYearsLabel: "Durata del mutuo (anni)",
    savingsRateLabel: "Tasso di risparmio (% del reddito/anno)",
    savingsRateHelp: "Quanto del tuo reddito puoi destinare al risparmio ogni anno. La mediana OECD è circa il 7 %.",
    seeResults: "Vedi se posso permettermela",
    recalculate: "Ricomincia",
  },
  result: {
    heading: "La tua fotografia di accessibilità",
    maxPriceLabel: "Prezzo massimo che puoi permetterti",
    priceToIncomeLabel: "Costo mediano di una casa nel paese",
    priceToIncomeYears: "{ratio}× il tuo reddito annuo",
    verdict: {
      affordable: "Accessibile: casa mediana sotto 4× il reddito",
      stretch: "Al limite: casa mediana 4-6× il reddito",
      unaffordable: "Inaccessibile: casa mediana 6-10× il reddito",
      out_of_reach: "Fuori portata: casa mediana oltre 10× il reddito",
    },
    downPaymentLabel: "Anticipo minimo per la mediana",
    yearsToDownPaymentLabel: "Anni per mettere da parte l'anticipo",
    yearsToDownPaymentTemplate: "{years} anni al tuo tasso di risparmio attuale",
    mortgageMonthlyLabel: "Rata mensile del mutuo sulla mediana",
    burdenLabel: "% del reddito mensile netto",
    compareHeading: "Come si confronta",
    compareCountry: "Casa mediana in {country}",
    compareOECD: "Rapporto prezzo/reddito medio OECD",
    compareHistoric: "Media storica di lungo periodo (1990-2010)",
  },
  chart: {
    historicalHeading: "Prezzo/reddito dal 1990",
    historicalSubtitle: "{country} contro la media OECD",
    currentLabel: "Oggi",
  },
  cta: {
    support: {
      heading: "Sostieni questo progetto",
      body:
        "Gratuito, aperto, senza pubblicità, senza tracker. Se ti è stato utile, una piccola mancia mi permette di continuare a creare strumenti educativi aperti.",
      ctaLabel: "Lascia una mancia su Ko-fi",
    },
    furtherReading: {
      heading: "Per approfondire",
      body:
        "Libri che hanno ispirato questo calcolatore. Acquistare tramite Bookshop.org gira una parte alle librerie indipendenti locali.",
      ctaLabel: "Vedi la lista letture",
      disclosure: "Link di affiliazione Bookshop.",
    },
    sister: {
      heading: "Progetti gemelli",
      body: "Stesso design, altra domanda.",
      howpoorami: "Quanto sono povero?",
      howgreenami: "Quanto è grande la mia impronta di carbonio?",
    },
  },
  footer: {
    tagline: "Dati aperti, numeri reali, nessun tracciamento.",
    source: "Fonti dei dati",
    license: "Licenza",
    madeBy: "Realizzato da Yohan Runhaar",
  },
  common: {
    perYear: "all'anno",
    perMonth: "al mese",
    years: "anni",
    loading: "Caricamento...",
    errorTitle: "Qualcosa è andato storto",
    errorBody: "Ricarica la pagina. Se il problema persiste, apri una segnalazione su GitHub.",
  },
};

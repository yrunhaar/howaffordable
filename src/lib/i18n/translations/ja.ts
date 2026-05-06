import type { Dictionary } from "../dictionary";

export const ja: Dictionary = {
  meta: {
    siteTitle: "家を買えますか？",
    homeTitleTemplate: "家を買えますか？| howaffordable.org",
    homeDescription:
      "収入と貯蓄から、あなたの国でどんな家が買えるのか、1990年以降に住宅取得のしやすさがどう変わったのか、そして世界のどこであなたのお金が一番遠くまで届くのかを教える、無料でオープンなツールです。",
    homeOgTitle: "家を買えますか？",
    homeOgDescription:
      "本当の価格、本当の収入、本当の金利。あなたの国と他47カ国での住宅取得スコアを確認できます。ログイン不要。",
  },
  nav: {
    home: "どれくらい手頃？",
    compare: "国を比較",
    report: "Report",
    methodology: "方法論",
    faq: "FAQ",
    about: "概要",
    menu: "メニュー",
    close: "閉じる",
  },
  home: {
    headline: "あなたは家を買えますか？",
    subheadline:
      "収入と貯蓄を入れる。買える家の価格、頭金までの年数、1990年との比較が出ます。",
    chooseCountryLabel: "お住まいはどこですか？",
  },
  country: {
    headlineTemplate: "Can you afford a house in {country}?",
    verdictAffordable: "Affordable by historical standards",
    verdictStretch: "A stretch, above the historical norm",
    verdictUnaffordable: "Unaffordable by Demographia's classification",
    verdictOutOfReach: "Out of reach for the median household",
    bodyTemplate:
      "The country median home in {country} costs {price} and the median household earns {income}, a price-to-income ratio of {ratio}×. Ranked {rank} of {total} for housing cost relative to income.",
    statMedianHomeLabel: "Median home price",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Median household income",
    statMedianIncomeSub: "after tax",
    statMortgageLabel: "Avg mortgage rate",
    statMortgageSub: "min down {pct}%",
    historyHeading: "How {country}'s housing affordability evolved",
    historyBodyTemplate:
      "Price-to-income peaked at {peakValue}× in {peakYear}. Today: {todayValue}×. {shift} The OECD average over the same period went from {oecdStart}× in {oecdYear} to {oecdToday}× today.",
    historyShiftTemplate:
      "If you had today's income in {startYear}, you could have afforded {pct}% of today's purchasing power for the country median home.",
    calculatorHeadingTemplate: "How affordable is {country} for you?",
    calculatorSubheadingTemplate:
      "Enter your income and savings to see your personal max-affordable price, years to a down payment, and how that compares to {country}'s median.",
  },
  calculator: {
    heading: "あなたの家計について教えてください",
    intro: "年間の数字です。変更しない限り、各国の典型的な金利と最低頭金比率を使います。",
    incomeLabel: "世帯の年間所得（税引き後）",
    incomeHelp: "世帯全員の手取り収入の合計です。",
    savingsLabel: "頭金にあてられる貯蓄",
    savingsHelp: "流動性のある貯蓄のみ。年金資産は含めません。",
    debtLabel: "現在の月々の返済額",
    debtHelp: "学生ローン、自動車ローン、クレジットカードの最低支払い。家賃は含めません。",
    mortgageYearsLabel: "住宅ローンの期間（年）",
    savingsRateLabel: "貯蓄率（年収に対する％）",
    savingsRateHelp: "毎年、収入のうちどれだけ貯蓄に回せるか。OECDの中央値は約7％です。",
    seeResults: "買えるか確認する",
    recalculate: "やり直す",
  },
  result: {
    heading: "あなたの住宅取得スナップショット",
    maxPriceLabel: "あなたが買える上限価格",
    priceToIncomeLabel: "国の住宅価格の中央値",
    priceToIncomeYears: "あなたの年収の{ratio}倍",
    verdict: {
      affordable: "手が届く：中央値の住宅は年収の4倍未満",
      stretch: "ぎりぎり：中央値の住宅は年収の4〜6倍",
      unaffordable: "手が届かない：中央値の住宅は年収の6〜10倍",
      out_of_reach: "遠く及ばない：中央値の住宅は年収の10倍超",
    },
    downPaymentLabel: "中央値住宅の最低頭金",
    yearsToDownPaymentLabel: "頭金を貯めるのにかかる年数",
    yearsToDownPaymentTemplate: "現在の貯蓄率で{years}年",
    mortgageMonthlyLabel: "中央値住宅の月々の返済",
    burdenLabel: "月々の手取りに対する％",
    compareHeading: "他との比較",
    compareCountry: "{country}の中央値住宅",
    compareOECD: "OECD平均の価格対所得比",
    compareHistoric: "長期の歴史的平均（1990-2010）",
    narrativeHeading: "What this means",
    narrativeBody: "Your max-affordable price is the lender ceiling on your income at the country's average mortgage rate, with the standard 36% debt-to-income test. The verdict band looks at the country median home price as a multiple of your income, using Demographia's affordability classification. Together they tell you both how much YOU could borrow and how the country's market sits relative to your income. When the two numbers are close, you're at the edge of the median and have little safety margin.",
    burdenHeading: "Mortgage burden vs lender thresholds",
    burdenIntro: "Most banks cap monthly mortgage at 36% of gross income. Some go to 43%. Below 28% is comfortable; above the threshold the loan gets denied or only approved with caveats.",
    burdenComfortable: "Comfortable: well below the lender DTI cap, you have headroom for repairs, savings, and rate hikes.",
    burdenManageable: "Manageable: under the 36% cap, but limited margin for emergencies.",
    burdenStretched: "Stretched: past the standard 36% cap. Some lenders allow up to 43%, but every percentage point of rate increase squeezes the budget.",
    burdenOverLimit: "Over the line: most lenders will not approve at this level. You would need a lower-priced home, more down payment, or a longer term.",
    burdenYouLabel: "You",
    historyHeading: "How affordability evolved",
    historyIntro: "Price-to-income ratio in {country} from 1990 to today. The further the line climbs, the further the same income buys.",
    historyAffordabilityShiftTemplate: "If you had the same income in {year}, you could have afforded {pct} of today's purchasing power for the country median home.",
    crossHeading: "What your relative income buys around the world",
    crossIntro: "Take your position in your country's income distribution and apply it elsewhere. Same relative income, different markets.",
    crossColumnCountry: "Country",
    crossColumnAffordable: "Max affordable",
    crossColumnRatio: "Median × your income",
    crossColumnVerdict: "Verdict",
    rentHeading: "Buy vs rent",
    rentIntro: "Monthly mortgage on the country median home, vs the country median rent.",
    rentMonthlyLabel: "Median monthly rent",
    mortgageMonthlyOnMedianLabel: "Mortgage on median home",
    rentBuyDiffMore: "Buying costs about {amount} more per month than renting at the median, but builds equity over time.",
    rentBuyDiffLess: "Buying costs about {amount} less per month than renting at the median. The buy-vs-rent calculus also depends on hold period and price growth.",
    takeawaysHeading: "What to watch for",
    takeawaysIntro: "Practical reads from your snapshot.",
  },
  chart: {
    historicalHeading: "1990年以降の価格対所得比",
    historicalSubtitle: "{country}とOECD平均",
    currentLabel: "現在",
  },
  cta: {
    support: {
      heading: "このプロジェクトを応援する",
      body:
        "無料、オープン、広告なし、追跡なし。役に立ったなら、少額のチップでオープンな教育ツールを作り続けられます。",
      ctaLabel: "Ko-fiでチップを送る",
    },
    furtherReading: {
      heading: "さらに読む",
      body:
        "この計算ツールの土台になった本。Bookshop.org経由で買うと、地域の独立系書店に一部が回ります。",
      ctaLabel: "リーディングリストを見る",
      disclosure: "Bookshopのアフィリエイトリンクです。",
    },
    sister: {
      heading: "姉妹プロジェクト",
      body: "同じデザイン、違う問い。",
      howpoorami: "私はどれくらい貧しい？",
      howgreenami: "私のカーボンフットプリントはどれくらい？",
    },
  },
  footer: {
    tagline: "オープンデータ、実数値、追跡なし。",
    source: "データソース",
    license: "ライセンス",
    madeBy: "Yohan Runhaarが制作",
    about: "概要",
    faq: "よくある質問",
    methodology: "手法",
    github: "GitHub",
    support: "コーヒーをおごる",
    buildDateTemplate: "データ更新日 {date}",
  },
  report: {
    title: "Personal Housing Affordability Report",
    subtitle: "Real prices, real incomes, real interest rates — bound to your number.",
    preparedFor: "Prepared for: {country}, {date}",
    landingTitle: "Your Personal Housing Affordability Report",
    landingFreeBadge: "Free. No signup, no payment, no email required",
    landingFeatureA: {
      title: "Your max-affordable price",
      body:
        "Computed from your income and savings, the country's mortgage rate, and a standard 36% debt-to-income ceiling. Plus the gap to the country median.",
    },
    landingFeatureB: {
      title: "Country and historical context",
      body:
        "Where your country sits on the global affordability ladder, and how price-to-income evolved across decades.",
    },
    landingFeatureC: {
      title: "Fully private",
      body:
        "The PDF is built in your browser. Nothing is sent to a server. No email, no account, no tracking.",
    },
    landingPicker: {
      title: "Generate your report",
      subtitle: "Pick a country, enter your income and savings, and we'll do the rest.",
      countryLabel: "Country",
      incomeLabel: "Annual household income (after tax)",
      incomeHelp: "Combined take-home pay for everyone in the household.",
      savingsLabel: "Savings available for a down payment",
      savingsHelp: "Liquid savings only; not retirement funds.",
      generateButton: "Generate the PDF",
      generatingButton: "Generating...",
    },
    pdfPageLabel: "Page",
    pdfFooterAttribution: "howaffordable.org · Open data · No tracking",
    pdfCoverGeneratedLabel: "Generated",
    pdfYourPriceLabel: "Max home price you can afford",
    pdfMaxPriceLeadIn: "Your borrowing ceiling",
    pdfCoverNarrative:
      "Your max-affordable price is the lender ceiling on your income at the country's average mortgage rate, with a 36% DTI test. The pages that follow contextualize that number against the country median, the country's historical trajectory, and rent-vs-buy economics.",
    pdfSection1Title: "Your snapshot",
    pdfSection1Body:
      "Maximum affordable price, monthly mortgage on the country median home, the gap from your max to the country median, and years to a typical down payment at your savings rate.",
    pdfSection2Title: "Where the country sits",
    pdfSection2Body:
      "Country median home price, median household income, mortgage rate, and minimum down payment fraction.",
    pdfSection3Title: "Across countries",
    pdfSection3Body:
      "Your relative position in your country's income distribution applied to other markets — same percentile, different markets.",
    pdfHistoricalTitle: "How affordability evolved",
    pdfHistoricalBody:
      "Price-to-income ratio in your country across the period available in OECD/BIS data. Higher line means a tougher market for the median household.",
    pdfHistoricalInsightTemplate:
      "{country} price-to-income was {firstValue}× in {firstYear}. By {lastYear}: {lastValue}×. {direction} {magnitude}× over the period.",
    pdfHistoricalNoData:
      "No long-running historical series for this country. The snapshot above still applies.",
    pdfTakeawaysTitle: "What this means in practice",
    pdfTakeawaysIntro:
      "Personal reads of your snapshot, given the burden, ratio, and country regime.",
    pdfTakeawaysAffordable:
      "Your country's median home is well within reach: prices sit below 4× the median income. The remaining decisions are about where to buy and how aggressively to leverage.",
    pdfTakeawaysStretch:
      "Your country's median home is a stretch: at 4-6× income, buying typically requires either a strong down payment, a long mortgage term, or accepting a smaller / further-out home.",
    pdfTakeawaysUnaffordable:
      "Your country's median home is unaffordable by Demographia's classification: 6-10× income. Buying often requires family help, dual income, or accepting a meaningful downgrade in size or location.",
    pdfTakeawaysOutOfReach:
      "Above 10× income, owning the country median is effectively out of reach without significant outside capital. Watch local rent-to-price ratios; renting may be the better long-term move.",
    pdfTakeawaysBuyVsRent:
      "Below ~15× annual rent, buying typically beats renting on a 5+ year hold. Above ~25×, renting clearly wins. The buy-vs-rent calculus also depends on hold period and price growth, not just the ratio.",
    pdfMethodologyTitle: "Methodology",
    pdfMethodologyBody:
      "Median home prices and price-to-income from OECD Affordable Housing Database and BIS Selected Property Price Series. Mortgage rates from ECB SDW (eurozone), Federal Reserve H.15 (US), Bank of England (UK), and national central banks elsewhere. Demographia bands used for the affordability classification. Computation runs entirely client-side; nothing is sent to a server.",
    pdfTipTitle: "Like this report?",
    pdfTipBody:
      "It's free and ad-free. If it's useful, a small Ko-fi tip lets me keep building open educational tools.",
    pdfFilenameTemplate: "howaffordable-{country}-{date}.pdf",
  },
  common: {
    perYear: "年あたり",
    perMonth: "月あたり",
    years: "年",
    loading: "読み込み中. .",
    errorTitle: "問題が発生しました",
    errorBody: "ページを再読み込みしてください。それでも続く場合は、GitHubでissueを開いてください。",
  },
};

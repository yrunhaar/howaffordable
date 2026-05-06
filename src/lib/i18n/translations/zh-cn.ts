import type { Dictionary } from "../dictionary";

export const zhCn: Dictionary = {
  meta: {
    siteTitle: "我买得起房吗？",
    homeTitleTemplate: "我买得起房吗？| howaffordable.org",
    homeDescription:
      "一个免费、开源的工具。输入你的收入和储蓄，告诉你在你所在的国家能买什么样的房子，自1990年以来购房负担如何变化，以及世界上哪里你的钱最经花。",
    homeOgTitle: "我买得起房吗？",
    homeOgDescription:
      "真实的房价、真实的收入、真实的利率。查看你在自己国家以及另外47个国家的购房负担分数。无需登录。",
  },
  nav: {
    home: "可负担吗？",
    compare: "比较国家",
    report: "Report",
    methodology: "方法论",
    faq: "常见问题",
    about: "关于",
    menu: "菜单",
    close: "关闭",
  },
  home: {
    headline: "你买得起房吗？",
    subheadline:
      "输入收入和储蓄。输出你能负担的房价、攒够首付要多久，以及和1990年的对比。",
    chooseCountryLabel: "你住在哪里？",
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
    heading: "告诉我们你的财务情况",
    intro: "按年计。除非你自己调整，我们使用各国典型的利率和最低首付比例。",
    incomeLabel: "家庭年收入（税后）",
    incomeHelp: "家庭中所有人的实得收入合计。",
    savingsLabel: "可用于首付的储蓄",
    savingsHelp: "仅指流动储蓄，不含养老金。",
    debtLabel: "现有的每月还款义务",
    debtHelp: "学生贷款、车贷、信用卡最低还款。不含房租。",
    mortgageYearsLabel: "贷款年限（年）",
    savingsRateLabel: "储蓄率（占收入百分比/年）",
    savingsRateHelp: "你每年能把多少收入存下来。OECD中位数约为7%。",
    seeResults: "看看我能不能负担",
    recalculate: "重新开始",
  },
  result: {
    heading: "你的购房负担一览",
    maxPriceLabel: "你能负担的最高房价",
    priceToIncomeLabel: "本国房价中位数",
    priceToIncomeYears: "{ratio}倍你的年收入",
    verdict: {
      affordable: "可负担：中位数房价低于4倍收入",
      stretch: "勉强：中位数房价为4到6倍收入",
      unaffordable: "难以负担：中位数房价为6到10倍收入",
      out_of_reach: "遥不可及：中位数房价超过10倍收入",
    },
    downPaymentLabel: "中位数房价的最低首付",
    yearsToDownPaymentLabel: "攒够首付需要的年数",
    yearsToDownPaymentTemplate: "按你当前的储蓄率需要{years}年",
    mortgageMonthlyLabel: "中位数房价的每月还款",
    burdenLabel: "占每月净收入的百分比",
    compareHeading: "对比情况",
    compareCountry: "{country}的中位数房价",
    compareOECD: "OECD平均房价收入比",
    compareHistoric: "长期历史平均（1990-2010）",
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
    historicalHeading: "1990年以来的房价收入比",
    historicalSubtitle: "{country}对比OECD平均",
    currentLabel: "今天",
  },
  cta: {
    support: {
      heading: "支持这个项目",
      body:
        "免费、开源、无广告、无追踪。如果对你有帮助，一点小额打赏能让我继续做开放的教育工具。",
      ctaLabel: "在Ko-fi打赏",
    },
    furtherReading: {
      heading: "延伸阅读",
      body:
        "塑造这个计算器的几本书。通过Bookshop.org购买会把一部分收入分给本地独立书店。",
      ctaLabel: "查看书单",
      disclosure: "Bookshop联盟链接。",
    },
    sister: {
      heading: "姊妹项目",
      body: "相同的设计，不同的问题。",
      howpoorami: "我有多穷？",
      howgreenami: "我的碳足迹有多大？",
    },
  },
  footer: {
    tagline: "开放数据、真实数字、无追踪。",
    source: "数据来源",
    license: "许可协议",
    madeBy: "由Yohan Runhaar制作",
    about: "关于",
    faq: "常见问题",
    methodology: "方法说明",
    github: "GitHub",
    support: "请我喝杯咖啡",
    buildDateTemplate: "数据更新于 {date}",
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
    perYear: "每年",
    perMonth: "每月",
    years: "年",
    loading: "加载中. .",
    errorTitle: "出了点问题",
    errorBody: "请刷新页面。如果问题持续出现，请在GitHub上提交issue。",
  },
};

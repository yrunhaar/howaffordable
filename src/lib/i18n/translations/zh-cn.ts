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
    headlineTemplate: "你在{country}能买得起房吗？",
    verdictAffordable: "按历史标准来看可负担",
    verdictStretch: "勉强，高于历史常态",
    verdictUnaffordable: "按Demographia分类难以负担",
    verdictOutOfReach: "对中位数家庭遥不可及",
    bodyTemplate:
      "{country}的中位数房价为{price}，中位数家庭收入为{income}，房价收入比为{ratio}倍。在按住房成本与收入相对水平排名的{total}国中位列第{rank}。",
    statMedianHomeLabel: "中位数房价",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "中位数家庭收入",
    statMedianIncomeSub: "税后",
    statMortgageLabel: "平均房贷利率",
    statMortgageSub: "最低首付{pct}%",
    historyHeading: "{country}住房可负担性的演变",
    historyBodyTemplate:
      "房价收入比在{peakYear}年达到峰值{peakValue}倍。今天为{todayValue}倍。{shift} 同一时期OECD平均水平从{oecdYear}年的{oecdStart}倍变为今天的{oecdToday}倍。",
    historyShiftTemplate:
      "如果你在{startYear}年拥有今天的收入，相对于本国的中位数房价，你能买到今天购买力的{pct}%。",
    calculatorHeadingTemplate: "{country}对你来说有多可负担？",
    calculatorSubheadingTemplate:
      "输入收入和储蓄，查看你个人的最高可负担房价、攒够首付所需的年数，以及与{country}中位数的对比。",
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
    narrativeHeading: "这意味着什么",
    narrativeBody: "你的最高可负担房价，是按本国平均房贷利率，并按标准的36%还款收入比测试，银行愿意给你的贷款上限。判定区间则按Demographia的可负担性分类，把本国中位数房价表示为你年收入的倍数。两者合起来既反映你能借多少，也反映本国市场相对你收入处在何种位置。当两个数字相近时，你正好踩在中位数边缘，安全边际很小。",
    burdenHeading: "月供负担与银行阈值",
    burdenIntro: "多数银行把月供上限设在税前收入的36%。部分可放宽至43%。低于28%属于宽松；超过阈值，贷款会被拒绝或附加条件才能批准。",
    burdenComfortable: "宽松：远低于银行的DTI上限，留有足够余地应对维修、储蓄和利率上调。",
    burdenManageable: "可承受：在36%以内，但应对突发事件的余地有限。",
    burdenStretched: "吃紧：超过36%的标准上限。部分银行可放宽到43%，但利率每上调一个百分点都会压缩预算。",
    burdenOverLimit: "越线：在此水平多数银行不会批贷。你需要更便宜的房子、更多的首付，或更长的贷款年限。",
    burdenYouLabel: "你",
    historyHeading: "可负担性的演变",
    historyIntro: "{country}从1990年到今天的房价收入比。线越往上走，同样的收入买到的房子越少。",
    historyAffordabilityShiftTemplate: "如果你在{year}年拥有同样的收入，相对于本国的中位数房价，你能买到今天购买力的{pct}。",
    crossHeading: "你的相对收入在世界各地能买到什么",
    crossIntro: "把你在本国收入分布中的位置套到其他国家。同样的相对收入，不同的市场。",
    crossColumnCountry: "国家",
    crossColumnAffordable: "最高可负担",
    crossColumnRatio: "中位数 × 你的收入",
    crossColumnVerdict: "判定",
    rentHeading: "买房与租房",
    rentIntro: "本国中位数房子的月供与中位数月租的对比。",
    rentMonthlyLabel: "月租中位数",
    mortgageMonthlyOnMedianLabel: "中位数房子的月供",
    rentBuyDiffMore: "按中位数计算，买房比租房每月大约多花{amount}，但随着时间会积累资产。",
    rentBuyDiffLess: "按中位数计算，买房比租房每月大约少花{amount}。买与租的取舍还取决于持有期和房价涨幅。",
    takeawaysHeading: "需要留意的地方",
    takeawaysIntro: "从你的快照中得出的实用解读。",
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
    title: "个人住房可负担性报告",
    subtitle: "真实的房价、真实的收入、真实的利率，按你的数字定制。",
    preparedFor: "对象：{country}，{date}",
    landingTitle: "你的个人住房可负担性报告",
    landingFreeBadge: "免费。无需注册，无需付款，无需邮箱",
    landingFeatureA: {
      title: "你的最高可负担房价",
      body:
        "由你的收入和储蓄、本国房贷利率以及标准36%的还款收入比上限计算得出。还包含与本国中位数的差距。",
    },
    landingFeatureB: {
      title: "国家与历史背景",
      body:
        "你的国家在全球可负担性阶梯上的位置，以及房价收入比几十年来的演变。",
    },
    landingFeatureC: {
      title: "完全私密",
      body:
        "PDF在你的浏览器中生成。不会向任何服务器发送数据。没有邮箱、账户或追踪。",
    },
    landingPicker: {
      title: "生成你的报告",
      subtitle: "选择国家，输入收入和储蓄，剩下的交给我们。",
      countryLabel: "国家",
      incomeLabel: "家庭年收入（税后）",
      incomeHelp: "家庭中所有人的实得收入合计。",
      savingsLabel: "可用于首付的储蓄",
      savingsHelp: "仅指流动储蓄，不含养老金。",
      generateButton: "生成PDF",
      generatingButton: "生成中...",
    },
    pdfPageLabel: "页",
    pdfFooterAttribution: "howaffordable.org · 开放数据 · 无追踪",
    pdfCoverGeneratedLabel: "生成于",
    pdfYourPriceLabel: "你能负担的最高房价",
    pdfMaxPriceLeadIn: "你的借款上限",
    pdfCoverNarrative:
      "你的最高可负担房价，是按本国平均房贷利率、并按36%的DTI测试，银行愿意给你的贷款上限。后续页面将这一数字置于本国中位数、本国历史走势以及买与租的经济性之中加以解读。",
    pdfSection1Title: "你的快照",
    pdfSection1Body:
      "最高可负担房价、本国中位数房子的月供、你的上限与本国中位数之间的差距，以及按当前储蓄率攒够典型首付所需的年数。",
    pdfSection2Title: "国家所处的位置",
    pdfSection2Body:
      "本国中位数房价、中位数家庭收入、房贷利率以及最低首付比例。",
    pdfSection3Title: "跨国对比",
    pdfSection3Body:
      "把你在本国收入分布中的相对位置套到其他市场：相同分位，不同市场。",
    pdfHistoricalTitle: "可负担性的演变",
    pdfHistoricalBody:
      "在OECD和BIS数据可得的时间段内，你所在国家的房价收入比。线越高，对中位数家庭来说市场越艰难。",
    pdfHistoricalInsightTemplate:
      "{country}的房价收入比在{firstYear}年为{firstValue}倍。到{lastYear}年：{lastValue}倍。{direction} 期间{magnitude}倍。",
    pdfHistoricalNoData:
      "该国没有长期的历史数据序列。上方的快照仍然适用。",
    pdfTakeawaysTitle: "在实践中意味着什么",
    pdfTakeawaysIntro:
      "结合月供负担、比率以及所在国情况，对你快照的个人化解读。",
    pdfTakeawaysAffordable:
      "你所在国家的中位数房子完全在能力范围内：房价低于中位数收入的4倍。剩下的决定是在哪里买，以及加多大的杠杆。",
    pdfTakeawaysStretch:
      "你所在国家的中位数房子有些吃力：在4到6倍收入区间，买房通常需要较高的首付、较长的贷款年限，或接受更小或更偏远的房子。",
    pdfTakeawaysUnaffordable:
      "按Demographia分类，你所在国家的中位数房子难以负担：6到10倍收入。买房往往需要家庭支援、双收入，或在面积和地段上做出明显让步。",
    pdfTakeawaysOutOfReach:
      "超过10倍收入，没有可观的外部资金，在本国持有中位数房子实际上遥不可及。关注当地的租售比；长期来看，租房可能是更好的选择。",
    pdfTakeawaysBuyVsRent:
      "当年租金低于约15倍年租时，5年以上的持有期通常买房优于租房。超过约25倍时，租房明显占优。买与租的计算还取决于持有期和房价涨幅，不只是这个比值。",
    pdfMethodologyTitle: "方法论",
    pdfMethodologyBody:
      "中位数房价和房价收入比来自OECD Affordable Housing Database和BIS Selected Property Price Series。房贷利率来自ECB SDW（欧元区）、Federal Reserve H.15（美国）、Bank of England（英国）以及各国中央银行。可负担性分类采用Demographia区间。计算完全在客户端进行，不向任何服务器发送数据。",
    pdfTipTitle: "喜欢这份报告吗？",
    pdfTipBody:
      "免费且无广告。如果对你有帮助，可以在Ko-fi上小额支持，让我能继续构建开放的教育工具。",
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

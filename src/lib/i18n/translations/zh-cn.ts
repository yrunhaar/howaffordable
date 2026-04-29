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
  common: {
    perYear: "每年",
    perMonth: "每月",
    years: "年",
    loading: "加载中. .",
    errorTitle: "出了点问题",
    errorBody: "请刷新页面。如果问题持续出现，请在GitHub上提交issue。",
  },
};

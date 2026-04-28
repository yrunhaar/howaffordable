/**
 * Locale-aware formatters for prices, percentages, and counts.
 */

import type { LocaleCode } from "./i18n/locales";

const LOCALE_TO_BCP47: Readonly<Record<LocaleCode, string>> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  "zh-cn": "zh-CN",
  ja: "ja-JP",
  pt: "pt-PT",
  it: "it-IT",
};

function bcp47(locale: LocaleCode): string {
  return LOCALE_TO_BCP47[locale];
}

export function formatCurrency(value: number, currency: string, locale: LocaleCode = "en"): string {
  if (!Number.isFinite(value)) return "—";
  try {
    return new Intl.NumberFormat(bcp47(locale), {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return new Intl.NumberFormat(bcp47(locale), { maximumFractionDigits: 0 }).format(value);
  }
}

export function formatNumber(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), { maximumFractionDigits: 1 }).format(value);
}

export function formatInteger(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), { maximumFractionDigits: 0 }).format(value);
}

export function formatPercent(value: number, locale: LocaleCode = "en"): string {
  return new Intl.NumberFormat(bcp47(locale), {
    style: "percent",
    maximumFractionDigits: 0,
  }).format(value / 100);
}

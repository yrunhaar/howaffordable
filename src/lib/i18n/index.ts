import type { Dictionary } from "./dictionary";
import { DEFAULT_LOCALE, isLocaleCode, type LocaleCode } from "./locales";
import { en } from "./translations/en";
import { es } from "./translations/es";
import { de } from "./translations/de";
import { fr } from "./translations/fr";
import { zhCn } from "./translations/zh-cn";
import { ja } from "./translations/ja";
import { pt } from "./translations/pt";
import { it } from "./translations/it";

const DICTIONARIES: Readonly<Record<LocaleCode, Dictionary>> = {
  en, es, de, fr, "zh-cn": zhCn, ja, pt, it,
};

export function getDictionary(locale: string | LocaleCode): Dictionary {
  if (isLocaleCode(locale)) return DICTIONARIES[locale];
  return DICTIONARIES[DEFAULT_LOCALE];
}

export { interpolate } from "./dictionary";
export type { Dictionary } from "./dictionary";
export {
  DEFAULT_LOCALE, LOCALES, LOCALE_CODES, NON_DEFAULT_LOCALES, getLocale, isLocaleCode,
} from "./locales";
export type { LocaleCode, LocaleInfo } from "./locales";

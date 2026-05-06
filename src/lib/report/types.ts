/**
 * Public types for the howaffordable PDF report generator.
 */
import type { CountryCode } from "@/data/housing-data";
import type { LocaleCode } from "@/lib/i18n/locales";
import type { AffordabilityInputs, AffordabilityResult } from "@/lib/affordability";

export interface ReportInputs {
  readonly locale: LocaleCode;
  readonly countryCode: CountryCode;
  readonly inputs: AffordabilityInputs;
  readonly result: AffordabilityResult;
}

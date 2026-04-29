"use client";

import { useMemo, useState } from "react";
import { useDictionary, useLanguage } from "./LanguageProvider";
import {
  COUNTRIES,
  COUNTRY_CODES,
  type CountryCode,
  type CountryHousingData,
} from "@/data/housing-data";
import {
  computeAffordability,
  defaultInputs,
  type AffordabilityInputs,
  type AffordabilityResult,
} from "@/lib/affordability";
import AffordabilityResultView from "./AffordabilityResultView";

interface Props {
  readonly initialCountry: CountryCode;
}

export default function AffordabilityCalculator({ initialCountry }: Props) {
  const t = useDictionary();
  const [countryCode, setCountryCode] = useState<CountryCode>(initialCountry);
  const country: CountryHousingData = COUNTRIES[countryCode];
  const [inputs, setInputs] = useState<AffordabilityInputs>(() => defaultInputs(country));
  const [showResult, setShowResult] = useState(false);

  const result: AffordabilityResult = useMemo(() => computeAffordability(inputs, country), [inputs, country]);

  const onCountryChange = (code: string) => {
    if (code in COUNTRIES) {
      const next = code as CountryCode;
      setCountryCode(next);
      setInputs((prev) => ({ ...prev, annualIncome: COUNTRIES[next].medianHouseholdIncome }));
    }
  };

  if (showResult) {
    return (
      <AffordabilityResultView
        country={country}
        inputs={inputs}
        result={result}
        onRecalculate={() => setShowResult(false)}
      />
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 mt-10">
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h2 className="text-2xl mb-2">{t.calculator.heading}</h2>
        <p className="text-text-muted mb-6">{t.calculator.intro}</p>

        <CountrySelectMini value={countryCode} onChange={onCountryChange} label={t.home.chooseCountryLabel} />

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <NumberField
            label={`${t.calculator.incomeLabel} (${country.currency})`}
            help={t.calculator.incomeHelp}
            value={inputs.annualIncome}
            step={1000}
            onChange={(n) => setInputs({ ...inputs, annualIncome: n })}
          />
          <NumberField
            label={`${t.calculator.savingsLabel} (${country.currency})`}
            help={t.calculator.savingsHelp}
            value={inputs.savings}
            step={1000}
            onChange={(n) => setInputs({ ...inputs, savings: n })}
          />
          <NumberField
            label={`${t.calculator.debtLabel} (${country.currency}/${t.common.perMonth})`}
            help={t.calculator.debtHelp}
            value={inputs.monthlyDebt}
            step={50}
            onChange={(n) => setInputs({ ...inputs, monthlyDebt: n })}
          />
          <NumberField
            label={t.calculator.mortgageYearsLabel}
            value={inputs.mortgageYears}
            step={1}
            onChange={(n) => setInputs({ ...inputs, mortgageYears: Math.max(5, Math.min(50, n)) })}
          />
          <NumberField
            label={t.calculator.savingsRateLabel}
            help={t.calculator.savingsRateHelp}
            value={inputs.savingsRatePct}
            step={1}
            onChange={(n) => setInputs({ ...inputs, savingsRatePct: Math.max(0, Math.min(100, n)) })}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => setShowResult(true)}
            className="px-5 py-2 rounded-lg bg-accent-periwinkle text-white font-semibold"
          >
            {t.calculator.seeResults} →
          </button>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-text-muted">
        Anchor: {country.anchorCity} median {country.medianHomePrice.toLocaleString()} {country.currency} ·{" "}
        mortgage rate {country.mortgageRatePct.toFixed(2)}% · min down {Math.round(country.minDownPaymentFraction * 100)}%
      </div>
    </section>
  );
}

function CountrySelectMini({
  value,
  onChange,
  label,
}: {
  value: CountryCode;
  onChange: (code: string) => void;
  label: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-text-muted mb-1">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
      >
        {COUNTRY_CODES.sort((a, b) => COUNTRIES[a].name.localeCompare(COUNTRIES[b].name)).map((code) => (
          <option key={code} value={code}>
            {COUNTRIES[code].flag} {COUNTRIES[code].name}
          </option>
        ))}
      </select>
    </label>
  );
}

function NumberField({
  label,
  help,
  value,
  step,
  onChange,
}: {
  label: string;
  help?: string;
  value: number;
  step?: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-text-primary">{label}</span>
      {help && <span className="block text-xs text-text-muted mt-0.5">{help}</span>}
      <input
        type="number"
        inputMode="numeric"
        min={0}
        step={step ?? 1}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => {
          const n = Number(e.target.value);
          onChange(Number.isFinite(n) ? n : 0);
        }}
        className="mt-1 w-full px-3 py-2 rounded-lg border border-border-subtle bg-bg-card text-text-primary"
      />
    </label>
  );
}

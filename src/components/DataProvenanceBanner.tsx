"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { localePath } from "@/lib/i18n/urls";

export default function DataProvenanceBanner() {
  const { locale } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto mt-6 px-4 text-center text-xs text-text-muted">
      <span aria-hidden="true">📊 </span>
      Data: OECD Affordable Housing + BIS Property Prices + ECB + Federal Reserve.{" "}
      <Link href={localePath(locale, "/methodology")} className="underline hover:text-accent-periwinkle">
        See methodology
      </Link>
      .
    </div>
  );
}

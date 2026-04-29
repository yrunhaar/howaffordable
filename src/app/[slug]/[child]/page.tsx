import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocaleCode,
  NON_DEFAULT_LOCALES,
  type LocaleCode,
} from "@/lib/i18n";
import { buildHreflangAlternates, localePath } from "@/lib/i18n/urls";
import {
  getAllCountrySeo,
  resolveCountryCode,
  SITE_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
} from "@/lib/seo";
import { COUNTRIES } from "@/data/housing-data";
import CountryHome from "@/components/CountryHome";

interface ChildPageProps {
  readonly params: Promise<{ slug: string; child: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { slug: string; child: string }[] = [];
  for (const locale of NON_DEFAULT_LOCALES) {
    for (const c of getAllCountrySeo()) {
      params.push({ slug: locale, child: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ChildPageProps): Promise<Metadata> {
  const { slug, child } = await params;
  if (!isLocaleCode(slug) || slug === "en") return {};
  const code = resolveCountryCode(child);
  if (!code) return {};
  const country = COUNTRIES[code];
  const url = `${SITE_URL}${localePath(slug, `/${child}`)}`;
  const ratio = country.medianHomePrice / country.medianHouseholdIncome;
  const verdict =
    ratio < 4 ? "Affordable" : ratio < 6 ? "A stretch" : ratio < 10 ? "Unaffordable" : "Out of reach";

  const title = `Housing affordability in ${country.name}: ${verdict}, ${ratio.toFixed(1)}× income`;
  const description = `Median home in ${country.name} costs about ${country.medianHomePrice.toLocaleString()} ${country.currency} — ${ratio.toFixed(
    1,
  )}× the median household income. Mortgage rate ${country.mortgageRatePct.toFixed(2)}%.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(SITE_URL, `/${child}`),
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: SITE_NAME,
      locale: (slug as LocaleCode).replace("-", "_"),
      url,
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: `Housing affordability in ${country.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE],
    },
  };
}

export default async function LocaleCountryPage({ params }: ChildPageProps) {
  const { slug, child } = await params;
  if (!isLocaleCode(slug) || slug === "en") notFound();
  const code = resolveCountryCode(child);
  if (!code) notFound();

  const country = COUNTRIES[code];
  const url = `${SITE_URL}${localePath(slug, `/${child}`)}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${localePath(slug, "/")}` },
      { "@type": "ListItem", position: 2, name: country.name, item: url },
    ],
  };

  return (
    <>
      <CountryHome country={country} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

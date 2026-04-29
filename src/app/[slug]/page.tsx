import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocaleCode, NON_DEFAULT_LOCALES } from "@/lib/i18n";
import { buildHreflangAlternates, localePath } from "@/lib/i18n/urls";
import {
  getAllCountrySeo,
  resolveCountryCode,
  SITE_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
} from "@/lib/seo";
import { COUNTRIES } from "@/data/housing-data";
import HomeClient from "@/components/HomeClient";
import CountryHome from "@/components/CountryHome";

interface SlugPageProps {
  readonly params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const localeSet = new Set<string>(NON_DEFAULT_LOCALES);
  const countrySlugs = getAllCountrySeo()
    .filter((c) => !localeSet.has(c.slug))
    .map((c) => ({ slug: c.slug }));
  const localeSlugs = NON_DEFAULT_LOCALES.map((l) => ({ slug: l }));
  return [...countrySlugs, ...localeSlugs];
}

export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isLocaleCode(slug) && slug !== "en") {
    const url = `${SITE_URL}${localePath(slug, "/")}`;
    return {
      alternates: {
        canonical: url,
        languages: buildHreflangAlternates(SITE_URL, "/"),
      },
    };
  }

  const code = resolveCountryCode(slug);
  if (!code) return {};
  const country = COUNTRIES[code];
  const url = `${SITE_URL}/${slug}`;
  const ratio = country.medianHomePrice / country.medianHouseholdIncome;
  const verdict =
    ratio < 4 ? "Affordable" : ratio < 6 ? "A stretch" : ratio < 10 ? "Unaffordable" : "Out of reach";

  const title = `Can you afford a house in ${country.name}? — ${verdict}, ${ratio.toFixed(1)}× income · How Affordable?`;
  const description = `Median home in ${country.name} costs about ${country.medianHomePrice.toLocaleString()} ${country.currency} — ${ratio.toFixed(
    1,
  )}× the median household income. Mortgage rate ${country.mortgageRatePct.toFixed(
    2,
  )}%, minimum down payment ${Math.round(
    country.minDownPaymentFraction * 100,
  )}%. Calculate your personal affordability.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(SITE_URL, `/${slug}`),
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
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

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  if (isLocaleCode(slug) && slug !== "en") {
    return <HomeClient initialCountry="US" />;
  }

  const code = resolveCountryCode(slug);
  if (!code) notFound();

  const country = COUNTRIES[code];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: country.name, item: `${SITE_URL}/${slug}` },
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

import MethodologyContent from "@/components/MethodologyContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Methodology",
  description:
    "How we calculate housing affordability: lender DTI, country mortgage rates, OECD price-to-income, full source list.",
  alternates: { canonical: "https://howaffordable.org/methodology" },
};

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Country-level housing affordability data",
  description: "Median home price, median household income, mortgage rate, minimum down payment fraction, and rent for 47 countries.",
  url: "https://howaffordable.org/methodology",
  license: "https://creativecommons.org/licenses/by/4.0/",
  creator: { "@type": "Organization", name: "OECD, BIS, ECB, Federal Reserve, national central banks" },
  isAccessibleForFree: true,
  keywords: ["housing affordability","price-to-income ratio","mortgage rate by country","Demographia affordability","OECD housing"],
  citation: [
    { "@type": "CreativeWork", url: "https://www.oecd.org/housing/data/affordable-housing-database/", name: "OECD Affordable Housing Database" },
    { "@type": "CreativeWork", url: "https://www.bis.org/statistics/pp_selected.htm", name: "BIS Selected Property Price Series" },
    { "@type": "CreativeWork", url: "https://fred.stlouisfed.org/", name: "Federal Reserve FRED" }
  ],
};

export default function MethodologyPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Methodology", path: "/methodology" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <MethodologyContent />
    </>
  );
}

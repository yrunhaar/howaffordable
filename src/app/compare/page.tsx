import CompareContent from "@/components/CompareContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Compare housing affordability across countries",
  description: "Side-by-side comparison: median home price, median income, price-to-income ratio, mortgage rates. Real OECD/BIS data.",
  alternates: { canonical: "https://howaffordable.org/compare" },
};

export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Compare countries", path: "/compare" }]} />
      <CompareContent />
    </>
  );
}

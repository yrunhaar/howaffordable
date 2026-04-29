import DecadesContent from "@/components/DecadesContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Housing affordability since 1990: country by country",
  description: "Price-to-income ratios per decade for 8 major rich-country housing markets, plus the OECD average.",
  alternates: { canonical: "https://howaffordable.org/decades" },
};

export default function DecadesPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Decades", path: "/decades" }]} />
      <DecadesContent />
    </>
  );
}

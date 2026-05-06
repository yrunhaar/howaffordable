import CitiesContent from "@/components/CitiesContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "City-level housing affordability: city vs country price-to-income",
  description:
    "Major-metro affordability premiums against country medians. London, Paris, Sydney, Hong Kong, NYC and more. Demographia + OECD data.",
  alternates: { canonical: "https://howaffordable.org/cities" },
};

export default function CitiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[{ name: "Home", path: "/" }, { name: "Cities", path: "/cities" }]}
      />
      <CitiesContent />
    </>
  );
}

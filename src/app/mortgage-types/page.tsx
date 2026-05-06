import MortgageTypesContent from "@/components/MortgageTypesContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Mortgage types by country: fixed vs variable, lock-in vs reset",
  description:
    "How long do mortgages fix in your country? US 30-year vs UK 2-year vs AU variable. Rate-risk lock-in regime by country.",
  alternates: { canonical: "https://howaffordable.org/mortgage-types" },
};

export default function MortgageTypesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Mortgage types", path: "/mortgage-types" },
        ]}
      />
      <MortgageTypesContent />
    </>
  );
}

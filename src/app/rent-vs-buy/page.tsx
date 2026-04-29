import RentVsBuyContent from "@/components/RentVsBuyContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Rent vs buy by country: price-to-rent ratios",
  description: "Price-to-rent ratios for 24 countries, with mortgage-on-median-home vs median monthly rent.",
  alternates: { canonical: "https://howaffordable.org/rent-vs-buy" },
};

export default function RentVsBuyPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "Rent vs buy", path: "/rent-vs-buy" }]} />
      <RentVsBuyContent />
    </>
  );
}

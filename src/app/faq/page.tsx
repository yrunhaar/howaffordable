import FaqContent from "@/components/FaqContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about howaffordable.org: how the math works, country differences, what to trust.",
  alternates: { canonical: "https://howaffordable.org/faq" },
};

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
      <FaqContent />
    </>
  );
}

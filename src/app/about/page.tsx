import AboutContent from "@/components/AboutContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "About",
  description: "Why howaffordable.org exists: open data, real numbers, no tracking.",
  alternates: { canonical: "https://howaffordable.org/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <AboutContent />
    </>
  );
}

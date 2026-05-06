import ReportContent from "@/components/ReportContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = {
  title: "Housing affordability report (PDF)",
  description:
    "Free, private personal housing affordability report PDF. Max-affordable price, country median, monthly mortgage, cross-country snapshot.",
  alternates: { canonical: "https://howaffordable.org/report" },
};

export default function ReportPage() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Report", path: "/report" },
        ]}
      />
      <ReportContent />
    </>
  );
}

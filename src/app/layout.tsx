import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportRail from "@/components/SupportRail";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildHreflangAlternates } from "@/lib/i18n/urls";
import { SITE_URL, SITE_NAME, SITE_OG_IMAGE } from "@/lib/seo";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Can I afford a house? | canIaffordahouse.org",
    template: "%s | canIaffordahouse.org",
  },
  description:
    "A free, open tool that takes your income and savings and tells you what kind of home that buys, how affordability changed since 1990, and where in the world your money goes furthest.",
  keywords: [
    "housing affordability calculator",
    "can I afford a house",
    "price to income ratio",
    "house price by country",
    "mortgage affordability",
    "down payment calculator",
    "housing crisis",
    "OECD housing data",
    "median home price",
    "housing affordability international comparison",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: buildHreflangAlternates(SITE_URL, "/"),
  },
  openGraph: {
    type: "website",
    title: "Can I afford a house?",
    description:
      "Real prices, real incomes, real interest rates. See your affordability score in your country and across 47 others.",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: "canIaffordahouse.org" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can I afford a house?",
    description: "Real prices, real incomes, real interest rates. See where your money goes furthest.",
    images: [SITE_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: SITE_NAME,
              description:
                "Free housing affordability calculator. See if you can afford a house in your country and how that compares globally.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <SupportRail />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

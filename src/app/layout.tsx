import type { Metadata } from "next";
import { Playfair_Display, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupportRail from "@/components/SupportRail";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildHreflangAlternates } from "@/lib/i18n/urls";
import { SITE_URL } from "@/lib/seo";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howaffordable.org"),
  title: {
    default: "How Affordable? — Housing Affordability Calculator",
    template: "%s | How Affordable?",
  },
  description:
    "Can you afford a house? Income and savings in — affordable home price, years to a down payment, and how that compares since 1990 — out. Open OECD/BIS data for 47 countries, 8 languages, no tracking.",
  keywords: [
    "how affordable",
    "housing affordability calculator",
    "can I afford a house",
    "price to income ratio",
    "house price by country",
    "mortgage affordability",
    "down payment calculator",
    "housing crisis",
    "OECD housing data",
    "BIS property prices",
    "median home price",
    "median household income",
    "international housing comparison",
    "years to down payment",
    "Demographia affordability",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: buildHreflangAlternates(SITE_URL, "/"),
  },
  openGraph: {
    type: "website",
    title: "How Affordable? — Housing Affordability Calculator",
    description:
      "Real prices, real incomes, real interest rates. See your affordability score in your country and across 47 others.",
    siteName: "How Affordable?",
    locale: "en_US",
    url: "https://howaffordable.org",
    images: [
      {
        url: "https://howaffordable.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Affordable? — Housing affordability across countries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Affordable? — Housing Affordability Calculator",
    description:
      "Real prices, real incomes, real interest rates. See where your money goes furthest.",
    images: ["https://howaffordable.org/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Inline boot script — set theme before React hydration to prevent flash.
 * Resolution order:
 *   1. user's stored preference (localStorage 'theme'),
 *   2. system preference if explicitly dark (prefers-color-scheme: dark),
 *   3. default to light.
 */
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${firaCode.variable} h-full antialiased`}
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
              name: "How Affordable?",
              description:
                "Interactive housing affordability calculator with real OECD and BIS data across 47 countries.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            {children}
            <SupportRail />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

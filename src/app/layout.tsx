import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import DisclaimerModal from "@/components/DisclaimerModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iprani.in"),
  title: {
    default: "IP Rani | IP & Legal Solutions for Businesses",
    template: "%s | IP Rani",
  },
  description:
    "End-to-end IP & Legal solutions for start-ups, enterprises and growing businesses.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "IP Rani | IP & Legal Solutions for Businesses",
    description: "End-to-end IP & Legal solutions for start-ups, enterprises and growing businesses.",
    url: "https://iprani.in",
    siteName: "IP Rani",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-dark.webp",
        width: 1200,
        height: 630,
        alt: "IP Rani logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IP Rani | IP & Legal Solutions for Businesses",
    description: "End-to-end IP & Legal solutions for start-ups, enterprises and growing businesses.",
    images: ["/logo-dark.webp"],
  },
};

export const viewport = {
  themeColor: "#0d2b52",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-700">
        {/* Skip to Main Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Global structured schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "IP Rani",
              "alternateName": "IPRani",
              "url": "https://iprani.in",
              "logo": "https://iprani.in/logo.webp",
              "sameAs": [
                "https://wa.me/919911655010"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-99116-55010",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi"]
              },
              "description": "End-to-end IP & Legal solutions for start-ups, enterprises and growing businesses in India."
            })
          }}
        />

        <Header />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsappFloat />
        <DisclaimerModal />
      </body>
    </html>
  );
}

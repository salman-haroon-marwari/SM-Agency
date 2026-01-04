import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SM Agency - Digital & AI-Powered Service Agency",
  description: "Professional digital & AI-powered services for businesses. Complete web development, SEO, AI solutions, and digital marketing services.",
  keywords: "digital agency, AI services, web development, SEO, digital marketing, AI automation",
  authors: [{ name: "SM Agency" }],
  creator: "SM Agency",
  publisher: "SM Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SM Agency - Digital & AI-Powered Service Agency",
    description: "Professional digital & AI-powered services for businesses. Complete web development, SEO, AI solutions, and digital marketing services.",
    url: "https://sm-agency.vercel.app",
    siteName: "SM Agency",
    images: [
      {
        url: "/og-image.jpg", // TODO: Add actual og image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Agency - Digital & AI-Powered Service Agency",
    description: "Professional digital & AI-powered services for businesses. Complete web development, SEO, AI solutions, and digital marketing services.",
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
  verification: {
    google: "google-site-verification-code", // TODO: Add actual verification code
    yandex: "yandex-verification-code", // TODO: Add actual verification code
    yahoo: "yahoo-verification-code", // TODO: Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="ceaf0c4a16f7ce3829918f37fb304fe0" />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SM Agency",
              "description": "Digital & AI-powered service agency providing web development, SEO, and digital marketing services",
              "url": "https://sm-agency.vercel.app",
              "logo": "https://sm-agency.vercel.app/logo.png",
              "image": "https://sm-agency.vercel.app/logo.png",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Sarah Johnson"
              },
              "areaServed": ["US", "GB", "CA", "EU", "AU"],
              "serviceType": ["Web Development", "SEO", "AI Solutions", "Digital Marketing"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.linkedin.com/company/sm-agency",
                "https://twitter.com/sm-agency",
                "https://www.facebook.com/sm-agency"
              ]
            })
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SM Agency",
              "description": "Professional digital & AI-powered services for businesses",
              "url": "https://sm-agency.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://sm-agency.vercel.app/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

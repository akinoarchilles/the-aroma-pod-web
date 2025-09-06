import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "The Aroma Pod - Premium Indonesian Vanilla Planifolia Grade A",
    template: "%s | The Aroma Pod",
  },
  description:
    "Experience the finest Indonesian vanilla planifolia grade A beans. Premium quality vanilla from sustainable family plantations with rich, complex flavors and natural smokiness.",
  keywords: [
    "Indonesian vanilla",
    "vanilla planifolia",
    "Grade A vanilla",
    "premium vanilla beans",
    "West Papua vanilla",
    "Java vanilla",
    "Flores vanilla",
    "vanilla export",
    "sustainable vanilla",
    "vanilla supplier",
  ],
  authors: [{ name: "The Aroma Pod" }],
  creator: "The Aroma Pod",
  publisher: "The Aroma Pod",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aromapod.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aromapod.vercel.app",
    title: "The Aroma Pod - Premium Indonesian Vanilla Planifolia Grade A",
    description:
      "Experience the finest Indonesian vanilla planifolia grade A beans. Premium quality vanilla from sustainable family plantations with rich, complex flavors and natural smokiness.",
    siteName: "The Aroma Pod",
    images: [
      {
        url: "/images/aroma-pod-logo.png",
        width: 1200,
        height: 630,
        alt: "The Aroma Pod - Premium Indonesian Vanilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aroma Pod - Premium Indonesian Vanilla Planifolia Grade A",
    description:
      "Experience the finest Indonesian vanilla planifolia grade A beans. Premium quality vanilla from sustainable family plantations.",
    images: ["/images/aroma-pod-logo.png"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/aroma-pod-logo.png" />
        <link rel="apple-touch-icon" href="/images/aroma-pod-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Aroma Pod",
              description: "Premium Indonesian vanilla planifolia Grade A supplier",
              url: "https://aromapod.vercel.app",
              logo: "https://aromapod.vercel.app/images/aroma-pod-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-877-6212-8553",
                contactType: "customer service",
                availableLanguage: ["English", "Indonesian"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ScrollToTop />
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

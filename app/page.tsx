import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Aroma Pod - Premium Indonesian Vanilla Planifolia Grade A",
  description:
    "Experience the finest Indonesian vanilla planifolia grade A beans. Premium quality vanilla from sustainable family plantations with rich, complex flavors and natural smokiness.",
  alternates: {
    canonical: "/",
  },
}

export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  )
}

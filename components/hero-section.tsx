import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-stone-900/90 to-stone-800/80 py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/premium-vanilla-beans-pods-on-wooden-surface-natur.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 to-stone-800/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-6 text-white leading-tight drop-shadow-lg">
              Premium Indonesian
              <span className="text-amber-300 block">Vanilla Planifolia</span>
            </h1>
            <p className="text-xl text-stone-50 text-pretty mb-8 leading-relaxed drop-shadow-md">
              Grade A vanilla beans from Indonesia's finest growing regions. Hand-selected, sustainably sourced, and
              traditionally cured for exceptional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-amber-600 hover:bg-amber-700 text-white drop-shadow-md"
                >
                  View Products
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-white/40 text-white hover:bg-white/15 bg-transparent drop-shadow-md"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/indonesian-vanilla-plantation-tropical-farm-worker-hero.jpg"
              alt="Indonesian vanilla plantation with workers"
              className="rounded-lg shadow-2xl w-full border-4 border-white/30 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

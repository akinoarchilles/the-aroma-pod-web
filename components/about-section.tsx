import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/indonesian-vanilla-plantation-tropical-farm-worker.jpg"
              alt="Indonesian vanilla plantation"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance text-stone-900">
              Excellence in Every Bean
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              The Aroma Pod partners directly with family plantations across Indonesia's most prestigious
              vanilla-growing regions. Our commitment to quality and sustainability ensures every bean meets the highest
              standards.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              From the volcanic soils of Java to the tropical climate of West Papua, we source only Grade A planifolia
              beans, cured using traditional methods passed down through generations.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="border-stone-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-2">100%</div>
                  <div className="text-sm text-stone-600">Sustainable Sourcing</div>
                </CardContent>
              </Card>
              <Card className="border-stone-200">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-2">Grade A</div>
                  <div className="text-sm text-stone-600">Premium Quality</div>
                </CardContent>
              </Card>
            </div>
            <Link href="/about">
              <Button variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Premium Indonesian Vanilla Supplier",
  description:
    "Learn about The Aroma Pod's mission to bring premium Grade A vanilla planifolia from Indonesian family plantations. Sustainable sourcing, traditional methods, exceptional quality.",
  keywords: [
    "about The Aroma Pod",
    "Indonesian vanilla supplier",
    "sustainable vanilla sourcing",
    "family plantations",
    "traditional vanilla curing",
    "West Papua vanilla",
    "Java vanilla",
    "Flores vanilla",
    "vanilla company story",
  ],
  openGraph: {
    title: "About The Aroma Pod - Premium Indonesian Vanilla Supplier",
    description:
      "Learn about our mission to bring premium Grade A vanilla planifolia from Indonesian family plantations through sustainable sourcing and traditional methods.",
    url: "https://aromapod.vercel.app/about",
    images: [
      {
        url: "/traditional-vanilla-curing-process-indonesia-wooden.jpg",
        width: 1200,
        height: 630,
        alt: "Traditional vanilla curing process in Indonesia",
      },
    ],
  },
  twitter: {
    title: "About The Aroma Pod - Premium Indonesian Vanilla Supplier",
    description:
      "Learn about our mission to bring premium Grade A vanilla planifolia from Indonesian family plantations through sustainable sourcing.",
    images: ["/traditional-vanilla-curing-process-indonesia-wooden.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
}

export const revalidate = 3600 // Revalidate every hour

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-amber-700" />,
      title: "Sustainability",
      description:
        "We work directly with family plantations, ensuring fair trade practices and environmental responsibility in every step of our supply chain.",
    },
    {
      icon: <Heart className="w-8 h-8 text-amber-700" />,
      title: "Quality",
      description:
        "Each vanilla bean is meticulously hand-selected and cured using traditional methods passed down through generations of Indonesian farmers.",
    },
    {
      icon: <Award className="w-8 h-8 text-amber-700" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in sourcing, processing, and packaging to deliver Grade A vanilla planifolia that exceeds expectations.",
    },
    {
      icon: <Users className="w-8 h-8 text-amber-700" />,
      title: "Partnership",
      description:
        "Our success is built on long-term relationships with Indonesian farming families, creating mutual prosperity and preserving traditional knowledge.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Organization",
              name: "The Aroma Pod",
              description:
                "Premium Indonesian vanilla planifolia Grade A supplier specializing in sustainable sourcing from family plantations",
              foundingLocation: {
                "@type": "Country",
                name: "Indonesia",
              },
              knowsAbout: [
                "Vanilla planifolia cultivation",
                "Traditional vanilla curing methods",
                "Sustainable agriculture",
                "Indonesian vanilla export",
              ],
              areaServed: "Worldwide",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -2.5489,
                  longitude: 118.0149,
                },
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aromapod.vercel.app",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://aromapod.vercel.app/about",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-amber-900/90 to-stone-800/80 py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/traditional-vanilla-curing-process-indonesia-wooden.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/85 to-stone-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">Our Story</h1>
            <p className="text-xl text-stone-50 leading-relaxed drop-shadow-md">
              The Aroma Pod was founded with a simple mission: to bring the world's finest Indonesian vanilla directly
              from family plantations to your kitchen, preserving traditional methods while ensuring sustainable
              practices for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-stone-900 text-balance">
                Preserving Tradition, Ensuring Quality
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Indonesia has been cultivating vanilla for over a century, developing unique curing techniques that
                create the distinctive smoky, complex flavors that make Indonesian vanilla planifolia so sought after by
                chefs and food manufacturers worldwide.
              </p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                We work exclusively with family-owned plantations across Java Island, West Papua, and Flores Island,
                where the volcanic soil and tropical climate create perfect growing conditions. Our partnerships ensure
                fair compensation for farmers while maintaining the traditional hand-pollination and curing methods that
                have been perfected over generations.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Every bean that carries The Aroma Pod name has been carefully selected for its moisture content,
                flexibility, and aromatic intensity, ensuring you receive only Grade A vanilla planifolia that meets
                international quality standards.
              </p>
            </div>
            <div className="relative">
              <img
                src="/traditional-vanilla-curing-process-indonesia-wooden.jpg"
                alt="Traditional vanilla curing process in Indonesia"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-stone-900 text-balance">Our Values</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Everything we do is guided by our commitment to quality, sustainability, and the preservation of
              traditional Indonesian vanilla cultivation methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full border-stone-200 bg-white">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-stone-900">{value.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-stone-900 text-balance">Our Growing Regions</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              We source from three distinct Indonesian regions, each offering unique terroir and flavor characteristics
              that make our vanilla planifolia exceptional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-stone-900">West Papua</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  The pristine tropical environment of West Papua produces vanilla beans with rich, bold flavors
                  featuring notes of dark chocolate and caramel. The region's high humidity and consistent temperatures
                  create ideal curing conditions.
                </p>
                <div className="text-sm text-stone-500">
                  <p>
                    <strong>Climate:</strong> Tropical rainforest
                  </p>
                  <p>
                    <strong>Soil:</strong> Rich volcanic
                  </p>
                  <p>
                    <strong>Harvest:</strong> June - August
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Java Island</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Java's volcanic soil and monsoon climate produce vanilla with warm, spicy characteristics and hints of
                  smoke and black licorice. The island's long tradition of vanilla cultivation ensures expert handling
                  and curing.
                </p>
                <div className="text-sm text-stone-500">
                  <p>
                    <strong>Climate:</strong> Tropical monsoon
                  </p>
                  <p>
                    <strong>Soil:</strong> Fertile volcanic
                  </p>
                  <p>
                    <strong>Harvest:</strong> July - September
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Flores Island</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Flores Island's unique microclimate produces sweet, creamy vanilla with complex notes of caramel,
                  wood, and dried fruits. The island's traditional curing methods create beans with exceptional depth
                  and aroma.
                </p>
                <div className="text-sm text-stone-500">
                  <p>
                    <strong>Climate:</strong> Tropical savanna
                  </p>
                  <p>
                    <strong>Soil:</strong> Mineral-rich volcanic
                  </p>
                  <p>
                    <strong>Harvest:</strong> May - July
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

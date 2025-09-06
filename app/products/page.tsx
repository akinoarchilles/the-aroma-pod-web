import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Vanilla Products - Indonesian Planifolia Grade A",
  description:
    "Discover our premium Grade A vanilla planifolia from West Papua, Java Island, and Flores Island. Each region offers unique flavor profiles with rich, complex characteristics.",
  keywords: [
    "vanilla planifolia products",
    "West Papua vanilla beans",
    "Java Island vanilla",
    "Flores Island vanilla",
    "Grade A vanilla beans",
    "Indonesian vanilla export",
    "premium vanilla supplier",
    "vanilla bean specifications",
    "vanilla flavor profiles",
  ],
  openGraph: {
    title: "Premium Vanilla Products - Indonesian Planifolia Grade A",
    description:
      "Discover our premium Grade A vanilla planifolia from three distinct Indonesian regions, each offering unique flavor profiles and aromatic characteristics.",
    url: "https://aromapod.vercel.app/products",
    images: [
      {
        url: "/west-papua-vanilla-beans-dark-chocolate-notes.jpg",
        width: 1200,
        height: 630,
        alt: "Premium West Papua vanilla beans with dark chocolate notes",
      },
    ],
  },
  twitter: {
    title: "Premium Vanilla Products - Indonesian Planifolia Grade A",
    description:
      "Discover our premium Grade A vanilla planifolia from three distinct Indonesian regions with unique flavor profiles.",
    images: ["/west-papua-vanilla-beans-dark-chocolate-notes.jpg"],
  },
  alternates: {
    canonical: "/products",
  },
}

export const revalidate = 1800 // Revalidate every 30 minutes

export default function ProductsPage() {
  const products = [
    {
      id: "west-papua",
      name: "West Papua Vanilla",
      region: "West Papua, Indonesia",
      characteristics: "Dark chocolate and caramel notes",
      description:
        "Our West Papua vanilla beans offer a bold and rich flavor profile with distinctive hints of dark chocolate and caramel. These long, slender, dark brown beans are slightly oily and flexible, indicating optimal moisture content and superior quality.",
      specifications: {
        moisture: "30-35%",
        length: "6-7 inches (15-18cm)",
        appearance: "Dark brown, oily, flexible",
        aroma: "Rich, bold, chocolatey",
      },
      image: "/west-papua-vanilla-beans-dark-chocolate-notes.jpg",
      flavorProfile: [
        "Dark chocolate undertones",
        "Rich caramel sweetness",
        "Bold, intense aroma",
        "Smooth, creamy finish",
      ],
    },
    {
      id: "java",
      name: "Java Island Vanilla",
      region: "Java Island, Indonesia",
      characteristics: "Warm, spicy with smoke and black licorice",
      description:
        "Java Island vanilla beans are renowned for their warm, spicy character with unique notes of smoke, mace, and black licorice. These beans produce a warm, spicy, fruity extract with highly fragrant, sweet, floral aromas that enhance both sweet and savory applications.",
      specifications: {
        moisture: "27-32%",
        length: "5-6 inches (13-15cm)",
        appearance: "Long, thin, dark brown",
        aroma: "Spicy, floral, sweet",
      },
      image: "/java-vanilla-beans-spicy-smoky-flavor-profile.jpg",
      flavorProfile: ["Warm spice notes", "Subtle smokiness", "Black licorice hints", "Floral sweetness"],
    },
    {
      id: "flores",
      name: "Flores Island Vanilla",
      region: "Flores Island, Indonesia",
      characteristics: "Sweet, creamy with caramel and wood notes",
      description:
        "Flores Island vanilla beans are prized for their sweet, creamy profile with complex hints of caramel, wood, prunes, and figs. These dark brown, plump, and oily beans create a warm, bold, spicy, fruity extract perfect for gourmet applications.",
      specifications: {
        moisture: "28-33%",
        length: "5-7 inches (13-18cm)",
        appearance: "Dark brown, plump, oily",
        aroma: "Sweet, creamy, fruity",
      },
      image: "/flores-vanilla-beans-sweet-creamy-caramel-notes.jpg",
      flavorProfile: ["Sweet caramel notes", "Woody undertones", "Dried fruit complexity", "Creamy texture"],
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
            "@type": "CollectionPage",
            name: "Premium Vanilla Products",
            description: "Grade A vanilla planifolia from three distinct Indonesian regions",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                description: product.description,
                category: "Vanilla Beans",
                brand: {
                  "@type": "Brand",
                  name: "The Aroma Pod",
                },
                offers: {
                  "@type": "AggregateOffer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "USD",
                },
                additionalProperty: [
                  {
                    "@type": "PropertyValue",
                    name: "Grade",
                    value: "A",
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Origin",
                    value: product.region,
                  },
                  {
                    "@type": "PropertyValue",
                    name: "Moisture Content",
                    value: product.specifications.moisture,
                  },
                ],
              })),
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
                  name: "Products",
                  item: "https://aromapod.vercel.app/products",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-stone-900/90 to-amber-800/80 py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/west-papua-vanilla-beans-dark-chocolate-notes.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 to-amber-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">
              Premium Vanilla Planifolia
            </h1>
            <p className="text-xl text-stone-50 leading-relaxed mb-8 drop-shadow-md">
              Discover our Grade A vanilla planifolia beans from three distinct Indonesian regions, each offering unique
              flavor profiles and aromatic characteristics developed through traditional cultivation and curing methods.
            </p>
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 bg-amber-200/95 text-amber-900 border-amber-300 drop-shadow-sm"
            >
              Grade A Quality • Sustainably Sourced • Hand-Selected
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
              id={product.id}
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2 border-amber-200 text-amber-700">
                      {product.region}
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-2">{product.name}</h2>
                    <p className="text-xl text-amber-700 font-medium">{product.characteristics}</p>
                  </div>

                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-stone-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-stone-900">Specifications</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-600">Moisture Content:</span>
                          <span className="font-medium text-stone-900">{product.specifications.moisture}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-600">Bean Length:</span>
                          <span className="font-medium text-stone-900">{product.specifications.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-600">Appearance:</span>
                          <span className="font-medium text-stone-900">{product.specifications.appearance}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-600">Aroma:</span>
                          <span className="font-medium text-stone-900">{product.specifications.aroma}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-stone-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-stone-900">Flavor Profile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {product.flavorProfile.map((flavor, flavorIndex) => (
                            <li key={flavorIndex} className="text-sm text-stone-600 flex items-center">
                              <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                              {flavor}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-stone-800 hover:bg-stone-900">Inquire About This Product</Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Premium Grade A vanilla beans from ${product.region}`}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 text-balance">Quality You Can Trust</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Every vanilla bean undergoes rigorous quality control to ensure it meets our Grade A standards. Our
              traditional curing process, combined with modern quality assurance, guarantees consistent excellence in
              every shipment.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-2">Hand-Selected</div>
                  <div className="text-sm text-stone-600">Every bean individually inspected</div>
                </CardContent>
              </Card>
              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-2">Traditional Curing</div>
                  <div className="text-sm text-stone-600">Time-honored methods preserved</div>
                </CardContent>
              </Card>
              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-amber-700 mb-2">Grade A Quality</div>
                  <div className="text-sm text-stone-600">International standards met</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

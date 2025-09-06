import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Premium Indonesian Vanilla Quote",
  description:
    "Contact The Aroma Pod for premium Indonesian vanilla planifolia inquiries, partnerships, and quotes. Phone: +62 877-6212-8553. Fast response within 24 hours.",
  keywords: [
    "contact vanilla supplier",
    "Indonesian vanilla inquiry",
    "vanilla quote request",
    "vanilla partnership",
    "The Aroma Pod contact",
    "vanilla export inquiry",
    "premium vanilla supplier contact",
  ],
  openGraph: {
    title: "Contact The Aroma Pod - Premium Indonesian Vanilla Supplier",
    description:
      "Get in touch for premium Indonesian vanilla planifolia inquiries, partnerships, and quotes. Fast response within 24 hours.",
    url: "https://aromapod.vercel.app/contact",
  },
  twitter: {
    title: "Contact The Aroma Pod - Premium Indonesian Vanilla Supplier",
    description: "Get in touch for premium Indonesian vanilla planifolia inquiries, partnerships, and quotes.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export const revalidate = 3600 // Revalidate every hour

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "The Aroma Pod",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+62-877-6212-8553",
                  contactType: "customer service",
                  availableLanguage: ["English", "Indonesian"],
                  hoursAvailable: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "17:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "14:00",
                    },
                  ],
                },
                {
                  "@type": "ContactPoint",
                  email: "info@aromapod.com",
                  contactType: "customer service",
                },
              ],
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
                  name: "Contact",
                  item: "https://aromapod.vercel.app/contact",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-stone-900 py-16 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/indonesian-vanilla-plantation-tropical-farm-worker.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/85 to-stone-800/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-stone-100 leading-relaxed">
              Ready to experience premium Indonesian vanilla? We'd love to hear from you. Contact us for product
              inquiries, partnership opportunities, or to learn more about our sustainable vanilla sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-900">Send us a Message</CardTitle>
                <p className="text-stone-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-stone-700">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="Your first name" className="border-stone-300" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-stone-700">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Your last name" className="border-stone-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-stone-700">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="border-stone-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-stone-700">
                    Company (Optional)
                  </Label>
                  <Input id="company" placeholder="Your company name" className="border-stone-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-stone-700">
                    Subject
                  </Label>
                  <Input id="subject" placeholder="What can we help you with?" className="border-stone-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-stone-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vanilla needs, questions, or how we can help..."
                    rows={6}
                    className="border-stone-300"
                  />
                </div>

                <Button className="w-full bg-stone-800 hover:bg-stone-900">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                      <p className="text-stone-600">info@aromapod.com</p>
                      <p className="text-sm text-stone-500">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                      <p className="text-stone-600">+62 877-6212-8553</p>
                      <p className="text-sm text-stone-500">Monday - Friday, 9:00 AM - 5:00 PM WIB</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Location</h3>
                      <p className="text-stone-600">Indonesia</p>
                      <p className="text-sm text-stone-500">Serving customers worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-amber-700 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1">Business Hours</h3>
                      <div className="text-stone-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                      <p className="text-sm text-stone-500 mt-1">Western Indonesia Time (WIB)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">Looking for Partnership?</h3>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    We work with distributors, manufacturers, and culinary professionals worldwide. Whether you're
                    interested in becoming a distributor or need custom packaging solutions, we'd love to discuss
                    partnership opportunities.
                  </p>
                  <div className="space-y-2 text-sm text-stone-600">
                    <p>• Distributor partnerships</p>
                    <p>• Custom packaging solutions</p>
                    <p>• Export documentation assistance</p>
                    <p>• Quality certification support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone-50 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-12 text-center text-balance">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">
                    What makes your vanilla Grade A quality?
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    Our Grade A vanilla planifolia beans meet strict international standards for moisture content
                    (27-35%), length (5-7 inches), flexibility, and aromatic intensity. Each bean is hand-selected and
                    traditionally cured.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">Do you offer international shipping?</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Yes, we ship worldwide and can provide all necessary export documentation, quality certificates, and
                    customs support to ensure smooth international delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">What's your minimum order quantity?</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We accommodate orders of all sizes, from small quantities for artisan producers to large volumes for
                    commercial manufacturers. Contact us to discuss your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-stone-200 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-3">How do you ensure sustainability?</h3>
                  <p className="text-stone-600 leading-relaxed">
                    We work directly with family plantations, ensuring fair trade practices, environmental
                    responsibility, and the preservation of traditional cultivation methods for future generations.
                  </p>
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

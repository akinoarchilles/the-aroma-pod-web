import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - The Aroma Pod Data Protection",
  description:
    "Learn how The Aroma Pod protects your personal information. Our comprehensive privacy policy covers data collection, usage, security, and your rights regarding personal data.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "The Aroma Pod privacy",
    "data security",
    "cookies policy",
  ],
  alternates: {
    canonical: "/privacy",
  },
}

export const revalidate = 86400 // Revalidate daily

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-stone-900/90 to-stone-700/80 py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/traditional-vanilla-curing-process-indonesia-wooden.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 to-stone-700/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="text-xl text-stone-50 leading-relaxed drop-shadow-md">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you visit our website or engage with our services.
            </p>
            <p className="text-sm text-stone-100 mt-4 drop-shadow-sm">
              Last updated: January {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    <strong className="text-stone-900">Personal Information:</strong> When you contact us through our
                    website forms, we may collect your name, email address, phone number, company name, and any message
                    content you provide.
                  </p>
                  <p>
                    <strong className="text-stone-900">Automatically Collected Information:</strong> We may collect
                    information about your device, browser type, IP address, and how you interact with our website
                    through cookies and similar technologies.
                  </p>
                  <p>
                    <strong className="text-stone-900">Business Information:</strong> For commercial inquiries, we may
                    collect business-related information such as company details, shipping addresses, and product
                    requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Process and fulfill product orders and business requests</li>
                    <li>Communicate with you about our products and services</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Comply with legal obligations and protect our business interests</li>
                    <li>Send you relevant information about our vanilla products (with your consent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-stone-900">Service Providers:</strong> With trusted third-party service
                      providers who assist us in operating our website and conducting business
                    </li>
                    <li>
                      <strong className="text-stone-900">Legal Requirements:</strong> When required by law or to protect
                      our rights, property, or safety
                    </li>
                    <li>
                      <strong className="text-stone-900">Business Transfers:</strong> In connection with a merger,
                      acquisition, or sale of business assets
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Data Security</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                  <p>
                    We regularly review our security practices and update them as necessary to ensure the ongoing
                    protection of your information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                    Cookies are small files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. Disabling cookies may affect some
                    website functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Your Rights and Choices</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-stone-900">Access:</strong> Request access to the personal information we
                      hold about you
                    </li>
                    <li>
                      <strong className="text-stone-900">Correction:</strong> Request correction of inaccurate or
                      incomplete information
                    </li>
                    <li>
                      <strong className="text-stone-900">Deletion:</strong> Request deletion of your personal
                      information (subject to legal obligations)
                    </li>
                    <li>
                      <strong className="text-stone-900">Opt-out:</strong> Unsubscribe from marketing communications at
                      any time
                    </li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">International Data Transfers</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    As we operate internationally and serve customers worldwide, your information may be transferred to
                    and processed in countries other than your own. We ensure appropriate safeguards are in place to
                    protect your information during such transfers.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Children's Privacy</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Our website and services are not directed to children under the age of 13. We do not knowingly
                    collect personal information from children under 13. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                    requirements. We will notify you of any material changes by posting the updated policy on our
                    website with a new "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Contact Us</h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-stone-900">Email:</strong> privacy@aromapod.com
                    </p>
                    <p>
                      <strong className="text-stone-900">General Contact:</strong> info@aromapod.com
                    </p>
                    <p>
                      <strong className="text-stone-900">Phone:</strong> +62 877-6212-8553
                    </p>
                  </div>
                  <p className="text-sm">
                    We will respond to your privacy-related inquiries within 30 days of receipt.
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

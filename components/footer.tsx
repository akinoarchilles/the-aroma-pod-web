import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/aroma-pod-logo.png"
                alt="The Aroma Pod Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">The Aroma Pod</h3>
                <p className="text-sm text-stone-300">Premium Indonesian Vanilla</p>
              </div>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed max-w-md">
              Bringing you the finest Grade A vanilla planifolia from Indonesia's most prestigious growing regions.
              Sustainably sourced, traditionally cured, exceptionally aromatic.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link href="/products#west-papua" className="hover:text-white transition-colors">
                  West Papua Vanilla
                </Link>
              </li>
              <li>
                <Link href="/products#java" className="hover:text-white transition-colors">
                  Java Island Vanilla
                </Link>
              </li>
              <li>
                <Link href="/products#flores" className="hover:text-white transition-colors">
                  Flores Island Vanilla
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-sm text-stone-400">© {new Date().getFullYear()} The Aroma Pod. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

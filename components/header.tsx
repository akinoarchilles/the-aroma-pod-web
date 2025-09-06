"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "@/components/quote-modal"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  return (
    <>
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/aroma-pod-logo.png"
              alt="The Aroma Pod Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-stone-800">The Aroma Pod</h1>
              <p className="text-sm text-stone-600">Premium Indonesian Vanilla</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-stone-700 hover:text-stone-900 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-stone-700 hover:text-stone-900 transition-colors">
              Contact
            </Link>
            <Button onClick={openQuoteModal} variant="default" size="sm" className="bg-stone-800 hover:bg-stone-900">
              Get Quote
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/about"
                className="block text-stone-700 hover:text-stone-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="block text-stone-700 hover:text-stone-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="block text-stone-700 hover:text-stone-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                onClick={openQuoteModal}
                variant="default"
                size="sm"
                className="bg-stone-800 hover:bg-stone-900 w-full"
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}

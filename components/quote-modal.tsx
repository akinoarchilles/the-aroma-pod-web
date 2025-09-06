"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    productInterest: "",
    quantity: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            productInterest: "",
            quantity: "",
            message: "",
          })
          onClose()
        }, 3000)
      } else {
        throw new Error("Failed to send quote request")
      }
    } catch (error) {
      console.error("Error sending quote:", error)
      alert("Failed to send quote request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-stone-900 mb-2">Quote Request Sent!</h3>
            <p className="text-stone-600">
              Thank you for your interest. We'll get back to you within 24 hours with a detailed quote.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-stone-900">Request a Quote</DialogTitle>
          <p className="text-stone-600">
            Tell us about your vanilla needs and we'll provide you with a customized quote within 24 hours.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-stone-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
                className="border-stone-300"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-stone-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your last name"
                className="border-stone-300"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-stone-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="border-stone-300"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-stone-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className="border-stone-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-stone-700">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="border-stone-300"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="productInterest" className="text-stone-700">
                Product Interest *
              </Label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
                required
              >
                <option value="">Select a product</option>
                <option value="West Papua Vanilla">West Papua Vanilla</option>
                <option value="Java Island Vanilla">Java Island Vanilla</option>
                <option value="Flores Island Vanilla">Flores Island Vanilla</option>
                <option value="Mixed Selection">Mixed Selection</option>
                <option value="Custom Requirements">Custom Requirements</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-stone-700">
                Estimated Quantity
              </Label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 10kg, 50 beans, etc."
                className="border-stone-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-stone-700">
              Additional Requirements
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your specific needs, packaging requirements, delivery timeline, or any other details..."
              rows={4}
              className="border-stone-300"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-stone-800 hover:bg-stone-900" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Quote Request"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

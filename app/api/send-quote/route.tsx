import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, phone, productInterest, quantity, message } = body

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "smtp.zoho.com",
      port: 465,
      auth: {
        user: "hello@thearomapod.com",
        pass: process.env.HELLO_ZOHO_PASSWORD, // You'll need to set this environment variable
      },
    })

    // Email content
    const mailOptions = {
      from: "hello@thearomapod.com",
      to: "hello@thearomapod.com", // Send to yourself
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1c1917; border-bottom: 2px solid #d6d3d1; padding-bottom: 10px;">
            New Quote Request - The Aroma Pod
          </h2>
          
          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #78716c; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          </div>

          <div style="background-color: #fef7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Product Requirements</h3>
            <p><strong>Product Interest:</strong> ${productInterest}</p>
            ${quantity ? `<p><strong>Estimated Quantity:</strong> ${quantity}</p>` : ""}
          </div>

          ${
            message
              ? `
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Additional Requirements</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This quote request was submitted through The Aroma Pod website.</p>
            <p>Please respond within 24 hours to maintain our service commitment.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Quote request sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send quote request" }, { status: 500 })
  }
}

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    console.log("🚀 Contact form API called");
    
    const { name, company_name, email, phone, message } = await request.json();

    console.log("📤 Received form data:", { name, company_name, email, phone, message });

    // Check if Supabase credentials are configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("❌ Supabase credentials not configured");
      return NextResponse.json(
        { error: "Database not configured. Please check environment variables." },
        { status: 500 }
      );
    }

    // 1. Save to Supabase
    console.log("💾 Saving to Supabase...");
    const { data, error } = await supabase
      .from("contact_us")
      .insert([{ name, company_name, email, phone, message }])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }

    console.log("✅ Data saved to Supabase:", data);

    // 2. Track form submission (temporarily disabled for debugging)
    // try {
    //   const trackingResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/form-submissions`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       formType: 'Contact Us',
    //       formData: { name, company_name, email, phone, message },
    //       page: '/contact',
    //       timestamp: new Date().toISOString(),
    //       userAgent: 'Server-side tracking',
    //       ipAddress: 'Server-side tracking'
    //     }),
    //   });
      
    //   if (trackingResponse.ok) {
    //     console.log("✅ Contact form submission tracked");
    //   }
    // } catch (trackingError) {
    //   console.error("⚠️ Form tracking failed (but form was saved):", trackingError);
    // }

    // 3. Send email notification (optional - only if credentials are provided)
    if (process.env.EMAIL_TO && process.env.EMAIL_API_KEY) {
      try {
        console.log("📧 Sending email notification...");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_TO,
            pass: process.env.EMAIL_API_KEY,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_TO,
          to: process.env.EMAIL_TO,
          subject: "📧 New Contact Form Submission",
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><em>Received at: ${new Date().toLocaleString()}</em></p>
          `,
        });
        console.log("✅ Email sent successfully");
      } catch (emailError) {
        console.error("⚠️ Email sending failed (but data was saved):", emailError);
        // Don't throw error for email failure, data is already saved
      }
    } else {
      console.log("ℹ️ Email notifications not configured (optional)");
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully!",
        data: data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Submission error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
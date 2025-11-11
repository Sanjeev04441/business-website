import { createClient } from "@supabase/supabase-js";
import { sendMail } from "@/lib/email";
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

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

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

    // 3. Send email notification via Zoho utility
    try {
      console.log("📧 Sending email notification via Zoho...");
      const subject = `New Form Submission – Contact`;
      const html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company_name || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ''}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `;
      await sendMail(subject, html);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (but data was saved):", emailError);
      // Do not fail the request due to email issues
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Submission error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
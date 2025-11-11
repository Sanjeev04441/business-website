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
    const { firstName, lastName, email, phone, company, service, message } = await request.json();

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: firstName, email, message" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("📤 Received homepage contact form data:", { 
      firstName, lastName, email, phone, company, service, message 
    });

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
      .from("homepage_contact")
      .insert([{ 
        first_name: firstName,
        last_name: lastName,
        email, 
        phone, 
        company, 
        service, 
        message 
      }])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }

    console.log("✅ Data saved to Supabase:", data);

    // 2. Send email notification via Zoho utility
    try {
      const subject = `New Form Submission – Homepage Contact`;
      const html = `
        <h2>New Homepage Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || ''}</p>
        <p><strong>Company:</strong> ${company || ''}</p>
        <p><strong>Service:</strong> ${service || ''}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `;
      await sendMail(subject, html);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (but data was saved):", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Homepage contact form submission error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}
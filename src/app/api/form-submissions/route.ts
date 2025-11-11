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
    const { formType, formData, page, timestamp, userAgent, ipAddress } = await request.json();

    // Basic validation
    if (!formType || !formData) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: formType, formData" },
        { status: 400 }
      );
    }

    console.log("📝 Received form submission tracking:", { 
      formType, formData, page, timestamp 
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
    console.log("💾 Saving form submission to Supabase...");
    const { data, error } = await supabase
      .from("form_submissions")
      .insert([{ 
        form_type: formType,
        form_data: formData,
        page,
        timestamp: timestamp || new Date().toISOString(),
        user_agent: userAgent,
        ip_address: ipAddress
      }])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }

    console.log("✅ Form submission saved to Supabase:", data);

    // 2. Send email notification via Zoho utility
    try {
      const subject = `New Form Submission – ${formType}`;
      const html = `
        <h2>New ${formType} Form Submission</h2>
        <p><strong>Page:</strong> ${page || ''}</p>
        <div>
          <strong>Form Data:</strong>
          <div>
            ${Object.entries(formData).map(([key, value]) => `<div><strong>${key}:</strong> ${value}</div>`).join('')}
          </div>
        </div>
        <p><em>Submitted at: ${new Date(timestamp || Date.now()).toLocaleString()}</em></p>
      `;
      await sendMail(subject, html);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (but data was saved):", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Form submission tracking error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}
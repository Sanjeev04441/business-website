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
    const { 
      formType,
      formData,
      page,
      timestamp,
      userAgent,
      ipAddress
    } = await request.json();

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

    // 2. Send email notification (optional - only if credentials are provided)
    if (process.env.EMAIL_TO && process.env.EMAIL_API_KEY) {
      try {
        console.log("📧 Sending form submission email notification...");
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
          subject: `📝 New ${formType} Form Submission`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #dc2626; text-align: center; margin-bottom: 30px;">📝 New ${formType} Form Submission</h2>
              
              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h3 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Form Details</h3>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Form Type:</strong> 
                  <span style="color: #333; margin-left: 10px;">${formType}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Page:</strong> 
                  <span style="color: #333; margin-left: 10px;">${page}</span>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <strong style="color: #dc2626;">Form Data:</strong>
                  <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 8px; border-left: 4px solid #dc2626;">
                    ${Object.entries(formData).map(([key, value]) => 
                      `<div style="margin-bottom: 8px;"><strong>${key}:</strong> ${value}</div>`
                    ).join('')}
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 14px; margin: 0;">
                    <em>Submitted at: ${new Date(timestamp || Date.now()).toLocaleString()}</em>
                  </p>
                  <p style="color: #dc2626; font-size: 12px; margin: 5px 0 0 0;">
                    📝 Form Submission Tracking
                  </p>
                </div>
              </div>
            </div>
          `,
        });
        console.log("✅ Form submission email sent successfully");
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
        message: "Form submission tracked successfully",
        data: data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Form submission tracking error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
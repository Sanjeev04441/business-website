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
    const { firstName, lastName, email, phone, company, service, message } = await request.json();

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

    // 2. Send email notification (optional - only if credentials are provided)
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
          subject: "🏠 New Homepage Contact Form Submission",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #dc2626; text-align: center; margin-bottom: 30px;">🏠 New Homepage Contact Form Submission</h2>
              
              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h3 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">Contact Information</h3>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Name:</strong> 
                  <span style="color: #333; margin-left: 10px;">${firstName} ${lastName}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Email:</strong> 
                  <span style="color: #333; margin-left: 10px;">${email}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Phone:</strong> 
                  <span style="color: #333; margin-left: 10px;">${phone || 'Not provided'}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Company:</strong> 
                  <span style="color: #333; margin-left: 10px;">${company || 'Not provided'}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <strong style="color: #dc2626;">Service Interested In:</strong> 
                  <span style="color: #333; margin-left: 10px;">${service || 'Not specified'}</span>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <strong style="color: #dc2626;">Message:</strong>
                  <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 8px; border-left: 4px solid #dc2626;">
                    ${message}
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 14px; margin: 0;">
                    <em>Received at: ${new Date().toLocaleString()}</em>
                  </p>
                  <p style="color: #dc2626; font-size: 12px; margin: 5px 0 0 0;">
                    🏠 Homepage Contact Form
                  </p>
                </div>
              </div>
            </div>
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
        message: "Thank you for your message! We'll get back to you soon.",
        data: data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Homepage contact form submission error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
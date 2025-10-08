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
      name, 
      companyName, 
      email, 
      phoneNumber, 
      city, 
      state, 
      projectType, 
      quantity, 
      urgency, 
      budget, 
      industry, 
      additionalNotes 
    } = await request.json();

    console.log("📤 Received quotation data:", { 
      name, 
      companyName, 
      email, 
      phoneNumber, 
      city, 
      state, 
      projectType, 
      quantity, 
      urgency, 
      budget, 
      industry 
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
    console.log("💾 Saving quotation request to Supabase...");
    const { data, error } = await supabase
      .from("quotation_requests")
      .insert([{ 
        name, 
        company_name: companyName, 
        email, 
        phone: phoneNumber, 
        city, 
        state, 
        project_type: projectType, 
        quantity, 
        urgency, 
        budget, 
        industry, 
        additional_notes: additionalNotes 
      }])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }

    console.log("✅ Quotation request saved to Supabase:", data);

    // 2. Track form submission
    try {
      const trackingResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Get Quotation',
          formData: { 
            name, 
            company_name: companyName, 
            email, 
            phone: phoneNumber, 
            city, 
            state, 
            project_type: projectType, 
            quantity, 
            urgency, 
            budget, 
            industry, 
            additional_notes: additionalNotes 
          },
          page: '/get-quotation',
          timestamp: new Date().toISOString(),
          userAgent: 'Server-side tracking',
          ipAddress: 'Server-side tracking'
        }),
      });
      
      if (trackingResponse.ok) {
        console.log("✅ Quotation form submission tracked");
      }
    } catch (trackingError) {
      console.error("⚠️ Form tracking failed (but form was saved):", trackingError);
    }

    // 3. Send email notification (optional - only if credentials are provided)
    if (process.env.EMAIL_TO && process.env.EMAIL_API_KEY) {
      try {
        console.log("📧 Sending quotation notification email...");
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
          subject: "💰 New Quotation Request - Priority Lead",
          html: `
            <h2>💰 New Quotation Request</h2>
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Lead Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${companyName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phoneNumber}</p>
              <p><strong>Location:</strong> ${city}, ${state}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #d97706; margin-top: 0;">Project Details</h3>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Quantity/Scope:</strong> ${quantity || 'Not specified'}</p>
              <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Industry:</strong> ${industry || 'Not specified'}</p>
            </div>
            
            ${additionalNotes ? `
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Additional Notes</h3>
              <p>${additionalNotes}</p>
            </div>
            ` : ''}
            
            <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #166534;"><strong>⏰ Action Required:</strong> Send detailed quote within 24 hours</p>
            </div>
            
            <p><em>Received at: ${new Date().toLocaleString()}</em></p>
          `,
        });
        console.log("✅ Quotation notification email sent successfully");
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
        message: "Quotation request submitted successfully! We'll get back to you within 24 hours with a detailed quote.",
        data: data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Quotation submission error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
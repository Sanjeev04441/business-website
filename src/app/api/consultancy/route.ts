import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Supabase client will be initialized inside the function

export async function POST(request: Request) {
  try {
    console.log("🚀 Consultancy API called");
    
    const {
      name,
      companyName,
      email,
      phoneNumber,
      consultancyType,
      projectScope,
      timeline,
      budget,
      description,
    } = await request.json();

    console.log("📤 Received consultancy data:", {
      name,
      companyName,
      email,
      phoneNumber,
      consultancyType,
      projectScope,
      timeline,
      budget,
      description,
    });

    // Check if Supabase credentials are configured
    console.log("🔍 Checking Supabase credentials...");
    console.log("🔍 SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing");
    console.log("🔍 SUPABASE_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing");
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error("❌ Supabase credentials not configured");
      return NextResponse.json(
        { error: "Database not configured. Please check environment variables." },
        { status: 500 }
      );
    }

    // Initialize Supabase client
    console.log("🔗 Initializing Supabase client...");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    console.log("✅ Supabase client initialized");

    // 1. Save to Supabase
    console.log("💾 Saving consultancy request to Supabase...");
    const { data, error } = await supabase
      .from("consultancy_requests") // New table for consultancy
      .insert([
        {
          name,
          company_name: companyName,
          email,
          phone: phoneNumber,
          consultancy_type: consultancyType,
          project_scope: projectScope,
          timeline,
          budget,
          description,
        },
      ])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      throw error;
    }

    console.log("✅ Consultancy data saved to Supabase:", data);

    // 2. Track form submission
    try {
      const trackingResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'Consultancy',
          formData: { 
            name, 
            company_name: companyName, 
            email, 
            phone: phoneNumber, 
            consultancy_type: consultancyType,
            project_scope: projectScope,
            timeline,
            budget,
            description
          },
          page: '/consultancy',
          timestamp: new Date().toISOString(),
          userAgent: 'Server-side tracking',
          ipAddress: 'Server-side tracking'
        }),
      });
      
      if (trackingResponse.ok) {
        console.log("✅ Consultancy form submission tracked");
      }
    } catch (trackingError) {
      console.error("⚠️ Form tracking failed (but form was saved):", trackingError);
    }

    // 3. Send email notification (optional - only if credentials are provided)
    if (process.env.EMAIL_TO && process.env.EMAIL_API_KEY) {
      try {
        console.log("📧 Sending consultancy email notification...");
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
          subject: `🎯 New Consultancy Request from ${companyName || name}`,
          html: `
            <h2>New Consultancy Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Consultancy Type:</strong> ${consultancyType}</p>
            <p><strong>Project Scope:</strong> ${projectScope}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><em>Received at: ${new Date().toLocaleString()}</em></p>
          `,
        });
        console.log("✅ Consultancy email sent successfully");
      } catch (emailError) {
        console.error("⚠️ Consultancy email sending failed (but data was saved):", emailError);
      }
    } else {
      console.log("ℹ️ Email notifications not configured for consultancy (optional)");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Consultancy request submitted successfully!",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Consultancy submission error:", error);
    console.error("❌ Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    console.error("❌ Error details:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      cause: error instanceof Error ? error.cause : undefined
    });
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
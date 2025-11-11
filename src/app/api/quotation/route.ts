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

    // Validate required fields
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, projectType" },
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

    // 3. Send email notification via Zoho utility
    try {
      const subject = `New Form Submission – Get Quotation`;
      const html = `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || ''}</p>
        <p><strong>Location:</strong> ${city || ''}, ${state || ''}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Quantity/Scope:</strong> ${quantity || ''}</p>
        <p><strong>Urgency:</strong> ${urgency || ''}</p>
        <p><strong>Budget Range:</strong> ${budget || ''}</p>
        <p><strong>Industry:</strong> ${industry || ''}</p>
        ${additionalNotes ? `<p><strong>Additional Notes:</strong> ${additionalNotes}</p>` : ''}
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `;
      await sendMail(subject, html);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (but data was saved):", emailError);
      return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Quotation submission error:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Internal server error" }, { status: 500 });
  }
}
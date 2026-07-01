// @app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, venue, message, businessType, monthlyVisitors } = await request.json();

    if (!name || !email || !phone || !venue || !businessType) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const appName = process.env.APP_NAME;
    const appPassword = process.env.APP_PASSWORD;
    const recipientEmail = process.env.RECEPT_EMAIL;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    if (!appName || !appPassword || !recipientEmail) {
      console.error("Missing email environment variables.");
      return NextResponse.json(
        { error: "Email configuration is not set up on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: appName, pass: appPassword },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      return NextResponse.json(
        { error: "Email configuration is invalid. Please check your credentials." },
        { status: 500 }
      );
    }

    const businessTypeLabels: Record<string, string> = {
      hotel: "Hotel / Resort",
      fitness: "Fitness Center / Gym",
      education: "College / University",
      healthcare: "Healthcare Facility",
      casino: "Casino",
      restaurant: "Restaurant / Café",
      retail: "Retail Store",
      office: "Office Building",
      other: "Other",
    };

    // Use NEXT_PUBLIC_APP_URL for the logo
    const logoUrl = appUrl ? `${appUrl}/images/navbar.png` : '';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #FFFFFF;
            margin: 0;
            padding: 30px 15px;
          }
          .container {
            max-width: 560px;
            margin: 0 auto;
            background-color: #F8F8F8;
            border: 1px solid #E5E5E5;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }
          .logo-container {
            text-align: center;
            margin-bottom: 28px;
            padding-bottom: 20px;
            border-bottom: 1px solid #E5E5E5;
          }
          .logo-image {
            max-height: 60px;
            width: auto;
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            margin-bottom: 28px;
          }
          .header h1 {
            color: #0A0A0A;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 1px;
            margin: 0;
            text-transform: uppercase;
          }
          .header .accent-line {
            width: 60px;
            height: 3px;
            background: #D4AF37;
            margin: 12px auto 0;
            border-radius: 2px;
          }
          .field-label {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #666666;
            margin-bottom: 4px;
          }
          .field-value {
            font-size: 15px;
            color: #0A0A0A;
            margin-bottom: 20px;
            padding: 8px 0;
          }
          .field-value a {
            color: #D4AF37;
            text-decoration: none;
          }
          .field-value.highlight {
            color: #D4AF37;
            font-weight: 600;
          }
          .message-box {
            background-color: #FFFFFF;
            border-left: 3px solid #D4AF37;
            padding: 16px 20px;
            border-radius: 0 8px 8px 0;
            font-size: 14px;
            color: #0A0A0A;
            line-height: 1.8;
            white-space: pre-wrap;
            margin-top: 4px;
          }
          .divider {
            border: none;
            border-top: 1px solid #E5E5E5;
            margin: 0 0 20px;
          }
          .badge {
            display: inline-block;
            background: #D4AF37;
            color: #0A0A0A;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .footer {
            text-align: center;
            margin-top: 36px;
            padding-top: 20px;
            border-top: 1px solid #E5E5E5;
            font-size: 11px;
            color: #666666;
            letter-spacing: 1px;
          }
          .footer .footer-accent {
            color: #D4AF37;
          }
        </style>
      </head>
      <body>
        <div class="container">

          <div class="logo-container">
            <img src="${logoUrl}" alt="Fleur Charge" class="logo-image" />
          </div>

          <div class="header">
            <h1>New Venue Partnership Request</h1>
            <div class="accent-line"></div>
          </div>

          <div class="field-label">Business Name</div>
          <div class="field-value"><strong>${venue}</strong></div>
          <hr class="divider" />

          <div class="field-label">Contact Person</div>
          <div class="field-value">${name}</div>
          <hr class="divider" />

          <div class="field-label">Email Address</div>
          <div class="field-value">
            <a href="mailto:${email}">${email}</a>
          </div>
          <hr class="divider" />

          <div class="field-label">Phone Number</div>
          <div class="field-value">${phone}</div>
          <hr class="divider" />

          <div class="field-label">Business Type</div>
          <div class="field-value highlight">
            <span class="badge">${businessTypeLabels[businessType] || businessType}</span>
          </div>
          <hr class="divider" />

          ${monthlyVisitors ? `
          <div class="field-label">Estimated Monthly Visitors</div>
          <div class="field-value">${monthlyVisitors}</div>
          <hr class="divider" />
          ` : ''}

          <div class="field-label">Venue Details & Questions</div>
          <div class="message-box">${message || "No additional details provided."}</div>

          <div class="footer">
            <span class="footer-accent">✦</span> Fleur Charge Partnership Inquiry <span class="footer-accent">✦</span><br/>
            ${new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name}" <${appName}>`,
      to: recipientEmail,
      subject: `New Venue Partnership: ${venue} - ${businessTypeLabels[businessType] || businessType}`,
      html: htmlContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
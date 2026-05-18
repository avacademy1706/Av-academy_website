// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, email, service, message } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Name and phone are required." },
                { status: 400 }
            );
        }

        // Gmail SMTP transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Gmail App Password
            },
        });

        const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', sans-serif; background: #f0f4f8; margin: 0; padding: 20px; }
            .card { background: #ffffff; border-radius: 16px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #00b4d8, #22d3ee); padding: 28px 32px; }
            .header h1 { color: #031a2b; margin: 0; font-size: 22px; font-weight: 800; }
            .header p { color: #035875; margin: 6px 0 0; font-size: 13px; }
            .body { padding: 28px 32px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #00b4d8; margin-bottom: 4px; }
            .value { font-size: 15px; color: #1a2e3b; background: #f0f9fc; padding: 10px 14px; border-radius: 8px; border-left: 3px solid #22d3ee; }
            .footer { background: #f0f4f8; padding: 16px 32px; text-align: center; font-size: 12px; color: #8a9ab0; }
            .badge { display: inline-block; background: #00b4d8; color: #031a2b; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>📩 New Contact Form Inquiry</h1>
              <p>AV Academy &amp; AV EditLab — Website Lead</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📞 Phone / WhatsApp</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">${email || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">🎯 Service Interest</div>
                <div class="value">
                  ${service ? `<span class="badge">${service}</span>` : "Not specified"}
                </div>
              </div>
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message || "No message provided."}</div>
              </div>
            </div>
            <div class="footer">
              Sent from avacademy.co.in contact form &nbsp;•&nbsp; ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </div>
          </div>
        </body>
      </html>
    `;

        await transporter.sendMail({
            from: `"AV Academy Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email || undefined,
            subject: `🔔 New Inquiry from ${name} — ${service || "General"}`,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return NextResponse.json(
            { error: "Failed to send email. Please try again." },
            { status: 500 }
        );
    }
}
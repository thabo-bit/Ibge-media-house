import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      packageLabel,
      packagePrice,
      date,
      time,
      message,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Ibge Media House <onboarding@resend.dev>",
      to: ["richardramashala6@gmail.com"],
      replyTo: email,
      subject: `New booking request — ${packageLabel || "General inquiry"}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1f1b16;">
          <h1 style="font-size: 24px; margin-bottom: 4px;">New booking request</h1>
          <p style="color: #6b6259; margin-top: 0;">from ${name}</p>
          <hr style="border: none; border-top: 1px solid #e5dfd6; margin: 24px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b6259;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6259;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6259;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6259;">Package</td><td style="padding: 8px 0;">${packageLabel || "—"} (${packagePrice || "—"})</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6259;">Date</td><td style="padding: 8px 0;">${date || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b6259;">Time</td><td style="padding: 8px 0;">${time || "—"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5dfd6; margin: 24px 0;" />
          <p style="white-space: pre-wrap;">${message || "—"}</p>
          <hr style="border: none; border-top: 1px solid #e5dfd6; margin: 24px 0;" />
          <p style="font-size: 12px; color: #6b6259;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Send email error:", err);
    return NextResponse.json(
      { error: err?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
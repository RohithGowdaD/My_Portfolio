/*import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ message: "Email and message required" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your-email@gmail.com',
      subject: 'New Contact Form Submission',
      text: message,
    });

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email." }), { status: 500 });
  }
}
*/
// ✅ /app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!senderEmail || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from:'Acme <onboarding@resend.dev>', // ✅ default, works without domain
      to: "rohithgowdadevaraju@gmail.com",                         // ✅ your email
      subject: "New Message from Portfolio",
      replyTo: senderEmail as string,
      text: `From: ${senderEmail}\n\n${message}`,
    });

    console.log("Resend result:", data);

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Email send failed", detail: error }, { status: 500 });
  }
}


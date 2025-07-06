"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("📩 Server action triggered");

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log("Sender email:", senderEmail);
  console.log("Message:", message);

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let data;

  try {
    console.log("Attempting to send email...");

    data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // okay for testing
      to: "rohithgowdadevaraju@gmail.com",                         // your email
      subject: "Message from contact form",
      replyTo: senderEmail,
      text: `New message from contact form:\n\nSender: ${senderEmail}\n\nMessage:\n${message}`, // ✅ Plain text
    });

    console.log("✔️ Resend response:", data);
  } catch (error: unknown) {
    console.error("❌ Error sending email:", error);
    return { error: getErrorMessage(error) };
  }

  return { data };
};

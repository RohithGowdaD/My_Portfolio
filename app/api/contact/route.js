import nodemailer from 'nodemailer';

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

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Message: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
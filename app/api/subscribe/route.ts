import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json({ 
        error: 'Email is required' 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Please provide a valid email address' 
      }, { status: 400 });
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email content - notify admin about new subscription
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the same email as admin notification
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>A new user has subscribed to the newsletter on the blog page.</p>
      `,
    };

    // Thank you email to subscriber
    const subscriberMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Subscribing!',
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>We're excited to have you on board.</p>
        <p>You'll now receive the latest insights on digital marketing, web development, and AI automation directly in your inbox.</p>
        <p>Best regards,<br/>SM Agency Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    console.log('New newsletter subscription:', email);

    return NextResponse.json({ 
      message: 'Thank you for subscribing! Check your email for confirmation.' 
    });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return NextResponse.json({ 
      error: 'There was an error processing your subscription. Please try again.' 
    }, { status: 500 });
  }
}
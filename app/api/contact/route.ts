import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { name, email, phone, company, message } = body;
    
    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json({ 
        error: 'All fields marked with * are required.' 
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
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'smagencyglobal@gmail.com', // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('Contact form submission:', body);
    
    return NextResponse.json({ 
      message: 'Thank you for your message! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ 
      error: 'There was an error sending your message. Please try again.' 
    }, { status: 500 });
  }
}
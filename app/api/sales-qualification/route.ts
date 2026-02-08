import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      service,
      projectIntent,
      budget,
      timeline,
      decisionAuthority,
      companyName,
      companyWebsite,
      businessType,
      problemDescription,
      toolsUsed,
      consultationPreference,
      professionalAck,
      name,
      email,
      phone,
      seriousnessLevel,
      meetingDate,
      meetingTime
    } = body;
    
    // Validate required fields
    if (!service || !budget || !companyName || !businessType || !problemDescription) {
      return NextResponse.json({ 
        error: 'Required fields are missing: service, budget, company name, business type, or problem description' 
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
    
    // Format tools used as a list
    const toolsList = toolsUsed && Array.isArray(toolsUsed) ? toolsUsed.join(', ') : 'None selected';
    
    // Prepare email content for owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'smagencyglobal@gmail.com', // Owner's email
      subject: `New Sales Qualification: ${seriousnessLevel} Intent - ${service}`,
      html: `
        <h2>New Sales Qualification Submission</h2>
        <h3>Client Details</h3>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Website:</strong> ${companyWebsite || 'Not provided'}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        
        <h3>Project Information</h3>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Project Intent:</strong> ${projectIntent || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not provided'}</p>
        <p><strong>Decision Authority:</strong> ${decisionAuthority || 'Not provided'}</p>
        <p><strong>Problem Description:</strong> ${problemDescription}</p>
        <p><strong>Tools Used:</strong> ${toolsList}</p>
        <p><strong>Consultation Preference:</strong> ${consultationPreference || 'Not provided'}</p>
        
        <h3>Evaluation</h3>
        <p><strong>Seriousness Level:</strong> ${seriousnessLevel}</p>
        ${meetingDate && meetingTime ? `<p><strong>Scheduled Meeting:</strong> ${meetingDate} at ${meetingTime}</p>` : '<p><strong>Meeting:</strong> Not scheduled</p>'}
        
        <h3>Additional Information</h3>
        <p><strong>Professional Acknowledgment:</strong> ${professionalAck ? 'Yes' : 'No'}</p>
      `,
    };
    
    // Send email to owner
    await transporter.sendMail(ownerMailOptions);
    
    // Prepare email content for client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email || '', // Send to client if email provided
      subject: 'SM Agency - Thank You for Your Inquiry',
      html: `
        <h2>Thank You for Your Interest in SM Agency!</h2>
        <p>We have received your sales qualification form and will review your request shortly.</p>
        
        <h3>Your Request Summary:</h3>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Estimated Budget:</strong> ${budget}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        
        <h3>Next Steps:</h3>
        <p>Our team will evaluate your request and get back to you within 24 hours. If your request matches our services, we will contact you to discuss the next steps.</p>
        
        ${meetingDate && meetingTime ? `
        <h3>Meeting Scheduled:</h3>
        <p>You have scheduled a meeting for ${meetingDate} at ${meetingTime}. We'll send you a calendar invite shortly.</p>
        ` : ''}
        
        <p>If you have any urgent questions, feel free to contact us directly at smagencyglobal@gmail.com</p>
        
        <p>Best regards,<br/>The SM Agency Team</p>
      `,
    };
    
    // Send email to client if email is provided
    if (email) {
      await transporter.sendMail(clientMailOptions);
    }
    
    // Log the submission
    console.log('Sales qualification submission:', {
      service,
      budget,
      companyName,
      businessType,
      seriousnessLevel,
      meetingDate,
      meetingTime
    });
    
    return NextResponse.json({ 
      message: 'Thank you for your submission! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing sales qualification form:', error);
    return NextResponse.json({ 
      error: 'There was an error processing your request. Please try again.' 
    }, { status: 500 });
  }
}
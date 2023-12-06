import * as nodemailer from 'nodemailer';

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

class SendEmail {
  transporter: nodemailer.Transport;

  private host = import.meta.env.SMTP_HOST;
  private port = import.meta.env.SMTP_PORT;
  private user = import.meta.env.SMTP_USER;
  private pass = import.meta.env.SMTP_PASS;

constructor() {
    const transportOptions = {
      host: this.host,
      port: this.port,
      secure: false, // Change to true if your server requires encryption
      auth: {
        user: this.user,
        pass: this.pass,
      },
    };
    this.transporter = nodemailer.createTransport(transportOptions);
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail(options);
      console.log('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // You can handle the error differently
    }
  }
}


export default SendEmail;


// Usage:
// const sendEmail = new SendEmail();

// const emailOptions = {
//   from: '"Your Name" <your_email@example.com>',
//   to: 'recipient_email@example.com',
//   subject: 'Your email subject',
//   text: 'This is a plain text email.',
//   html: 'This is an HTML email.',
// };

// sendEmail.sendEmail(emailOptions);

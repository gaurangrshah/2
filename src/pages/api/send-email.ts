import SendEmail from '../../lib/nodemailer';

import type { APIRoute } from 'astro';


export const POST: APIRoute = async ({request}) => {
  const body = await request.json();

  if(body) {
    const name = body.name;
    const email = body.email;
    const message = body.message;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    const sendEmail = new SendEmail();

    const emailOptions = {
      from: `"${name}" <${email}>`,
      to: import.meta.env.SMTP_USER,
      subject: 'Your email subject',
      text: message || 'This is a plain text email.',
      html: message || 'This is an HTML email.',
    };

    sendEmail.sendEmail(emailOptions);

    return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "No fields provided.",
      }),
      { status: 400 }
    );
  }

};

export const prerender = false;

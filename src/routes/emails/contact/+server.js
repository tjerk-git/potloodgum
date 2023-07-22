import { render } from 'svelte-email';
import Contact from '$lib/email/Contact.svelte';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'my_user',
    pass: 'my_password'
  }
});

const emailHtml = render({
  template: Contact,
  props: {
    name: 'Svelte'
  }
});

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml
};

transporter.sendMail(options);
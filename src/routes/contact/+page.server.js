import { POSTMARK_TOKEN } from '$env/static/private';

import postmark from "postmark";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const imageDataUrl = data.get('image');
    const email = data.get('email');
    const filename = data.get('filename');


    if (!imageDataUrl) {
      return { success: false };
    }

    const postmarkClient = new postmark.ServerClient(
      POSTMARK_TOKEN
    );

    const emailOptions = {
      From: "appointments@hamaki.pro",
      To: "tjerk.dijkstra@icloud.com",
      Subject: "somebody wants to reach you!",
      TextBody: `A new artwork from potloodgum.com, ${email}`,
      MessageStream: "outbound",
    };

    const attachment = {
      Name: filename,
      Content: imageDataUrl,
      ContentType: "image/png",
    };

    emailOptions.Attachments = [attachment];

    postmarkClient
      .sendEmail(emailOptions)
      .then((result) => {
        console.log("Email sent:", result);
      })
      .catch((error) => {
        console.log("Error sending email:", error.message);
      });


    return { success: true };
  }
};
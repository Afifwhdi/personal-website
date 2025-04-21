import { createElement } from "react";
import { Resend } from "resend";

import EmailTemplate from "@/components/common/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "From <onboarding@resend.dev>",
      to: ["afifwahidi2@gmail.com"],
      reply_to: email,
      subject: "Hello there, Get in touch with me 👋",
      react: createElement(EmailTemplate, {
        name: name,
        message: message,
      }),
    });

    if (error) {
      return new Response(JSON.stringify(error), { status: 400 });
    }

    return new Response(
      JSON.stringify({
        message: "Message sent successfully!",
        data: data,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ error: (error as Error)?.message || "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello World!",
    }),
    { status: 200 }
  );
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await resend.emails.send({
      from: "alre0003@stud.ek.dk",
      to: "alre0003@stud.ek.dk",
      subject: "Ny besked fra kontaktformular",
      reply_to: email,
      text: `
Navn: ${name}
Email: ${email}

Besked:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}

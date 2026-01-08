// /app/api/contact/route.ts
import { Resend } from "resend";

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    // Получаем данные формы
    const { name, email, message } = await req.json();

    // Простая валидация
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Не всі поля заповнені" }), {
        status: 400,
      });
    }

    // Отправка письма через Resend
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>", // тестовый email
      to: ["nikulin.danilo@gmail.com"], // куда отправляем
      subject: `Нове повідомлення від ${name}`,
      replyTo: email,
      html: `
        <h3>Нове повідомлення з форми контакту</h3>
        <p><strong>Ім’я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Повідомлення:</strong></p>
        <p>${message}</p>
      `,
    });

    // Возвращаем успешный статус
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Сталася помилка" }),
      { status: 500 }
    );
  }
}

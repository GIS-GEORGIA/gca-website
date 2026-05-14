import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: "სავალდებულო ველები არ არის შევსებული" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "GCA საიტი <onboarding@resend.dev>",
      to: ["geocartographersassoc@gmail.com"],
      replyTo: email,
      subject: `[GCA] ${subject} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#0a2342">
          <div style="background:#0a2342;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:#c8a951;margin:0;font-size:20px">საქართველოს კარტოგრაფთა ასოციაცია</h2>
            <p style="color:#ffffff99;margin:4px 0 0;font-size:13px">ახალი შეტყობინება gc.qgis.ge-დან</p>
          </div>
          <div style="background:#f8f5ef;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e1d8">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-size:13px;color:#666;width:100px">სახელი</td>
                  <td style="padding:8px 0;font-size:14px;font-weight:bold">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#666">ელ. ფოსტა</td>
                  <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#0a2342">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:13px;color:#666">თემა</td>
                  <td style="padding:8px 0;font-size:14px">${subject}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>
            <p style="font-size:13px;color:#666;margin:0 0 8px">შეტყობინება:</p>
            <p style="font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "გაგზავნა ვერ მოხერხდა" }, { status: 500 });
  }
}

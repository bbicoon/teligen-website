import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, company, phone, email, interest, message } = await request.json();

    // 이메일 전송 설정
    const transporter = nodemailer.createTransport({
      service: "gmail", // 또는 다른 이메일 서비스
      auth: {
        user: process.env.EMAIL_USER, // 환경변수에서 이메일 주소
        pass: process.env.EMAIL_PASS, // 환경변수에서 앱 비밀번호
      },
    });

    // 이메일 내용
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ["sy.park@teligen.co.kr"],
      subject: "텔리젠 상담문의",
      html: `
        <h2>텔리젠 상담문의</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>회사명:</strong> ${company || "미입력"}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>관심 분야:</strong> ${interest}</p>
        <p><strong>문의 내용:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("이메일 전송 실패:", error);
    return NextResponse.json({ error: "이메일 전송에 실패했습니다." }, { status: 500 });
  }
}

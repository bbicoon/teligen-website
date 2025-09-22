"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmailJSForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS를 사용한 이메일 전송
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          interest: "",
          message: "",
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-800">
          문의하기 (EmailJS)
        </CardTitle>
        <p className="text-slate-600">
          아래 양식을 작성해주시면 24시간 내에 답변드리겠습니다.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              이름 *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="홍길동"
              className="w-full"
            />
          </div>

          {/* 회사명 */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
              회사명
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="(주)텔리젠"
              className="w-full"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              연락처 *
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="010-1234-5678"
              className="w-full"
            />
          </div>

          {/* 이메일 */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              이메일 *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full"
            />
          </div>

          {/* 관심 분야 */}
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
              관심 분야 *
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">선택해주세요</option>
              <option value="키오스크">키오스크</option>
              <option value="자동판매기">자동판매기</option>
              <option value="유통포스 프로그램">유통포스 프로그램</option>
              <option value="하이퍼엣지">하이퍼엣지</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 문의 내용 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              문의 내용 *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="문의하실 내용을 자세히 작성해주세요..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* 개인정보 처리방침 동의 */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="text-sm text-slate-600">
              개인정보 수집 및 이용에 동의합니다. *
            </label>
          </div>

          {/* 제출 버튼 */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            {isSubmitting ? "전송 중..." : "문의하기"}
          </Button>

          {/* 상태 메시지 */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              문의가 성공적으로 전송되었습니다. 24시간 내에 답변드리겠습니다.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              문의 전송에 실패했습니다. 다시 시도해주세요.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

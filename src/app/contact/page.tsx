"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useEffect } from "react";

// metadata는 layout.tsx에서 설정됩니다.

export default function ContactPage() {
  useEffect(() => {
    // 폼 제출 시 _replyto 필드를 이메일 입력값으로 설정
    const form = document.querySelector('#contactForm') as HTMLFormElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const replytoInput = document.querySelector('input[name="_replyto"]') as HTMLInputElement;
    
    if (form && emailInput && replytoInput) {
      emailInput.addEventListener('input', () => {
        replytoInput.value = emailInput.value;
      });

      // 폼 제출 시 sy.park@teligen.co.kr로 전송
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 폼: sy.park@teligen.co.kr
        const form1 = document.createElement('form');
        form1.action = 'https://formsubmit.co/sy.park@teligen.co.kr';
        form1.method = 'POST';
        form1.style.display = 'none';
        
        // 폼 데이터 복사
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
          const input1 = document.createElement('input');
          input1.type = 'hidden';
          input1.name = key;
          input1.value = value as string;
          form1.appendChild(input1);
        }
        
        // 폼 제출
        document.body.appendChild(form1);
        form1.submit();
        
        // 성공 메시지 표시
        setTimeout(() => {
          window.location.href = '/contact?success=true';
        }, 1000);
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="상담문의" 
        description="텔리젠에 문의하세요. 전문 상담사가 신속하게 답변드립니다."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 문의 폼 */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  문의하기
                </CardTitle>
                <p className="text-slate-600">
                  아래 양식을 작성해주시면 24시간 내에 답변드리겠습니다.
                </p>
              </CardHeader>
              <CardContent>
                <form 
                  id="contactForm"
                  className="space-y-6"
                >
                  {/* 숨겨진 필드: 수신 이메일 설정 */}
                  <input type="hidden" name="_subject" value="텔리젠 상담문의" />
                  <input type="hidden" name="_replyto" value="" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="http://localhost:3000/contact?success=true" />
                  {/* 이름 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      이름 *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    문의하기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-8">
            {/* 대표번호 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800">
                  <Phone className="w-6 h-6 text-blue-600" />
                  대표번호
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:1577-4012" 
                  className="text-3xl font-bold text-blue-600 hover:underline transition-colors"
                >
                  1577-4012
                </a>
                <p className="text-slate-600 mt-2">
                  평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)
                </p>
              </CardContent>
            </Card>

            {/* 이메일 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800">
                  <Mail className="w-6 h-6 text-blue-600" />
                  이메일
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:sy.park@teligen.co.kr" 
                  className="text-lg text-blue-600 hover:underline transition-colors"
                >
                  sy.park@teligen.co.kr
                </a>
                <p className="text-slate-600 mt-2">
                  이메일 문의는 24시간 내에 답변드립니다.
                </p>
              </CardContent>
            </Card>

            {/* 업무시간 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-slate-800">
                  <Clock className="w-6 h-6 text-blue-600" />
                  업무시간
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-slate-600">
                  <p><strong>평일:</strong> 09:00 ~ 18:00</p>
                  <p><strong>점심시간:</strong> 12:00 ~ 13:00</p>
                  <p><strong>토요일:</strong> 휴무</p>
                  <p><strong>일요일/공휴일:</strong> 휴무</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

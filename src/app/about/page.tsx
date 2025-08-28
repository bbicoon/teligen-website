import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '회사소개 - TELIGEN',
  description: '매장 자동화 솔루션의 미래를 선도하는 텔리젠의 비전과 가치.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CEO 메시지 */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CEO Message</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            "텔리젠은 단순히 기계를 판매하는 회사가 아닙니다. 저희는 기술을 통해 매장 운영의 어려움을 해결하고, 점주님들이 비즈니스의 본질에만 집중할 수 있는 환경을 만드는 것을 목표로 합니다. 고객의 성공이 곧 텔리젠의 성공이라는 믿음으로 최고의 솔루션을 제공하기 위해 끊임없이 연구하고 발전해 나가겠습니다."
          </p>
        </section>

        {/* 연혁 */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">연혁</h2>
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">2023년</time>
              <h3 className="text-lg font-semibold text-gray-900">앱링커 솔루션 출시</h3>
              <p className="text-base font-normal text-gray-500">모바일 원격 제어 앱 '앱링커' 출시 및 특허 출원.</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">2021년</time>
              <h3 className="text-lg font-semibold text-gray-900">유통 전문 POS 프로그램 개발</h3>
              <p className="text-base font-normal text-gray-500">중소형 마트 및 유통업을 위한 전문 POS 솔루션 출시.</p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">2019년</time>
              <h3 className="text-lg font-semibold text-gray-900">(주)텔리젠 법인 설립</h3>
              <p className="text-base font-normal text-gray-500">키오스크 및 무인결제 시스템 사업 시작.</p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

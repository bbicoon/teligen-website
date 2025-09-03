import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 - TELIGEN',
  description: '매장 자동화 솔루션의 미래를 선도하는 텔리젠의 비전과 가치.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CEO 메시지 */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CEO Message</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            &ldquo;텔리젠은 단순히 기계를 판매하는 회사가 아닙니다. 저희는 기술을 통해 매장 운영의 어려움을 해결하고, 점주님들이 비즈니스의 본질에만 집중할 수 있는 환경을 만드는 것을 목표로 합니다. 고객의 성공이 곧 텔리젠의 성공이라는 믿음으로 최고의 솔루션을 제공하기 위해 끊임없이 연구하고 발전해 나가겠습니다.&rdquo;
          </p>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '솔루션 - TELIGEN',
  description: '키오스크, 자동판매기, 유통포스, 앱링커 등 텔리젠의 혁신적인 매장 자동화 솔루션을 만나보세요.',
};

export default function SolutionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          솔루션
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          텔리젠의 핵심 솔루션인 키오스크, 자동판매기, 유통포스, 앱링커에 대한 상세 정보를 제공합니다.
        </p>
      </div>
    </main>
  );
}

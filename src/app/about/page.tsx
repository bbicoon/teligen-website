import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 - TELIGEN',
  description: '매장 자동화 솔루션의 미래를 선도하는 텔리젠의 비전과 가치.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          회사소개
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          매장 자동화 솔루션의 미래를 선도하는 텔리젠의 비전과 가치를 소개합니다.
        </p>
      </div>
    </main>
  );
}

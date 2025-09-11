"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-aurora"></div>
      </div>

      {/* 그리드 패턴 배경 */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          매장 자동화의 모든 것, TELIGEN
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          키오스크, 자동판매기부터 유통 전문 POS, 하이퍼엣지까지. 귀사의
          비즈니스에 필요한 최적의 자동화 솔루션을 제공합니다.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            asChild
          >
            <Link href="/business">사업 분야 전체 보기</Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 py-3 text-lg"
            asChild
          >
            <Link href="#contact">도입 문의하기</Link>
          </Button>
        </motion.div>
      </div>

      {/* 추가적인 시각적 효과 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </section>
  );
};

export default HeroSection;

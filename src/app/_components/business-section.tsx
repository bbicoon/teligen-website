import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MonitorSmartphone, Package, ShoppingCart } from "lucide-react";
import Image from "next/image";
// import { motion } from "framer-motion";

const BusinessSection = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut"
  //     }
  //   }
  // };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <div 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            텔리젠 핵심 사업 분야
          </h2>
        </div>

        {/* 솔루션 카드들 */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* 첫 번째 카드 - 키오스크 */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <MonitorSmartphone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  키오스크
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  다양한 업종에 최적화된 무인 주문 및 결제 시스템으로 운영 효율을 높여보세요.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 두 번째 카드 - 자동판매기 */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  자동판매기
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  최신 기술이 적용된 스마트 자판기로 24시간 무인 판매 솔루션을 구축할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 세 번째 카드 - 유통포스 프로그램 */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  유통포스 프로그램
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  재고 관리부터 고객 관리까지, 유통업에 특화된 전문 POS 프로그램으로 매장을 스마트하게 관리하세요.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* 네 번째 카드 - 앱링커 */}
          <div>
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  {/* 앱링커 아이콘 이미지 - webp 형식 사용 */}
                  <Image 
                    src="/applinker-icon.webp" 
                    alt="앱링커 아이콘" 
                    width={32} 
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  앱링커
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  언제 어디서든 모바일 앱으로 매장 장비를 원격으로 제어하고 상태를 확인할 수 있습니다.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

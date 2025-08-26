import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "솔루션",
      links: [
        { name: "AI 상담 솔루션", href: "/solutions" },
        { name: "무인결제 키오스크", href: "/solutions" },
      ],
    },
    {
      title: "회사",
      links: [
        { name: "회사소개", href: "/about" },
        { name: "뉴스룸", href: "/news" },
        { name: "채용", href: "/careers" },
      ],
    },
    {
      title: "고객지원",
      links: [
        { name: "도움말 센터", href: "/help" },
        { name: "서비스 약관", href: "/terms" },
        { name: "개인정보처리방침", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 1단: 로고 및 슬로건 */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">TELIGEN</h3>
              <p className="text-gray-300 leading-relaxed">
                AI 기술로 비즈니스를 혁신합니다.
              </p>
            </div>
          </div>

          {/* 2단, 3단, 4단: 링크 섹션들 */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          {/* 저작권 정보 */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TELIGEN Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

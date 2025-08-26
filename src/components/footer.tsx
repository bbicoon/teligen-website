import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "솔루션",
      links: [
        { name: "키오스크", href: "/solutions" },
        { name: "자동판매기", href: "/solutions" },
        { name: "유통포스 프로그램", href: "/solutions" },
        { name: "앱링커", href: "/solutions" },
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
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* 1단: 로고 및 회사 정보 */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">TELIGEN</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                매장 자동화의 모든 것
              </p>
              
              {/* 회사 주소 */}
              <div className="mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  서울특별시 금천구 가산디지털1로 196, 305호
                </p>
              </div>
              
              {/* 연락처 */}
              <div className="mb-4">
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">연락처:</span> 1577-2220
                </p>
              </div>
            </div>
          </div>

          {/* 2단, 3단: 링크 섹션들 */}
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

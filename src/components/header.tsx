"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "구축사례", href: "/portfolio" },
    { name: "미디어", href: "/media" },
  ];

  const businessItems = [
    { name: "키오스크", href: "/business/kiosk" },
    { name: "자동판매기", href: "/business/vending" },
    { name: "유통포스 프로그램", href: "/business/pos" },
    { name: "앱링커", href: "/business/applinker" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/teligen-logo.webp"
                alt="TELIGEN 로고"
                width={120}
                height={30}
                priority
              />
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* 사업 분야 드롭다운 */}
            <div 
              className="relative"
              onMouseEnter={() => setIsBusinessDropdownOpen(true)}
              onMouseLeave={() => setIsBusinessDropdownOpen(false)}
            >
              <Link
                href="/business"
                className={`${
                  pathname.startsWith('/business')
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-gray-900 transition-colors duration-200 font-medium`}
              >
                사업 분야
              </Link>
              
              {/* 드롭다운 메뉴 */}
              {isBusinessDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                  onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                >
                  {businessItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      } transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 일반 메뉴 아이템들 */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:text-gray-900 transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* 데스크톱 LOGIN 버튼 */}
          <div className="hidden md:block">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="https://service.teligen.co.kr" target="_blank">
                LOGIN
              </Link>
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {/* 사업 분야 */}
              <div>
                <Link
                  href="/business"
                  className={`block px-3 py-2 ${
                    pathname.startsWith('/business')
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  } hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  사업 분야
                </Link>
                <div className="ml-4 mt-1 space-y-1">
                  {businessItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-sm ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600"
                      } hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* 일반 메뉴 아이템들 */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  } hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="https://service.teligen.co.kr" target="_blank">
                    LOGIN
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MonitorSmartphone,
  Package,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const BusinessNav = () => {
  const pathname = usePathname();

  const businessItems = [
    {
      name: "키오스크",
      href: "/business/kiosk",
      icon: MonitorSmartphone,
    },
    {
      name: "자동판매기",
      href: "/business/vending",
      icon: Package,
    },
    {
      name: "유통포스 프로그램",
      href: "/business/pos",
      icon: ShoppingCart,
    },
    {
      name: "앱링커",
      href: "/business/applinker",
      icon: Smartphone,
    },
  ];

  return (
    <nav className="w-64 bg-white rounded-lg shadow-lg p-6 h-fit sticky top-24">
      <h2 className="text-xl font-bold text-slate-800 mb-6">사업 분야</h2>
      <ul className="space-y-2">
        {businessItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                    : "text-slate-600 hover:bg-gray-50 hover:text-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BusinessNav;

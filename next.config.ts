import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname, // 워크스페이스 루트 경고 해결
  images: {
    unoptimized: true, // 정적 내보내기와 호환되도록 이미지 최적화 비활성화
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

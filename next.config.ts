import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/trademark", destination: "/services/intellectual-property/trademark", permanent: true },
      { source: "/patent", destination: "/services/intellectual-property/patent", permanent: true },
      { source: "/design", destination: "/services/intellectual-property/design", permanent: true },
      { source: "/copyright", destination: "/services/intellectual-property/copyright", permanent: true },
    ];
  },
};

export default nextConfig;

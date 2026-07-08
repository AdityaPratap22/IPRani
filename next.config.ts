import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

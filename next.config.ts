import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"], // ✅ Ensures WebP optimization

    remotePatterns: [
      {
        protocol: "https",
        hostname: "gocricket-next-xu99.vercel.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // for demo; use optimized in production
  },
  // Integration points
  env: {
    // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    // NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    // NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    // ETSY_URL: process.env.ETSY_URL || "ETSY_URL_HERE",
    // PAYHIP_URL: process.env.PAYHIP_URL || "PAYHIP_URL_HERE",
  },
};

export default withNextIntl(nextConfig);

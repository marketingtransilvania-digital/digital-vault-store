"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CurrencySwitcher } from "./CurrencySwitcher";

const ETSY_URL = process.env.NEXT_PUBLIC_ETSY_URL || "ETSY_URL_HERE";
const PAYHIP_URL = process.env.NEXT_PUBLIC_PAYHIP_URL || "PAYHIP_URL_HERE";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">DIGITAL VAULT</h3>
            <p className="text-sm text-slate-400 mb-4">{t("tagline")}</p>
            <div className="flex flex-col gap-2">
              <LanguageSwitcher />
              <CurrencySwitcher />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t("shop")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-white">{t("shop")}</Link></li>
              <li><Link href="/categories" className="hover:text-white">{t("categories")}</Link></li>
              <li><Link href="/best-sellers" className="hover:text-white">Best Sellers</Link></li>
              <li><Link href="/about" className="hover:text-white">{t("about")}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-white">{t("faq")}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{t("contact")}</Link></li>
              <li><Link href="/privacy" className="hover:text-white">{t("privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-white">{t("terms")}</Link></li>
              <li><Link href="/refund" className="hover:text-white">{t("refund")}</Link></li>
              <li><Link href="/cookies" className="hover:text-white">{t("cookies")}</Link></li>
              <li><Link href="/license" className="hover:text-white">{t("license")}</Link></li>
            </ul>
          </div>

          {/* Find Us + Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">{t("findUs")}</h4>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href={ETSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition"
              >
                {t("etsy")}
              </a>
              <a
                href={PAYHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md transition"
              >
                {t("payhip")}
              </a>
            </div>
            <div className="flex gap-3 text-slate-400">
              {/* Placeholder social icons – replace URLs */}
              <a href="#" aria-label="TikTok" className="hover:text-white">TikTok</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
              <a href="#" aria-label="Pinterest" className="hover:text-white">Pin</a>
              <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
              <a href="#" aria-label="YouTube" className="hover:text-white">YT</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useCartStore } from "@/store/cart";
import { ShoppingCart, Search, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CurrencySwitcher } from "./CurrencySwitcher";

export function Header() {
  const t = useTranslations("nav");
  const tAnn = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.getItemCount());
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/shop", label: t("shop") },
    { href: "/categories", label: t("categories") },
    { href: "/best-sellers", label: t("bestSellers") },
    { href: "/about", label: t("about") },
    { href: "/faq", label: t("faq") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white text-center text-sm py-2 px-4">
        {tAnn("announcement")}
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                DIGITAL VAULT
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    pathname === item.href ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-gray-600 hover:text-indigo-600"
                aria-label={t("search")}
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <div className="hidden sm:block">
                <CurrencySwitcher />
              </div>

              <Link
                href="/cart"
                className="relative p-2 text-gray-600 hover:text-indigo-600"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              <button
                className="lg:hidden p-2 text-gray-600"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <LanguageSwitcher />
                <CurrencySwitcher />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

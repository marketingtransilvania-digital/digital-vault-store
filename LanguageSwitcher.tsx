"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ro", label: "RO", flag: "🇷🇴" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "nl", label: "NL", flag: "🇳🇱" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelect(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-gray-400 mr-1">🌐</span>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          disabled={isPending}
          className={`px-1.5 py-0.5 rounded font-medium transition-colors ${
            locale === lang.code
              ? "bg-indigo-100 text-indigo-700"
              : "text-gray-600 hover:text-indigo-600"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

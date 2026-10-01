"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white p-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-200">{t("message")}</p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm border border-slate-600 rounded-md hover:bg-slate-800"
          >
            {t("reject")}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

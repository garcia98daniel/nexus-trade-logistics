"use client";

import { useAppDispatch } from "@/redux/hooks";
import { setLocale } from "@/redux/ui/slice";
import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/types";

const LOCALES: Locale[] = ["es", "en"];

export default function LanguageToggle() {
  const dispatch = useAppDispatch();
  const { locale, t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="flex items-center gap-1 rounded-full border border-mist bg-cloud p-1"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => dispatch(setLocale(code))}
          aria-pressed={locale === code}
          className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
            locale === code ? "bg-navy text-white shadow" : "text-steel hover:text-navy"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

"use client";

import { Info } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export default function PendingNote({ dark = false }: { dark?: boolean }) {
  const { t } = useTranslation();
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
        dark ? "border-gold/30 bg-gold/10 text-gold" : "border-gold/40 bg-gold/10 text-gold-dark"
      }`}
    >
      <Info className="h-3.5 w-3.5" />
      {t.common.pending}
    </p>
  );
}

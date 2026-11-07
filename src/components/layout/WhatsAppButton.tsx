"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { whatsappUrl } from "@/lib/config";

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const href = whatsappUrl(t.whatsapp.message);
  const className =
    "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp.label} className={className}>
      <MessageCircle className="h-7 w-7" />
    </a>
  ) : (
    <Link href="/contacto" aria-label={t.whatsapp.label} className={className}>
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}

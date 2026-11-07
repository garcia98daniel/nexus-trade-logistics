"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { navItems, secondaryNavItems } from "@/lib/navigation";
import { siteConfig, whatsappUrl } from "@/lib/config";

export default function Footer() {
  const { t } = useTranslation();
  const wa = whatsappUrl();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-white p-1.5">
              <Image src="/images/logo-nexus.png" alt="" width={56} height={56} className="h-12 w-12" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-bold tracking-[0.3em]">NEXUS</span>
              <span className="mt-1 block text-[10px] tracking-[0.25em] text-mist">
                TRADE &amp; LOGISTICS
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/90">{t.footer.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.footer.navigation}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[...navItems, ...secondaryNavItems].map(({ href, key }) => (
              <li key={href}>
                <Link href={href} className="text-mist/90 transition-colors hover:text-white">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.footer.contact}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-mist/90">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              {siteConfig.email ? (
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              ) : (
                <span className="italic">{t.common.pending}</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gold" />
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  +{siteConfig.whatsapp}
                </a>
              ) : (
                <span className="italic">{t.common.pending}</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-mist/75 lg:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

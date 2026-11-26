"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/useTranslation";
import { navItems, secondaryNavItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/isotipo.jpg" alt="" width={64} height={64} className="h-14 w-14 rounded-xl object-contain" />
            <span className="leading-none">
              <span className="block text-lg font-bold tracking-[0.3em]">NEXUS</span>
              <span className="mt-1 block text-[10px] tracking-[0.25em] text-mist">
                TRADE &amp; LOGISTICS
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist/90">{t.footer.tagline}</p>
        </div>

        <div className="md:justify-self-end">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gold">
            {t.footer.navigation}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-2 text-sm sm:grid-cols-2">
            {[...navItems, ...secondaryNavItems].map(({ href, key }) => (
              <li key={href}>
                <Link href={href} className="text-mist/90 transition-colors hover:text-white">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
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

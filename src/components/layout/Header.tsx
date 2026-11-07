"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/redux/ui/slice";
import { selectMobileMenuOpen } from "@/redux/ui/selectors";
import { useTranslation } from "@/i18n/useTranslation";
import { navItems } from "@/lib/navigation";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const menuOpen = useAppSelector(selectMobileMenuOpen);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(closeMobileMenu());
  }, [pathname, dispatch]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-mist/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="NEXUS TRADE & LOGISTICS">
          <Image
            src="/images/logo-nexus.png"
            alt="NEXUS TRADE & LOGISTICS"
            width={64}
            height={64}
            priority
            className="h-14 w-14 object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex xl:hidden 2xl:flex">
            <span className="text-lg font-bold tracking-[0.3em] text-navy">NEXUS</span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.25em] text-steel">
              TRADE &amp; LOGISTICS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Principal">
          {navItems.map(({ href, key }) => (
            <Link
              key={href}
              href={href}
              className={`max-w-[11rem] rounded-full px-3.5 py-2 text-center text-sm font-medium leading-tight transition-colors ${
                isActive(href) ? "bg-cloud text-navy" : "text-steel hover:text-navy"
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link
            href="/contacto"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light md:inline-flex"
          >
            {t.nav.quote}
          </Link>
          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="rounded-lg p-2 text-navy xl:hidden"
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="border-t border-mist/60 bg-white xl:hidden" aria-label="Móvil">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {navItems.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(href) ? "bg-cloud text-navy" : "text-steel"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                href="/contacto"
                className="block rounded-full bg-navy px-5 py-3 text-center font-semibold text-white"
              >
                {t.nav.quote}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

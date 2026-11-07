"use client";

import Link from "next/link";
import { ArrowRight, Handshake, Search, Truck } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { useAppDispatch } from "@/redux/hooks";
import { setActiveCategory } from "@/redux/catalog/slice";
import { catalog } from "@/data/catalog";
import PageHeader from "@/components/ui/PageHeader";
import PendingNote from "@/components/ui/PendingNote";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { categoryIcons } from "@/components/catalog/categoryIcons";
import { CtaBand } from "@/components/home/HomeSections";
import { FeatureGrid, useContactNavigation } from "./shared";

export default function ExportsContent() {
  const { t, locale } = useTranslation();
  const page = t.exportsPage;
  const dispatch = useAppDispatch();
  const { requestQuote } = useContactNavigation();
  const altLocale = locale === "es" ? "en" : "es";

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} text={page.intro}>
        <Link href="/catalogo" className={buttonStyles.primary}>
          {page.catalogCta}
          <ArrowRight className="h-4 w-4" />
        </Link>
        <button type="button" onClick={() => requestQuote("export")} className={buttonStyles.secondary}>
          {page.quoteCta}
        </button>
        <div className="w-full">
          <PendingNote />
        </div>
      </PageHeader>

      <FeatureGrid eyebrow={page.eyebrow} title={page.howTitle} items={page.how} icons={[Search, Handshake, Truck]} />

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading dark eyebrow={page.eyebrow} title={page.offerTitle} text={page.offerText} />
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {catalog.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <li key={category.id}>
                  <Link
                    href="/catalogo"
                    onClick={() => dispatch(setActiveCategory(category.id))}
                    className="group flex h-full gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition-colors hover:border-gold/60 hover:bg-white/[0.1]"
                  >
                    <Icon className="h-7 w-7 shrink-0 text-gold" />
                    <span>
                      <span className="block font-semibold text-white">{category.name[locale]}</span>
                      <span className="mt-0.5 block text-xs uppercase tracking-wider text-gold/90">
                        {category.name[altLocale]}
                      </span>
                      <span className="mt-2 block text-sm text-mist/85">{category.description[locale]}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

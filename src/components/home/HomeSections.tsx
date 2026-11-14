"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Lightbulb, PackageOpen, Ship } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { whoWeAre } from "@/data/company";
import { catalog } from "@/data/catalog";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { categoryIcons } from "@/components/catalog/categoryIcons";

const services = [
  { icon: Ship, href: "/exportaciones" },
  { icon: PackageOpen, href: "/importaciones" },
  { icon: Lightbulb, href: "/consultoria-comercio-internacional" },
  { icon: Boxes, href: "/gestion-integral-de-operaciones" },
];

export function HomeServices() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={t.homeServices.eyebrow} title={t.homeServices.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.homeServices.items.map((item, i) => {
            const { icon: Icon, href } = services[i];
            return (
              <Link
                key={item.title}
                href={href}
                className="group rounded-3xl border border-mist bg-white p-8 transition-all hover:-translate-y-1 hover:border-navy hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cloud text-navy transition-colors group-hover:bg-navy group-hover:text-gold">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{item.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  {t.common.learnMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeAbout() {
  const { t, locale } = useTranslation();
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <SectionHeading eyebrow={t.homeAbout.eyebrow} title={t.homeAbout.title} />
        <div>
          <p className="text-lg leading-relaxed text-steel">{whoWeAre[locale][0]}</p>
          <p className="mt-4 leading-relaxed text-steel">{whoWeAre[locale][2]}</p>
          <Link href="/nosotros" className={`${buttonStyles.secondary} mt-8`}>
            {t.homeAbout.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeCatalogPreview() {
  const { t, locale } = useTranslation();
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading dark eyebrow={t.homeCatalog.eyebrow} title={t.homeCatalog.title} text={t.homeCatalog.text} />
          <Link href="/catalogo" className={buttonStyles.gold}>
            {t.homeCatalog.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {catalog.slice(0, 8).map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <li
                key={category.id}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition-colors hover:border-gold/60 hover:bg-white/[0.1]"
              >
                <Icon className="h-6 w-6 text-gold" />
                <p className="mt-4 font-semibold text-white">{category.name[locale]}</p>
                <p className="mt-1 text-xs text-mist/80">{category.name[locale === "es" ? "en" : "es"]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-16 text-center sm:px-14 sm:py-20">
          <Image
            src="/images/cta-handshake.jpg"
            alt={t.images.cta}
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-navy/75" />
          <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-gold/40" />
          <h2 className="relative mx-auto max-w-2xl font-serif text-3xl font-extrabold text-white sm:text-4xl">
            {t.ctaBand.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-mist/90">{t.ctaBand.text}</p>
          <Link href="/contacto" className={`${buttonStyles.gold} relative mt-8`}>
            {t.ctaBand.button}
          </Link>
        </div>
      </div>
    </section>
  );
}

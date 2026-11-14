"use client";

import Image from "next/image";
import Link from "next/link";
import { Plane, Ship, Truck } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { buttonStyles } from "@/components/ui/buttonStyles";

export default function Hero() {
  const { t } = useTranslation();
  const { hero } = t;

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[62%] rounded-br-[70%_45%] bg-cloud sm:h-[58%] lg:h-full lg:w-[64%] lg:rounded-br-[45%_80%]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <p className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-steel">
            <span className="h-[3px] w-11 rounded-full bg-gold" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 font-serif text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.25rem]">
            {hero.titleMain} <span className="text-gold">{hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">{hero.description}</p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <Link href="/catalogo" className={buttonStyles.primary}>
              {hero.primary}
            </Link>
            <Link href="/contacto" className={buttonStyles.secondary}>
              {hero.secondary}
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4">
            {hero.features.map((feature) => (
              <div key={feature.title}>
                <dt className="text-lg font-bold text-navy sm:text-xl">{feature.title}</dt>
                <dd className="mt-1 text-sm text-steel">{feature.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useTranslation();
  const modes = [
    { icon: Ship, label: t.hero.modes.sea, position: "left-4 top-6 sm:left-8" },
    { icon: Plane, label: t.hero.modes.air, position: "right-4 top-1/3 sm:right-8" },
    { icon: Truck, label: t.hero.modes.land, position: "left-6 bottom-20 sm:left-12" },
  ];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] bg-navy shadow-2xl shadow-navy/30">
        <Image
          src="/images/hero-port.jpg"
          alt={t.images.heroPort}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, (min-width: 448px) 448px, 100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/40" />
      </div>

      <div className="animate-float absolute -right-3 -top-5 rounded-full bg-white p-2 shadow-xl ring-4 ring-white/60 sm:-right-5">
        <Image src="/images/logo-nexus.png" alt="" width={96} height={96} className="h-20 w-20 object-contain" />
      </div>

      {modes.map(({ icon: Icon, label, position }) => (
        <div
          key={label}
          className={`absolute ${position} flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy shadow-lg`}
        >
          <Icon className="h-4 w-4 text-gold-dark" />
          {label}
        </div>
      ))}

      <p className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-center text-sm font-medium text-white backdrop-blur">
        {t.hero.visualCaption}
      </p>
    </div>
  );
}

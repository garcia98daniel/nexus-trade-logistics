"use client";

import { Compass, Globe, GraduationCap, RefreshCw } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { vision } from "@/data/company";
import PageHeader from "@/components/ui/PageHeader";
import PendingNote from "@/components/ui/PendingNote";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { CtaBand } from "@/components/home/HomeSections";
import { FeatureGrid, useContactNavigation } from "./shared";

export default function ConsultingContent() {
  const { t, locale } = useTranslation();
  const page = t.consultingPage;
  const { openContact } = useContactNavigation();

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} text={page.intro}>
        <button type="button" onClick={openContact} className={buttonStyles.primary}>
          {page.cta}
        </button>
        <div className="w-full">
          <PendingNote />
        </div>
      </PageHeader>

      <FeatureGrid
        eyebrow={page.eyebrow}
        title={page.areasTitle}
        items={page.areas}
        icons={[Compass, RefreshCw, GraduationCap, Globe]}
      />

      <section className="bg-navy py-20">
        <figure className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <figcaption className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{t.about.vision}</figcaption>
          <blockquote className="mt-6 font-serif text-2xl font-bold leading-snug text-white sm:text-3xl">
            “{vision[locale][1]}”
          </blockquote>
        </figure>
      </section>

      <CtaBand />
    </>
  );
}

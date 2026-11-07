"use client";

import { BarChart3, Handshake, Plane, Ship, Truck, Users } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { CtaBand } from "@/components/home/HomeSections";
import { FeatureGrid, useContactNavigation } from "./shared";

export default function OperationsContent() {
  const { t } = useTranslation();
  const page = t.operationsPage;
  const { requestQuote } = useContactNavigation();
  const modes = [
    { icon: Ship, label: t.hero.modes.sea },
    { icon: Plane, label: t.hero.modes.air },
    { icon: Truck, label: t.hero.modes.land },
  ];

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} text={page.intro}>
        <button type="button" onClick={() => requestQuote()} className={buttonStyles.primary}>
          {page.cta}
        </button>
      </PageHeader>

      <FeatureGrid
        eyebrow={page.eyebrow}
        title={page.stepsTitle}
        items={page.steps}
        icons={[Users, BarChart3, Truck, Handshake]}
        numbered
      />

      <section className="bg-navy py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <SectionHeading dark eyebrow={page.eyebrow} title={page.multimodalTitle} text={page.multimodalText} />
          <ul className="grid grid-cols-3 gap-4">
            {modes.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-6 text-center"
              >
                <Icon className="h-9 w-9 text-gold" />
                <span className="font-semibold text-white">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

"use client";

import { BarChart3, Handshake, Truck, Users } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import PageHeader from "@/components/ui/PageHeader";
import PendingNote from "@/components/ui/PendingNote";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { CtaBand } from "@/components/home/HomeSections";
import { FeatureGrid, useContactNavigation } from "./shared";

export default function ImportsContent() {
  const { t } = useTranslation();
  const page = t.importsPage;
  const { requestQuote } = useContactNavigation();

  return (
    <>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        text={page.intro}
        image={{ src: "/images/imports.jpg", alt: t.images.imports }}
      >
        <button type="button" onClick={() => requestQuote("import")} className={buttonStyles.primary}>
          {page.quoteCta}
        </button>
        <div className="w-full">
          <PendingNote />
        </div>
      </PageHeader>

      <FeatureGrid
        eyebrow={page.eyebrow}
        title={page.servicesTitle}
        items={page.services}
        icons={[Users, BarChart3, Truck, Handshake]}
        numbered
      />

      <CtaBand />
    </>
  );
}

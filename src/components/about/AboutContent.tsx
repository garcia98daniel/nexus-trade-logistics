"use client";

import { Compass, Target } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { history, mission, philosophy, valueProposition, values, vision, whoWeAre } from "@/data/company";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutContent() {
  const { t, locale } = useTranslation();
  const { about } = t;

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} />

      <TextBlock id="quienes-somos" eyebrow={about.eyebrow} title={about.whoWeAre} paragraphs={whoWeAre[locale]} />
      <TextBlock id="historia" eyebrow={about.eyebrow} title={about.history} paragraphs={history[locale]} muted />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          {[
            { icon: Target, title: about.mission, paragraphs: mission[locale] },
            { icon: Compass, title: about.vision, paragraphs: vision[locale] },
          ].map(({ icon: Icon, title, paragraphs }) => (
            <article key={title} className="rounded-3xl bg-navy p-8 text-white sm:p-10">
              <Icon className="h-9 w-9 text-gold" />
              <h2 className="mt-6 font-serif text-2xl font-extrabold">{title}</h2>
              {paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-mist/85">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading dark eyebrow={about.eyebrow} title={about.values} />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <li key={value.title.es} className="rounded-2xl border border-white/15 bg-white/[0.06] p-7">
                <span className="font-serif text-3xl font-extrabold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{value.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/85">{value.text[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TextBlock id="filosofia" eyebrow={about.eyebrow} title={about.philosophy} paragraphs={philosophy[locale]} />
      <TextBlock
        id="propuesta-de-valor"
        eyebrow={about.eyebrow}
        title={about.valueProposition}
        paragraphs={valueProposition[locale]}
        muted
      />
    </>
  );
}

interface TextBlockProps {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  muted?: boolean;
}

function TextBlock({ id, eyebrow, title, paragraphs, muted = false }: TextBlockProps) {
  return (
    <section id={id} className={`py-20 ${muted ? "bg-cloud" : "bg-white"}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="space-y-5">
          {paragraphs.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-steel">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

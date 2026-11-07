"use client";

import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks";
import { prefillQuote, setActiveForm } from "@/redux/contact/slice";
import type { OperationType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

export function useContactNavigation() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return {
    requestQuote: (operation?: OperationType) => {
      dispatch(prefillQuote({ operation }));
      router.push("/contacto");
    },
    openContact: () => {
      dispatch(setActiveForm("contact"));
      router.push("/contacto");
    },
  };
}

interface FeatureGridProps {
  eyebrow: string;
  title: string;
  items: { title: string; text: string }[];
  icons: LucideIcon[];
  numbered?: boolean;
  muted?: boolean;
}

export function FeatureGrid({ eyebrow, title, items, icons, numbered = false, muted = false }: FeatureGridProps) {
  return (
    <section className={`py-20 ${muted ? "bg-cloud" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ol
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
        >
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="rounded-3xl border border-mist bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-navy/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  {numbered && (
                    <span className="font-serif text-3xl font-extrabold text-mist">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-steel">{item.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveForm } from "@/redux/contact/slice";
import { selectActiveForm } from "@/redux/contact/selectors";
import { useTranslation } from "@/i18n/useTranslation";
import type { RequestKind } from "@/types";
import PageHeader from "@/components/ui/PageHeader";
import { ContactForm, QuoteForm } from "./RequestForms";

const TABS: RequestKind[] = ["quote", "contact"];

export default function ContactView() {
  const dispatch = useAppDispatch();
  const activeForm = useAppSelector(selectActiveForm);
  const { t } = useTranslation();

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />

      <section className="bg-white pb-24 pt-4">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-3xl border border-mist p-6 shadow-sm sm:p-10">
            <div role="tablist" className="mb-8 flex gap-2 rounded-full bg-cloud p-1.5">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeForm === tab}
                  onClick={() => dispatch(setActiveForm(tab))}
                  className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition-colors ${
                    activeForm === tab ? "bg-navy text-white shadow" : "text-steel hover:text-navy"
                  }`}
                >
                  {t.contact.tabs[tab]}
                </button>
              ))}
            </div>
            <div role="tabpanel">{activeForm === "quote" ? <QuoteForm /> : <ContactForm />}</div>
          </div>
        </div>
      </section>
    </>
  );
}

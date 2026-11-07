"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveForm } from "@/redux/contact/slice";
import { selectActiveForm } from "@/redux/contact/selectors";
import { useTranslation } from "@/i18n/useTranslation";
import { siteConfig, whatsappUrl } from "@/lib/config";
import type { RequestKind } from "@/types";
import PageHeader from "@/components/ui/PageHeader";
import { ContactForm, QuoteForm } from "./RequestForms";

const TABS: RequestKind[] = ["quote", "contact"];

export default function ContactView() {
  const dispatch = useAppDispatch();
  const activeForm = useAppSelector(selectActiveForm);
  const { t } = useTranslation();
  const wa = whatsappUrl(t.whatsapp.message);

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />

      <section className="bg-white pb-24 pt-4">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_320px] lg:px-8">
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

          <aside className="h-fit rounded-3xl bg-navy p-8 text-white">
            <h2 className="font-serif text-2xl font-extrabold">{t.contact.channels}</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <p className="flex items-center gap-2 text-sm font-semibold text-gold">
                  <Mail className="h-4 w-4" /> {t.contact.email}
                </p>
                {siteConfig.email ? (
                  <a href={`mailto:${siteConfig.email}`} className="mt-1 block break-all text-mist hover:text-white">
                    {siteConfig.email}
                  </a>
                ) : (
                  <p className="mt-1 text-sm italic text-mist/70">{t.common.pending}</p>
                )}
              </li>
              <li>
                <p className="flex items-center gap-2 text-sm font-semibold text-gold">
                  <MessageCircle className="h-4 w-4" /> {t.contact.whatsapp}
                </p>
                {wa ? (
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-1 block text-mist hover:text-white">
                    +{siteConfig.whatsapp}
                  </a>
                ) : (
                  <p className="mt-1 text-sm italic text-mist/70">{t.common.pending}</p>
                )}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

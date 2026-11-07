"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ALL_CATEGORIES, fetchCatalogRequest, setActiveCategory, setSearch } from "@/redux/catalog/slice";
import {
  selectActiveCategoryId,
  selectCatalogError,
  selectCatalogStatus,
  selectCategories,
  selectSearch,
  selectVisibleCategories,
} from "@/redux/catalog/selectors";
import { prefillQuote } from "@/redux/contact/slice";
import { useTranslation } from "@/i18n/useTranslation";
import type { Category } from "@/types";
import PageHeader from "@/components/ui/PageHeader";
import PendingNote from "@/components/ui/PendingNote";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { categoryIcons } from "./categoryIcons";

export default function CatalogView() {
  const dispatch = useAppDispatch();
  const { t, locale } = useTranslation();
  const status = useAppSelector(selectCatalogStatus);
  const error = useAppSelector(selectCatalogError);
  const categories = useAppSelector(selectCategories);
  const visible = useAppSelector(selectVisibleCategories);
  const activeId = useAppSelector(selectActiveCategoryId);
  const search = useAppSelector(selectSearch);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCatalogRequest());
  }, [status, dispatch]);

  return (
    <>
      <PageHeader dark eyebrow={t.catalog.eyebrow} title={t.catalog.title} text={t.catalog.text} />

      <section className="min-h-[50vh] bg-navy pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="sticky top-20 z-30 -mx-5 border-y border-white/15 bg-navy/95 px-5 py-4 backdrop-blur lg:-mx-8 lg:px-8">
            <label className="relative block">
              <span className="sr-only">{t.catalog.search}</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mist/70" />
              <input
                type="search"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder={t.catalog.search}
                className="w-full rounded-full border border-white/20 bg-white/10 py-3 pl-12 pr-4 text-white placeholder:text-mist/70 focus:border-gold focus:outline-none"
              />
            </label>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {[{ id: ALL_CATEGORIES, label: t.catalog.all }, ...categories.map((c) => ({ id: c.id, label: c.name[locale] }))].map(
                ({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => dispatch(setActiveCategory(id))}
                    aria-pressed={activeId === id}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      activeId === id
                        ? "border-gold bg-gold text-navy"
                        : "border-white/20 text-mist hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ),
              )}
            </div>
          </div>

          {status === "loading" && (
            <p className="flex items-center justify-center gap-3 py-20 text-mist/85">
              <Loader2 className="h-5 w-5 animate-spin" /> {t.catalog.loading}
            </p>
          )}

          {status === "failed" && (
            <div className="py-20 text-center">
              <p className="text-mist/80">
                {t.catalog.error} {error && <span className="text-mist/70">({error})</span>}
              </p>
              <button type="button" onClick={() => dispatch(fetchCatalogRequest())} className={`${buttonStyles.gold} mt-6`}>
                {t.catalog.retry}
              </button>
            </div>
          )}

          {status === "succeeded" && visible.length === 0 && (
            <p className="py-20 text-center text-mist/85">{t.catalog.empty}</p>
          )}

          {status === "succeeded" && (
            <div className="mt-10 space-y-8">
              {visible.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const { t, locale } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const Icon = categoryIcons[category.icon];
  const altLocale = locale === "es" ? "en" : "es";
  const productCount = category.subcategories.reduce((sum, s) => sum + s.products.length, 0);

  const requestQuote = (product: string) => {
    dispatch(prefillQuote({ operation: "export", product }));
    router.push("/contacto");
  };

  return (
    <article id={category.id} className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06]">
      <div className="grid md:grid-cols-[280px_1fr]">
        <div className="relative flex min-h-48 items-center justify-center bg-gradient-to-br from-steel to-navy-light">
          {category.image ? (
            <Image src={category.image} alt={category.name[locale]} fill className="object-cover" sizes="280px" />
          ) : (
            <Icon className="h-16 w-16 text-gold" aria-hidden />
          )}
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-white">{category.name[locale]}</h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold">{category.name[altLocale]}</p>
            </div>
            {productCount > 0 && (
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-mist/85">
                {productCount} {t.catalog.products}
              </span>
            )}
          </div>
          <p className="mt-4 text-mist/85">{category.description[locale]}</p>

          {category.subcategories.length === 0 && (
            <div className="mt-6">
              <PendingNote dark />
            </div>
          )}

          <div className="mt-6 space-y-6">
            {category.subcategories.map((sub) => (
              <div key={sub.id} className="border-t border-white/15 pt-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-mist">{sub.name[locale]}</h3>
                {sub.products.length === 0 ? (
                  <div className="mt-3">
                    <PendingNote dark />
                  </div>
                ) : (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {sub.products.map((product) => (
                      <li key={product.es}>
                        <button
                          type="button"
                          onClick={() => requestQuote(product[locale])}
                          title={t.catalog.requestQuote}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white transition-colors hover:border-gold hover:text-gold"
                        >
                          {product[locale]}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

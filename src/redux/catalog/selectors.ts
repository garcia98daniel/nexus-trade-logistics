import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { selectLocale } from "../ui/selectors";
import { ALL_CATEGORIES } from "./slice";

export const selectCatalogStatus = (state: RootState) => state.catalog.status;
export const selectCatalogError = (state: RootState) => state.catalog.error;
export const selectCategories = (state: RootState) => state.catalog.categories;
export const selectActiveCategoryId = (state: RootState) => state.catalog.activeCategoryId;
export const selectSearch = (state: RootState) => state.catalog.search;

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export const selectVisibleCategories = createSelector(
  [selectCategories, selectActiveCategoryId, selectSearch, selectLocale],
  (categories, activeId, search, locale) => {
    const byCategory =
      activeId === ALL_CATEGORIES ? categories : categories.filter((c) => c.id === activeId);
    const query = normalize(search);
    if (!query) return byCategory;

    return byCategory
      .map((category) => ({
        ...category,
        subcategories: category.subcategories
          .map((sub) => ({
            ...sub,
            products: sub.products.filter((p) => normalize(p[locale]).includes(query)),
          }))
          .filter((sub) => sub.products.length > 0),
      }))
      .filter(
        (category) =>
          category.subcategories.length > 0 || normalize(category.name[locale]).includes(query),
      );
  },
);

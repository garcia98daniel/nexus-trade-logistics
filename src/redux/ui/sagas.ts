import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import type { Locale } from "@/types";
import { appInit, setLocale } from "./slice";

const LOCALE_KEY = "nexus-locale";

const readLocale = (): Locale | null => {
  const value = window.localStorage.getItem(LOCALE_KEY);
  return value === "es" || value === "en" ? value : null;
};

const persistLocale = (locale: Locale) => {
  window.localStorage.setItem(LOCALE_KEY, locale);
  document.documentElement.lang = locale;
};

function* hydrateLocale(): SagaIterator {
  const saved = (yield call(readLocale)) as Locale | null;
  if (saved) yield put(setLocale(saved));
}

function* saveLocale(action: PayloadAction<Locale>): SagaIterator {
  yield call(persistLocale, action.payload);
}

export default function* uiSaga() {
  yield all([takeEvery(appInit.type, hydrateLocale), takeLatest(setLocale.type, saveLocale)]);
}

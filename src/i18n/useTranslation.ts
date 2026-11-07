"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectLocale } from "@/redux/ui/selectors";
import { dictionaries } from "./dictionaries";

export function useTranslation() {
  const locale = useAppSelector(selectLocale);
  return { t: dictionaries[locale], locale };
}

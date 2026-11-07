"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "@/redux/store";
import { appInit } from "@/redux/ui/slice";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) storeRef.current = makeStore();

  useEffect(() => {
    storeRef.current?.dispatch(appInit());
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}

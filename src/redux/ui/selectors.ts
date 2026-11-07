import type { RootState } from "../store";

export const selectLocale = (state: RootState) => state.ui.locale;
export const selectMobileMenuOpen = (state: RootState) => state.ui.mobileMenuOpen;

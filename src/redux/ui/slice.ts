import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Locale } from "@/types";

export interface UiState {
  locale: Locale;
  mobileMenuOpen: boolean;
}

const initialState: UiState = {
  locale: "es",
  mobileMenuOpen: false,
};

export const appInit = createAction("ui/appInit");

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
  },
});

export const { setLocale, toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, RequestStatus } from "@/types";

export interface CatalogState {
  categories: Category[];
  status: RequestStatus;
  error: string | null;
  activeCategoryId: string;
  search: string;
}

export const ALL_CATEGORIES = "all";

const initialState: CatalogState = {
  categories: [],
  status: "idle",
  error: null,
  activeCategoryId: ALL_CATEGORIES,
  search: "",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    fetchCatalogRequest(state) {
      state.status = "loading";
      state.error = null;
    },
    fetchCatalogSuccess(state, action: PayloadAction<Category[]>) {
      state.status = "succeeded";
      state.categories = action.payload;
    },
    fetchCatalogFailure(state, action: PayloadAction<string>) {
      state.status = "failed";
      state.error = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategoryId = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const {
  fetchCatalogRequest,
  fetchCatalogSuccess,
  fetchCatalogFailure,
  setActiveCategory,
  setSearch,
} = catalogSlice.actions;
export default catalogSlice.reducer;

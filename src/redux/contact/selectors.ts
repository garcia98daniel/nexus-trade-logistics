import type { RequestKind } from "@/types";
import type { RootState } from "../store";

export const selectActiveForm = (state: RootState) => state.contact.activeForm;
export const selectQuotePrefill = (state: RootState) => state.contact.prefill;
export const selectSubmission = (kind: RequestKind) => (state: RootState) =>
  state.contact.submissions[kind];

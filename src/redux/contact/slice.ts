import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { OperationType, RequestKind, RequestStatus, SubmitPayload } from "@/types";

export interface SubmissionState {
  status: RequestStatus;
  error: string | null;
  referenceId: string | null;
}

export interface QuotePrefill {
  operation?: OperationType;
  product?: string;
}

export interface ContactState {
  activeForm: RequestKind;
  prefill: QuotePrefill | null;
  submissions: Record<RequestKind, SubmissionState>;
}

const emptySubmission: SubmissionState = { status: "idle", error: null, referenceId: null };

const initialState: ContactState = {
  activeForm: "quote",
  prefill: null,
  submissions: { quote: { ...emptySubmission }, contact: { ...emptySubmission } },
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setActiveForm(state, action: PayloadAction<RequestKind>) {
      state.activeForm = action.payload;
    },
    prefillQuote(state, action: PayloadAction<QuotePrefill>) {
      state.prefill = action.payload;
      state.activeForm = "quote";
      state.submissions.quote = { ...emptySubmission };
    },
    clearPrefill(state) {
      state.prefill = null;
    },
    submitRequest(state, action: PayloadAction<SubmitPayload>) {
      state.submissions[action.payload.kind] = { status: "loading", error: null, referenceId: null };
    },
    submitSuccess(state, action: PayloadAction<{ kind: RequestKind; referenceId: string }>) {
      state.submissions[action.payload.kind] = {
        status: "succeeded",
        error: null,
        referenceId: action.payload.referenceId,
      };
    },
    submitFailure(state, action: PayloadAction<{ kind: RequestKind; error: string }>) {
      state.submissions[action.payload.kind] = {
        status: "failed",
        error: action.payload.error,
        referenceId: null,
      };
    },
    resetSubmission(state, action: PayloadAction<RequestKind>) {
      state.submissions[action.payload] = { ...emptySubmission };
    },
  },
});

export const {
  setActiveForm,
  prefillQuote,
  clearPrefill,
  submitRequest,
  submitSuccess,
  submitFailure,
  resetSubmission,
} = contactSlice.actions;
export default contactSlice.reducer;

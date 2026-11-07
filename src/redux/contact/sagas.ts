import type { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { api, getErrorMessage } from "@/services/api";
import type { SubmitPayload } from "@/types";
import { submitFailure, submitRequest, submitSuccess } from "./slice";

function* handleSubmit(action: PayloadAction<SubmitPayload>): SagaIterator {
  const { kind } = action.payload;
  try {
    const { referenceId } = (yield call(api.submitRequest, action.payload)) as {
      referenceId: string;
    };
    yield put(submitSuccess({ kind, referenceId }));
  } catch (error) {
    yield put(submitFailure({ kind, error: getErrorMessage(error) }));
  }
}

export default function* contactSaga() {
  yield takeEvery(submitRequest.type, handleSubmit);
}

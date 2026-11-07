import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { api, getErrorMessage } from "@/services/api";
import type { Category } from "@/types";
import { fetchCatalogFailure, fetchCatalogRequest, fetchCatalogSuccess } from "./slice";

function* fetchCatalog(): SagaIterator {
  try {
    const categories = (yield call(api.fetchCatalog)) as Category[];
    yield put(fetchCatalogSuccess(categories));
  } catch (error) {
    yield put(fetchCatalogFailure(getErrorMessage(error)));
  }
}

export default function* catalogSaga() {
  yield takeLatest(fetchCatalogRequest.type, fetchCatalog);
}

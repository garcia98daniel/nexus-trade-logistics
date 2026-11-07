import { all, fork } from "redux-saga/effects";
import uiSaga from "./ui/sagas";
import catalogSaga from "./catalog/sagas";
import contactSaga from "./contact/sagas";

export default function* rootSaga() {
  yield all([fork(uiSaga), fork(catalogSaga), fork(contactSaga)]);
}

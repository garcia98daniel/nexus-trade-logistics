import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import uiReducer from "./ui/slice";
import catalogReducer from "./catalog/slice";
import contactReducer from "./contact/slice";
import rootSaga from "./sagas";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      ui: uiReducer,
      catalog: catalogReducer,
      contact: contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

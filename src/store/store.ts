import createSagaMiddleware from "redux-saga";
import UserReducerState from "../reducers/UserReducer";
import RootSaga from "../saga/RootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: UserReducerState,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});
sagaMiddleware.run(RootSaga);

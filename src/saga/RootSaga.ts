import { takeEvery } from "redux-saga/effects";
import { ApiConstants } from "../constants/ApiConstants";
import { getAllUserSaga, loginSaga, logoutSaga } from "./UserSaga";

export default function* RootSaga() {
  yield takeEvery(ApiConstants.API_LOGIN_LOAD, loginSaga);
  yield takeEvery(ApiConstants.API_LOGOUT_LOAD, logoutSaga);
  yield takeEvery(ApiConstants.API_GET_ALL_USER_LOAD, getAllUserSaga);
}

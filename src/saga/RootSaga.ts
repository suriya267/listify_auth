import { takeEvery } from "redux-saga/effects";
import { ApiConstants } from "../constants/ApiConstants";
import {
  createUserSaga,
  deleteUserSaga,
  editUserSaga,
  getAllUserSaga,
  loginSaga,
  logoutSaga,
} from "./UserSaga";

export default function* RootSaga() {
  yield takeEvery(ApiConstants.API_LOGIN_LOAD, loginSaga);
  yield takeEvery(ApiConstants.API_LOGOUT_LOAD, logoutSaga);
  yield takeEvery(ApiConstants.API_GET_ALL_USER_LOAD, getAllUserSaga);
  yield takeEvery(ApiConstants.API_DELETE_USER_LOAD, deleteUserSaga);
  yield takeEvery(ApiConstants.API_CREATE_USER_LOAD, createUserSaga);
    yield takeEvery(ApiConstants.API_EDIT_USER_LOAD, editUserSaga);

}

import { call, put } from "redux-saga/effects";
import { userAxiosApi } from "./Axios";
import type { SagaIterator } from "redux-saga";
import { ApiConstants } from "../constants/ApiConstants";
import { toast } from "react-toastify";

function* failSaga(result: any) {
  yield put({ type: ApiConstants.API_USER_FAIL });
  let msg = result.result.data
    ? result.result.data.message
    : "Something went wrong";
  toast.error(msg);
}

function* errorSaga(error: any) {
  yield put({
    type: ApiConstants.API_SERVER_ERROR,
    error: error,
    status: error.status,
  });

  toast.error("Something went wrong");
}

function* loginSaga(action: any): SagaIterator {
  try {
    const result = yield call(userAxiosApi.login, action.payload);
    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_LOGIN_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

function* logoutSaga(): SagaIterator {
  try {
    const result = yield call(userAxiosApi.logout);
    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_LOGOUT_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

function* getAllUserSaga(action: any): SagaIterator {
  try {
    const result = yield call(userAxiosApi.getAllUser, action.payload);
    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_GET_ALL_USER_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

function* deleteUserSaga(action: any): SagaIterator {
  try {
    const result = yield call(userAxiosApi.deleteUser, action.payload);

    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_DELETE_USER_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

function* createUserSaga(action: any): SagaIterator {
  try {
    const result = yield call(userAxiosApi.createUser, action.payload);
    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_CREATE_USER_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

function* editUserSaga(action: any): SagaIterator {
  try {
    const result = yield call(userAxiosApi.editUsere, action.payload);
    if (result.status === 1) {
      yield put({
        type: ApiConstants.API_EDIT_USER_SUCCESS,
        result: result.result.data,
        status: result.status,
      });
    } else {
      yield call(failSaga, result);
    }
  } catch (error) {
    yield call(errorSaga, error);
  }
}

export {
  loginSaga,
  logoutSaga,
  getAllUserSaga,
  deleteUserSaga,
  createUserSaga,
  editUserSaga,
};

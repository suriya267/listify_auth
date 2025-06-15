import { ApiConstants } from "../constants/ApiConstants";

const loginAction = (payload: any) => {
  return {
    type: ApiConstants.API_LOGIN_LOAD,
    payload: payload,
  };
};

const logoutAction = () => {
  return {
    type: ApiConstants.API_LOGOUT_LOAD,
  };
};

const getAllUserAction = (payload: number) => {
  return {
    type: ApiConstants.API_GET_ALL_USER_LOAD,
    payload: payload,
  };
};

const deleteUserAction = (payload: number) => {
  return {
    type: ApiConstants.API_DELETE_USER_LOAD,
    payload: payload,
  };
};

const createUserAction = (payload: any) => {
  return {
    type: ApiConstants.API_CREATE_USER_LOAD,
    payload: payload,
  };
};

const editUserAction = (payload: any) => {
  return {
    type: ApiConstants.API_EDIT_USER_LOAD,
    payload: payload,
  };
};

export {
  loginAction,
  logoutAction,
  getAllUserAction,
  deleteUserAction,
  createUserAction,
  editUserAction,
};

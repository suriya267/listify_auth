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

const getAllUserAction = (payload: any) => {
  return {
    type: ApiConstants.API_GET_ALL_USER_LOAD,
    payload: payload,
  };
};

export { loginAction, logoutAction, getAllUserAction };

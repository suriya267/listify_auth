import { ApiConstants } from "../constants/ApiConstants";
import { setAuthToken } from "../utils/localStorage";

const initialState = {
  loginLoad: false,
  logoutLoad: false,
  getAllUserLoad: false,
  getAllUser: null,
};

export default function UserReducerState(
  state: any = initialState,
  action: any
) {
  switch (action.type) {
    case ApiConstants.API_LOGIN_LOAD:
      return {
        ...state,
        loginLoad: true,
      };

    case ApiConstants.API_LOGIN_SUCCESS:
      setAuthToken(action?.result.token);
      return {
        ...state,
        loginLoad: false,
      };

    case ApiConstants.API_LOGOUT_LOAD:
      return {
        ...state,
        logoutLoad: true,
      };

    case ApiConstants.API_LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoad: false,
      };

    case ApiConstants.API_GET_ALL_USER_LOAD:
      return {
        ...state,
        getAllUserLoad: true,
      };

    case ApiConstants.API_GET_ALL_USER_SUCCESS:
      return {
        ...state,
        getAllUserLoad: false,
        getAllUser: action?.result,
      };

    default:
      return state;
  }
}

import { ApiConstants } from "../constants/ApiConstants";
import { setAuthToken } from "../utils/localStorage";

const initialState = {
  loginLoad: false,
  logoutLoad: false,
  getAllUserLoad: false,
  getAllUser: null,
  deleteUserLoad: false,
  createUserLoad: false,
  editUserLoad: false,
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

    case ApiConstants.API_DELETE_USER_LOAD:
      return {
        ...state,
        deleteUserLoad: true,
      };

    case ApiConstants.API_DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserLoad: false,
      };

    case ApiConstants.API_CREATE_USER_LOAD:
      return {
        ...state,
        createUserLoad: true,
      };

    case ApiConstants.API_CREATE_USER_SUCCESS:
      return {
        ...state,
        createUserLoad: false,
      };

    case ApiConstants.API_EDIT_USER_LOAD:
      return {
        ...state,
        editUserLoad: true,
      };

    case ApiConstants.API_EDIT_USER_SUCCESS:
      return {
        ...state,
        editUserLoad: false,
      };

    default:
      return state;
  }
}

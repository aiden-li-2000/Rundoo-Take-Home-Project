import * as actions from "../actions/types";

const initialState = {
  // check user's web browser's local storage for access and refresh tokens
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

export default function authReducer(
  state = initialState,
  action: actions.AuthActions
) {
  const { type, payload } = action;

  switch (type) {
    case actions.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actions.AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actions.LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };
    case actions.LOGIN_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    case actions.LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actions.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    case actions.USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };
    case actions.SIGNUP_FAIL:
    case actions.PASSWORD_RESET_SUCCESS:
    case actions.PASSWORD_RESET_FAIL:
    case actions.PASSWORD_RESET_CONFIRM_SUCCESS:
    case actions.PASSWORD_RESET_CONFIRM_FAIL:
    case actions.ACTIVATION_SUCCESS:
    case actions.ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

import { makeConstantCreator, makeActionCreator } from "../../utils/reduxUtils";

export const UserTypes = makeConstantCreator(
  "LOGIN",
  "LOGIN_USER_FAIL",
  "LOGIN_USER_SUCCESS",
  "LOGOUT",
  "GET_CURRENT_USER",
);

// Login
export const loginAction = params => makeActionCreator(UserTypes.LOGIN, { params });
export const loginSuccessAction = respone => makeActionCreator(UserTypes.LOGIN_USER_SUCCESS, { respone });
export const loginFailureAction = error => makeActionCreator(UserTypes.LOGIN_USER_FAIL, { error });

// Logout
export const logout = () => makeActionCreator(UserTypes.LOGOUT);
// User
export const getCurentUser = () => makeActionCreator(UserTypes.GET_CURRENT_USER);

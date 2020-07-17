import { makeReducerCreator } from '../../utils/reduxUtils';
import { UserTypes } from './actions';

// Setup inintial state for app
export const initialState = {
  isAuthenticated: !!localStorage.getItem('sessionToken'),
  data: {
    fullName: localStorage.getItem('fullName') || '',
    //id: localStorage.getItem('id'),
    //avatar: localStorage.getItem('avatar') || '',
  },
  // isAuthenticated: true,
  // data: {
  //   fullName: "hieu",
  //   id: 1,
  //   avatar: "default.jpg",
  // },
  role: '',
  phoneRegister: '',
  isShowLoading: false,
  loginError: false,
  loginSuccess: false,
  registerError: false,
  registerSuccess: false,
  verifyError: false,
  verifySuccess: false,
};
// End setup

// Login
const loginSuccess = (state, { response }) => {
  const { data } = state;
  data.fullName = response.fullName;
  //data.id = respone.id;
  //data.avatar = respone.avatar;
  return {
    ...state,
    data,
    role: response.role.name,
    isShowLoading: false,
    isAuthenticated: true,
    loginError: false,
    loginSuccess: true,
  };
};

const loginFail = (state, { error }) => ({
  ...state,
  isShowLoading: false,
  isAuthenticated: false,
  loginError: error,
  loginSuccess: false,
});

// Register
const registerSuccess = (state, { response }) => {
  return {
    ...state,
    phoneRegister: response.phoneNumber,
    isShowLoading: false,
    registerError: false,
    registerSuccess: true,
  };
};

const registerFail = (state, { error }) => ({
  ...state,
  isShowLoading: false,
  registerError: error,
  registerSuccess: false,
});

// Verify
const verifySuccess = (state, { response }) => {
  return {
    ...state,
    isShowLoading: false,
    verifyError: false,
    verifySuccess: true,
  };
};

const verifyFail = (state, { error }) => ({
  ...state,
  isShowLoading: false,
  verifyError: error,
  verifySuccess: false,
});

const logout = () => ({
  ...initialState,
  data: {},
  isAuthenticated: false,
});

const loginLoading = (state) => ({
  ...state,
  isShowLoading: true,
});

export const user = makeReducerCreator(initialState, {
  [UserTypes.LOGIN_USER_SUCCESS]: loginSuccess,
  [UserTypes.LOGIN_USER_FAIL]: loginFail,
  [UserTypes.REGISTER_USER_SUCCESS]: registerSuccess,
  [UserTypes.REGISTER_USER_FAIL]: registerFail,
  [UserTypes.VERIFY_USER_SUCCESS]: verifySuccess,
  [UserTypes.VERIFY_USER_FAIL]: verifyFail,
  [UserTypes.LOGOUT]: logout,
  [UserTypes.LOGIN]: loginLoading,
});

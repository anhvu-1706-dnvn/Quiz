import { takeEvery, put, call } from 'redux-saga/effects';
import {
  UserTypes,
  loginSuccessAction,
  loginFailureAction,
  registerSuccessAction,
  registerFailureAction,
  verifySuccessAction,
  verifyFailureAction,
} from './actions';
import { loginApi, registerApi, verifyApi } from '../../api/modules/auth';
import { apiWrapper } from '../../utils/reduxUtils';

function* loginSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      loginApi,
      params,
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      localStorage.setItem('fullName', response.fullName);
      // localStorage.setItem('id', response.id);
      // localStorage.setItem('avatar', response.avatar);
      localStorage.setItem('role', response.role.name);
      yield put(loginSuccessAction(response));
    } else {
      yield put(loginFailureAction(response));
    }
  } catch (error) {
    yield put(loginFailureAction(error));
  }
}

function* registerSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      registerApi,
      params,
    );
    yield put(registerSuccessAction(response));
  } catch (error) {
    yield put(registerFailureAction(error));
  }
}

function* verifySaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      verifyApi,
      params,
    );
    yield put(verifySuccessAction(response));
  } catch (error) {
    yield put(verifyFailureAction(error));
  }
}

function logoutSaga() {
  if (localStorage.getItem('sessionToken')) {
    localStorage.clear('sessionToken');
    localStorage.clear('fullName');
    localStorage.clear('id');
  }
}
export default [
  takeEvery(UserTypes.LOGIN, loginSaga),
  takeEvery(UserTypes.REGISTER, registerSaga),
  takeEvery(UserTypes.VERIFY, verifySaga),
  takeEvery(UserTypes.LOGOUT, logoutSaga),
];

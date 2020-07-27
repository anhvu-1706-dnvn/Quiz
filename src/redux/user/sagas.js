import { takeEvery, put, call } from 'redux-saga/effects';
import moment from 'moment';
import {
  UserTypes,
  loginSuccessAction,
  loginFailureAction,
  registerSuccessAction,
  registerFailureAction,
  verifySuccessAction,
  verifyFailureAction,
  getListUserSuccessAction,
  getTopContributeSuccessAction,
} from './actions';
import { loginApi, registerApi, verifyApi } from '../../api/modules/auth';
import { apiWrapper } from '../../utils/reduxUtils';
import { getAllApi } from '../../api/common/crud';

function* loginSaga({ params }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      loginApi,
      params
    );
    if (response.token) {
      localStorage.setItem('sessionToken', response.token);
      localStorage.setItem('fullName', response.fullName);
      localStorage.setItem('id', response.id);
      // localStorage.setItem('avatar', response.avatar);
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
      params
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
      params
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

function* listUserSaga() {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      getAllApi,
      'users',
      { limit: 500, offset: 0, orderBy: 'id' }
    );
    const results = response.results.map((e, idx) => ({
      ...e,
      key: idx,
      role: e.role?.name,
      createdAt: moment(e.createdAt).format('LL'),
    }));
    yield put(getListUserSuccessAction(results));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
function* getTopContribute() {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
      },
      getAllApi,
      'users/statistic/top'
    );
    yield put(getTopContributeSuccessAction(response));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default [
  takeEvery(UserTypes.LOGIN, loginSaga),
  takeEvery(UserTypes.REGISTER, registerSaga),
  takeEvery(UserTypes.VERIFY, verifySaga),
  takeEvery(UserTypes.LOGOUT, logoutSaga),
  takeEvery(UserTypes.GET_LIST_USER, listUserSaga),
  takeEvery(UserTypes.GET_TOP_CONTRIBUTE, getTopContribute),
];

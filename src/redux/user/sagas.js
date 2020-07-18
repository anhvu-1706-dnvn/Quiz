import { takeEvery, put, call } from "redux-saga/effects";
import {
  UserTypes,
  loginSuccessAction,
  loginFailureAction,
} from "./actions";
import { loginApi } from "../../api/modules/auth";
import { apiWrapper } from "../../utils/reduxUtils";


function* loginSaga({
  params,
}) {
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
      localStorage.setItem("sessionToken", response.token);
      localStorage.setItem("fullName", response.fullName)
      localStorage.setItem("id", response.id);
      localStorage.setItem("avatar", response.avatar);
      yield put(loginSuccessAction(response));
    } else {
      yield put(loginFailureAction(response));
    }
  } catch (error) {
    yield put(loginFailureAction(error));    
  }
}

function logoutSaga() {
  if (localStorage.getItem("sessionToken")) {
    localStorage.clear('sessionToken');
    localStorage.clear('fullName');
    localStorage.clear('id');
  }
}
export default [
  takeEvery(UserTypes.LOGIN, loginSaga),
  takeEvery(UserTypes.LOGOUT, logoutSaga),
];

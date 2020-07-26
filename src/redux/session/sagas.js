import { takeEvery, put, call } from 'redux-saga/effects';

import {
  SessionTypes,
  createOneSessionSuccessAction,
  createOneSessionFailureAction,
  getOneSessionSuccessAction,
  getOneSessionFailureAction,
} from './actions';
import { postApi, getResultDataByIdApi } from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* createSessionSaga({ payload }) {
  try {
    const data = yield call(
      apiWrapper,
      {
        isShowLoading: false,
        isShowSucceedNoti: false,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'sessions',
      payload
    );
    yield put(createOneSessionSuccessAction(data));
  } catch (error) {
    yield put(createOneSessionFailureAction(error));
  }
}

function* getSessionSaga({ id }) {
  try {
    const data = yield call(
      apiWrapper,
      {
        isShowLoading: false,
        isShowSucceedNoti: false,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      getResultDataByIdApi,
      'sessions',
      id
    );
    yield put(getOneSessionSuccessAction(data));
  } catch (error) {
    yield put(getOneSessionFailureAction());
  }
}

export default [
  takeEvery(SessionTypes.CREATE_ONE_SESSION_ACTION, createSessionSaga),
  takeEvery(SessionTypes.GET_ONE_SESSION_ACTION, getSessionSaga),
];

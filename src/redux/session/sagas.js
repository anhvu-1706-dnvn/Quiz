import { takeEvery, put, call } from 'redux-saga/effects';

import {
  SessionTypes,
  createOneSessionSuccessAction,
  createOneSessionFailureAction,
} from './actions';
import { postApi } from '../../api/common/crud';
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
      payload,
    );
    yield put(createOneSessionSuccessAction(data));
  } catch (error) {
    yield put(createOneSessionFailureAction(error));
  }
}

export default [
  takeEvery(SessionTypes.CREATE_ONE_SESSION_ACTION, createSessionSaga),
];

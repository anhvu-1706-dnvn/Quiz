import { takeEvery, put, call } from 'redux-saga/effects';

import {
  UserAnswerTypes,
  createOneUserAnswerSuccessAction,
  createOneUserAnswerFailureAction,
} from './actions';
import { postApi } from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* createUserAnswerSaga({ payload }) {
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
      'user-answers',
      payload
    );
    yield put(createOneUserAnswerSuccessAction(data));
  } catch (error) {
    yield put(createOneUserAnswerFailureAction(error));
  }
}

export default [
  takeEvery(
    UserAnswerTypes.CREATE_ONE_USER_ANSWER_ACTION,
    createUserAnswerSaga
  ),
];

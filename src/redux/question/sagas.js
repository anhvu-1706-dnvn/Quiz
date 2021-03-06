import { takeEvery, put, call } from 'redux-saga/effects';
import moment from 'moment';
import {
  QuestionTypes,
  getListQuestionByTestSuccessAction,
  getListQuestionByTestFailureAction,
  createOneQuestionSuccessAction,
  createOneQuestionFailureAction,
  updateOneQuestionSuccessAction,
  updateOneQuestionFailureAction,
  getOneQuestionSuccessAction,
  getOneQuestionFailureAction,
  deleteOneQuestionSuccessAction,
  deleteOneQuestionFailureAction,
  updateCurrentQuestion,
  deleteListQuestion,
} from './actions';
// import {data} from './tempData'
import {
  delApi,
  putApi,
  postApi,
  getAllApi,
  getDataByIdApi,
} from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* getListQuestion({ limit, offset, filter, orderBy, fields }) {
  try {
    if (limit === undefined) {
      limit = 50;
    }
    if (offset === undefined) {
      offset = 0;
    }

    const { results, total } = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: 'Error',
      },
      getAllApi,
      'questions',
      {
        limit,
        offset,
        filter,
        orderBy,
        fields,
      }
    );

    const data = results.map((e) => ({
      // name: e.name,
      id: e.id,
      content: e.content,
      time: e.time,
      score: e.score,
      minimumScore: e.minimumScore,
      answers: e.answers,
      // key: e.id,
      // status: e.isVisible,
      // happenAt: moment(e.happenAt).format('L'),
      // locationDescription: e.locationDescription,
    }));

    yield put(getListQuestionByTestSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListQuestionByTestFailureAction(error));
  }
}

function* createOneQuestion({ payload }) {
  try {
    const data = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'questions',
      payload
    );
    yield put(createOneQuestionSuccessAction(data));
  } catch (error) {
    yield put(createOneQuestionFailureAction());
  }
}

function* updateOneQuestion({ id, payload }) {
  try {
    // delete payload.key;
    payload = {
      testId: payload.testId,
      answers: payload.answers,
      content: payload.content,
      time: payload.time,
      minimumScore: payload.minimumScore,
      score: payload.score,
    };
    yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Updated Successfully',
        errorDescription: 'Error',
      },
      putApi,
      'questions',
      id,
      payload
    );
    yield put(updateOneQuestionSuccessAction());
  } catch (error) {
    yield put(updateOneQuestionFailureAction());
  }
}

function* getOne({ id }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: 'Error',
      },
      getDataByIdApi,
      'questions',
      id
    );
    // console.log(response);

    const data = {
      id: response.id,
      name: response.name,
      content: response.name,
      locationDescription: response.locationDescription,
      happenAt: moment(response.happenAt).format('L'),
      isVisible: response.isVisible,
    };
    // console.log(data);

    yield put(getOneQuestionSuccessAction(data));
  } catch (error) {
    yield put(getOneQuestionFailureAction(error));
  }
}

function* deleteOne({ id }) {
  try {
    yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Deleted Successfully',
        errorDescription: 'Error',
      },
      delApi,
      'questions',
      id
    );

    yield put(deleteOneQuestionSuccessAction(id));
  } catch (error) {
    yield put(deleteOneQuestionFailureAction());
  }
}

function updateLCurrentQuestionSaga({ data }) {
  updateCurrentQuestion(data);
}

function deleteListQuestionSaga() {
  deleteListQuestion();
}

export default [
  takeEvery(QuestionTypes.GET_LIST_QUESTION_BY_TEST, getListQuestion),
  takeEvery(QuestionTypes.CREATE_ONE_QUESTION, createOneQuestion),
  takeEvery(QuestionTypes.UPDATE_ONE_QUESTION, updateOneQuestion),
  takeEvery(QuestionTypes.GET_ONE_QUESTION, getOne),
  takeEvery(QuestionTypes.DELETE_ONE_QUESTION, deleteOne),
  takeEvery(QuestionTypes.UPDATE_CURRENT_QUESTION, updateLCurrentQuestionSaga),
  takeEvery(QuestionTypes.DELETE_LIST_QUESTION, deleteListQuestionSaga),
];

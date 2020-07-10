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
} from './actions';
// import {data} from './tempData'
import {
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
    // if (fields === undefined) {
    //   fields = `["id", "name"]`;
    // }
    // if (orderBy == undefined) {
    //   orderBy = '-id';
    // }
    // console.log(
    //   limit, offset, filter , orderBy, fields,
    // );

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
    // console.log(results);

    const data = results.map((e) => ({
      //name: e.name,
      id: e.id,
      content: e.content,
      time: e.time,
      score: e.score,
      minimumScore: e.minimumScore,
      answers: e.answers,
      //key: e.id,
      // status: e.isVisible,
      // happenAt: moment(e.happenAt).format('L'),
      // locationDescription: e.locationDescription,
    }));
    // console.log(data);

    yield put(getListQuestionByTestSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListQuestionByTestFailureAction(error));
  }
}

function* createOneQuestion({ payload }) {
  try {
    yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Added Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'questions',
      payload
    );
    yield put(createOneQuestionSuccessAction());
  } catch (error) {
    yield put(createOneQuestionFailureAction());
  }
}

function* updateOneQuestion({ id, payload }) {
  try {
    // console.log(id);
    // console.log(payload);
    payload = {
      name: payload.name,
      code: payload.code,
      isVisible: payload.status,
    };
    yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Sửa thành công',
        errorDescription: 'Có lỗi xảy ra',
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
        errorDescription: 'Có lỗi xảy ra',
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

export default [
  takeEvery(QuestionTypes.GET_LIST_QUESTION_BY_TEST, getListQuestion),
  takeEvery(QuestionTypes.CREATE_ONE_QUESTION, createOneQuestion),
  takeEvery(QuestionTypes.UPDATE_ONE_QUESTION, updateOneQuestion),
  takeEvery(QuestionTypes.GET_ONE_QUESTION, getOne),
];

import { takeEvery, put, call } from 'redux-saga/effects';
// import moment from 'moment';
import {
  TestTypes,
  getListTestSuccessAction,
  getListTestFailureAction,
  createOneTestSuccessAction,
  createOneTestFailureAction,
  updateOneTestSuccessAction,
  updateOneTestFailureAction,
  getOneTestSuccessAction,
  getOneTestFailureAction,
} from './actions';
// import {data} from './tempData'
import {
  putApi,
  postApi,
  getDataByIdApi,
  getAllApi,
} from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* getListTest({ limit, offset, filter, orderBy, fields }) {
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
      'tests',
      {
        limit,
        offset,
        filter,
        orderBy,
        fields,
      },
    );

    const data = results.map((e) => ({
      name: e.name,
      id: e.id,
      key: e.id,
      image: e.image,
      description: e.description,
      isPublic: !e.isDraft,
    }));

    yield put(getListTestSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListTestFailureAction(error));
  }
}

function* createOneTest({ payload }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'tests',
      payload,
    );
    const data = {
      id: response.id,
      name: response.name,
      tags: response.tags,
      description: response.description,
      image: response.image,
      isPublic: !response.isDraft,
    };
    yield put(createOneTestSuccessAction(data));
  } catch (error) {
    yield put(createOneTestFailureAction(error));
  }
}

function* updateOneTest({ id, payload }) {
  try {
    delete payload.key;
    const data = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Updated Successfully',
        errorDescription: 'Error',
      },
      putApi,
      'tests',
      id,
      payload,
    );
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: 'Error',
      },
      getDataByIdApi,
      'tests',
      id,
    );
    data.tags = response.tags;
    yield put(updateOneTestSuccessAction(data));
  } catch (error) {
    yield put(updateOneTestFailureAction(error));
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
      'tests',
      id,
    );

    const data = {
      id: response.id,
      name: response.name,
      tags: response.tags,
      description: response.description,
      image: response.image,
      isPublic: !response.isDraft,
    };

    yield put(getOneTestSuccessAction(data));
  } catch (error) {
    yield put(getOneTestFailureAction(error));
  }
}

export default [
  takeEvery(TestTypes.GET_LIST_TEST, getListTest),
  takeEvery(TestTypes.CREATE_ONE_TEST, createOneTest),
  takeEvery(TestTypes.UPDATE_ONE_TEST, updateOneTest),
  takeEvery(TestTypes.GET_ONE_TEST, getOne),
];

import { takeEvery, put, call } from 'redux-saga/effects';
import moment from 'moment';
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
import { putApi, postApi, getDataByIdApi } from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* getListTest({ id, limit, offset, filter, orderBy, fields }) {
  try {
    if (limit === undefined) {
      limit = 50;
    }
    if (offset === undefined) {
      offset = 0;
    }
    if (fields === undefined) {
      fields = `["id", "name"]`;
    }

    const { results, total } = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: 'Có lỗi xảy ra',
      },
      getDataByIdApi,
      'tests',
      id,
      {
        limit,
        offset,
        filter,
        orderBy,
        fields,
      },
    );

    // console.log(results);

    const data = results.map((e) => ({
      name: e.name,
      id: e.id,
      key: e.id,
      status: e.isVisible,
      happenAt: moment(e.happenAt).format('L'),
      locationDescription: e.locationDescription,
    }));
    // console.log(data);

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
    };
    yield put(createOneTestSuccessAction(data));
  } catch (error) {
    yield put(createOneTestFailureAction());
  }
}

function* updateOneTest({ id, payload }) {
  try {
    // payload = {
    //   name: payload.name,
    //   code: payload.code,
    //   isVisible: payload.status,
    // };
    delete payload.key;
    yield call(
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
    yield put(updateOneTestSuccessAction(id));
  } catch (error) {
    yield put(updateOneTestFailureAction());
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
      'tests',
      id,
    );
    // console.log(response);

    const data = {
      id: response.id,
      name: response.name,
      tags: response.tags,
      description: response.description,
      // happenAt: moment(response.happenAt).format('L'),
      isPublic: !response.isDraft,
    };
    // console.log(data);

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

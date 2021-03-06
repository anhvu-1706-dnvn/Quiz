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
import { getTests } from '../../api/modules/test';
import { putApi, postApi, getDataByIdApi } from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';

function* getListTest({ limit, offset, filter, orderBy, fields }) {
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
    // console.log(
    //   limit, offset, filter , orderBy, fields,
    // );

    const { results, total } = yield getTests({
      limit,
      offset,
      filter,
      orderBy,
      fields,
    });
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
    yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Thêm thành công',
        errorDescription: 'Error',
      },
      postApi,
      'tests',
      payload,
    );
    yield put(createOneTestSuccessAction());
  } catch (error) {
    yield put(createOneTestFailureAction());
  }
}

function* updateOneTest({ id, payload }) {
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
        errorDescription: 'Error',
      },
      putApi,
      'tests',
      id,
      payload,
    );
    yield put(updateOneTestSuccessAction());
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
        errorDescription: 'Error',
      },
      getDataByIdApi,
      'tests',
      id,
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

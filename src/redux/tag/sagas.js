import { takeEvery, put, call } from 'redux-saga/effects';
import moment from 'moment';
import {
  TagTypes,
  getListTagsSuccessAction,
  getListTagsFailureAction,
  getOneTagSuccessAction,
  getOneTagFailureAction,
  getListTagWithTestSuccessAction,
  getListTagWithTestFailureAction,
} from './action';
import { getListTags, getOne, getListTagAndTest } from '../../api/modules/tag';
import { apiWrapper } from '../../utils/reduxUtils';

function* getListTagsSaga({ limit, offset, filter, orderBy }) {
  try {
    if (limit === undefined) {
      limit = 50;
    }
    if (offset === undefined) {
      offset = 0;
    }
    const { results, total } = yield getListTags({
      limit,
      offset,
      filter,
      orderBy,
    });
    const data = results.map((e) => ({
      key: e.id,
      id: e.id,
      name: e.name,
    }));
    yield put(getListTagsSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListTagsFailureAction(error));
  }
}

function* getOneTagSaga({ id }) {
  try {
    const response = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: 'Error',
      },
      getOne,
      id,
    );

    const data = {
      id: response.id,
      name: response.name,
      tests: response.tests,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
      deletedAt: response.updatedAt,

      happenAt: moment(response.happenAt).format('L'),
    };

    yield put(getOneTagSuccessAction(data));
  } catch (error) {
    yield put(getOneTagFailureAction(error));
  }
}

function* getListTagWithTestSaga({ limit, offset, filter, orderBy }) {
  try {
    if (limit === undefined) {
      limit = 10;
    }
    if (offset === undefined) {
      offset = 0;
    }
    const { results, total } = yield getListTagAndTest({
      limit,
      offset,
      filter,
      orderBy,
    });
    const data = results.map((e) => ({
      key: e.id,
      id: e.id,
      name: e.name,
      test: e.tests,
    }));
    yield put(getListTagWithTestSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListTagWithTestFailureAction(error));
  }
}

export default [
  takeEvery(TagTypes.GET_LIST_TAGS, getListTagsSaga),
  takeEvery(TagTypes.GET_ONE_TAG, getOneTagSaga),
  takeEvery(TagTypes.GET_LIST_TAG_WITH_TEST, getListTagWithTestSaga),
];

import { takeEvery, put, call } from 'redux-saga/effects';

import {
  RoomTypes,
  getListRoomSuccessAction,
  getListRoomFailureAction,
  createOneRoomSuccessAction,
  createOneRoomFailureAction,
} from './actions';
import { postApi } from '../../api/common/crud';
import { apiWrapper } from '../../utils/reduxUtils';
import { getListRoom } from '../../api/modules/room';

function* getListRoomSaga({ limit, offset, filter, orderBy }) {
  try {
    if (limit === undefined) {
      limit = 50;
    }
    if (offset === undefined) {
      offset = 0;
    }
    const { results, total } = yield getListRoom({
      limit,
      offset,
      filter,
      orderBy,
    });
    const data = results.map((e) => ({
      key: e.id,
      id: e.id,
      code: e.code,
      status: e.status,
      testId: e.testId,
      creator: e.creator,
      test: e.test,
    }));
    yield put(getListRoomSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListRoomFailureAction(error));
  }
}

function* createRoomSaga({ payload }) {
  try {
    const results = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: true,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'rooms',
      payload
    );
    const data = {
      code: results.code,
    };
    yield put(createOneRoomSuccessAction(data));
  } catch (error) {
    yield put(createOneRoomFailureAction());
  }
}

export default [
  takeEvery(RoomTypes.GET_LIST_ROOM, getListRoomSaga),
  takeEvery(RoomTypes.CREATE_ONE_ROOM_ACTION, createRoomSaga),
];

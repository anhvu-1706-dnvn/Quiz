import { takeEvery, put } from 'redux-saga/effects';

import {
  RoomTypes,
  getListRoomSuccessAction,
  getListRoomFailureAction,
} from './actions';

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
      testId: e.testId,
      creator: e.creator,
      test: e.test,
    }));
    yield put(getListRoomSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListRoomFailureAction(error));
  }
}

export default [takeEvery(RoomTypes.GET_LIST_ROOM, getListRoomSaga)];

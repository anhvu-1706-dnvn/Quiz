import { takeEvery, put, call } from 'redux-saga/effects';

import {
  RoomTypes,
  getListRoomSuccessAction,
  getListRoomFailureAction,
  createOneRoomSuccessAction,
  createOneRoomFailureAction,
  setCurrentRoomCode,
  checkRoomSuccessAction,
  checkRoomFailureAction,
  addUserAction,
  removeUserAction,
  updateListUserAction,
  deleteListUserAction,
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
        isShowLoading: false,
        isShowSucceedNoti: false,
        successDescription: 'Created Successfully',
        errorDescription: 'Error',
      },
      postApi,
      'rooms',
      payload
    );
    yield put(createOneRoomSuccessAction(results));
  } catch (error) {
    yield put(createOneRoomFailureAction());
  }
}

function setCurrentRoomCodeSaga({ code }) {
  setCurrentRoomCode(code);
}

function* checkRoomSaga({ payload }) {
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
      'rooms/join',
      payload
    );
    yield put(checkRoomSuccessAction(results));
  } catch (error) {
    yield put(checkRoomFailureAction(error));
  }
}

function addUserSaga({ data }) {
  addUserAction(data);
}

function removeUserSaga({ data }) {
  removeUserAction(data);
}

function updateListUserSaga({ data }) {
  updateListUserAction(data);
}

function deleteListUserSaga() {
  deleteListUserAction();
}

export default [
  takeEvery(RoomTypes.GET_LIST_ROOM, getListRoomSaga),
  takeEvery(RoomTypes.CREATE_ONE_ROOM_ACTION, createRoomSaga),
  takeEvery(RoomTypes.SET_CURRENT_ROOM_CODE, setCurrentRoomCodeSaga),
  takeEvery(RoomTypes.CHECK_ROOM_ACTION, checkRoomSaga),
  takeEvery(RoomTypes.ADD_USER_ACTION, addUserSaga),
  takeEvery(RoomTypes.REMOVE_USER_ACTION, removeUserSaga),
  takeEvery(RoomTypes.UPDATE_LIST_USER_ACTION, updateListUserSaga),
  takeEvery(RoomTypes.DELETE_LIST_USER_ACTION, deleteListUserSaga),
];

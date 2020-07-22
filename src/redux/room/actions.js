import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const RoomTypes = makeConstantCreator(
  'GET_LIST_ROOM',
  'GET_LIST_ROOM_SUCCESS',
  'GET_LIST_ROOM_FAILURE',
  'CREATE_ONE_ROOM_ACTION',
  'CREATE_ONE_ROOM_SUCCESS',
  'CREATE_ONE_ROOM_FAILURE'
);

export const getListRoomAction = ({ limit, offset, filter, orderBy, fields }) =>
  makeActionCreator(RoomTypes.GET_LIST_ROOM, {
    limit,
    offset,
    filter,
    orderBy,
    fields,
  });

export const getListRoomSuccessAction = (data, total, limit, offset) =>
  makeActionCreator(RoomTypes.GET_LIST_ROOM_SUCCESS, {
    data,
    total,
    limit,
    offset,
  });
export const getListRoomFailureAction = (error) =>
  makeActionCreator(RoomTypes.GET_LIST_ROOM_FAILURE, { error });

// Create one room
export const createOneRoomAction = (payload) =>
  makeActionCreator(RoomTypes.CREATE_ONE_ROOM_ACTION, { payload });
export const createOneRoomSuccessAction = (data) =>
  makeActionCreator(RoomTypes.CREATE_ONE_ROOM_SUCCESS, { data });
export const createOneRoomFailureAction = (error) =>
  makeActionCreator(RoomTypes.CREATE_ONE_ROOM_FAILURE, { error });

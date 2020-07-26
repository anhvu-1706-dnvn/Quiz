import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const RoomTypes = makeConstantCreator(
  'GET_LIST_ROOM',
  'GET_LIST_ROOM_SUCCESS',
  'GET_LIST_ROOM_FAILURE',
  'CREATE_ONE_ROOM_ACTION',
  'CREATE_ONE_ROOM_SUCCESS',
  'CREATE_ONE_ROOM_FAILURE',
  'SET_CURRENT_ROOM_CODE',
  'CHECK_ROOM_ACTION',
  'CHECK_ROOM_ACTION_SUCCESS',
  'CHECK_ROOM_ACTION_FAILURE',
  'ADD_USER_ACTION',
  'REMOVE_USER_ACTION',
  'UPDATE_LIST_USER_ACTION',
  'DELETE_LIST_USER_ACTION'
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

export const setCurrentRoomCode = (data) =>
  makeActionCreator(RoomTypes.SET_CURRENT_ROOM_CODE, data);

// Check room
export const checkRoomAction = (payload) =>
  makeActionCreator(RoomTypes.CHECK_ROOM_ACTION, { payload });
export const checkRoomSuccessAction = (data) =>
  makeActionCreator(RoomTypes.CHECK_ROOM_ACTION_SUCCESS, { data });
export const checkRoomFailureAction = (error) =>
  makeActionCreator(RoomTypes.CHECK_ROOM_ACTION_FAILURE, { error });

// Add user
export const addUserAction = (data) =>
  makeActionCreator(RoomTypes.ADD_USER_ACTION, data);

// Remove user
export const removeUserAction = (data) =>
  makeActionCreator(RoomTypes.REMOVE_USER_ACTION, data);

// Update list user
export const updateListUserAction = (data) =>
  makeActionCreator(RoomTypes.UPDATE_LIST_USER_ACTION, data);

// Delete list user

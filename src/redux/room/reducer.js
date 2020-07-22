import { makeReducerCreator } from '../../utils/reduxUtils';
import { RoomTypes } from './actions';

export const initialState = {
  rooms: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: null,
  loading: false,
  currentRoom: null,
  isCreatedRoom: false,
  currentRoomCode: null,
};

// LIST ROOM
const getListRoom = (state) => ({
  ...state,
  loading: true,
});

const getListRoomSuccess = (state, { data, total, limit, offset }) => ({
  ...state,
  rooms: data,
  limit,
  offset,
  total,
  loading: false,
  currentRoomCode: data.length > 0 ? data[0].code : null,
});

const getListRoomFailure = (state) => ({
  ...state,
  loading: false,
});

const createRoomSuccess = (state, { data }) => ({
  ...state,
  loading: false,
  isCreatedRoom: true,
  currentRoomCode: data.code,
});

const createRoomFailure = (state) => ({
  ...state,
  loading: false,
  isCreatedRoom: false,
});

export const room = makeReducerCreator(initialState, {
  [RoomTypes.GET_LIST_ROOM]: getListRoom,
  [RoomTypes.GET_LIST_ROOM_SUCCESS]: getListRoomSuccess,
  [RoomTypes.GET_LIST_ROOM_FAILURE]: getListRoomFailure,

  [RoomTypes.CREATE_ONE_ROOM_SUCCESS]: createRoomSuccess,
  [RoomTypes.CREATE_ONE_ROOM_FAILURE]: createRoomFailure,
});

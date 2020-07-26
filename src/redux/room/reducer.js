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
  users: [],
  loadingSetCurrentRoom: false,
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
  // currentRoomCode: data.length > 0 ? data[0].code : null,
});

const getListRoomFailure = (state) => ({
  ...state,
  loading: false,
});

const createRoom = (state) => ({
  ...state,
  loadingSetCurrentRoom: true,
});

const createRoomSuccess = (state, { data }) => ({
  ...state,
  isCreatedRoom: true,
  currentRoom: data,
  currentRoomCode: data.code,
  loadingSetCurrentRoom: false,
});

const createRoomFailure = (state) => ({
  ...state,
  isCreatedRoom: false,
  loadingSetCurrentRoom: false,
});

const setCurrentRoomCode = (state, { code }) => ({
  ...state,
  currentRoomCode: code,
});

const checkRoom = (state) => ({
  ...state,
  loadingSetCurrentRoom: true,
});

const checkRoomSuccess = (state, { data }) => ({
  ...state,
  currentRoom: data,
  currentRoomCode: data.code,
  loadingSetCurrentRoom: false,
});

const checkRoomFailure = (state, { error }) => ({
  ...state,
  currentRoom: null,
  loadingSetCurrentRoom: false,
});

const addUser = (state, { data }) => {
  data.totalScore = 0;
  return {
    ...state,
    users: [...state.users, data],
  };
};

const removeUser = (state, { data }) => {
  const userLeaved = state.users.find((user) => user.userId === data.userId);
  const index = state.users.indexOf(userLeaved);
  return {
    ...state,
    users: [...state.users.slice(0, index), ...state.users.slice(index + 1)],
  };
};

const updateListUser = (state, { data }) => {
  const newListUser = [...state.users];
  const userFound = state.users.find((user) => user.userId === data.userId);
  const index = state.users.indexOf(userFound);
  newListUser[index].totalScore = data.totalScore;
  newListUser.sort((a, b) => b.totalScore - a.totalScore);
  return {
    ...state,
    users: newListUser,
  };
};

export const room = makeReducerCreator(initialState, {
  [RoomTypes.GET_LIST_ROOM]: getListRoom,
  [RoomTypes.GET_LIST_ROOM_SUCCESS]: getListRoomSuccess,
  [RoomTypes.GET_LIST_ROOM_FAILURE]: getListRoomFailure,

  [RoomTypes.CREATE_ONE_ROOM_ACTION]: createRoom,
  [RoomTypes.CREATE_ONE_ROOM_SUCCESS]: createRoomSuccess,
  [RoomTypes.CREATE_ONE_ROOM_FAILURE]: createRoomFailure,

  [RoomTypes.SET_CURRENT_ROOM_CODE]: setCurrentRoomCode,

  [RoomTypes.CHECK_ROOM_ACTION]: checkRoom,
  [RoomTypes.CHECK_ROOM_ACTION_SUCCESS]: checkRoomSuccess,
  [RoomTypes.CHECK_ROOM_ACTION_FAILURE]: checkRoomFailure,

  [RoomTypes.ADD_USER_ACTION]: addUser,
  [RoomTypes.REMOVE_USER_ACTION]: removeUser,
  [RoomTypes.UPDATE_LIST_USER_ACTION]: updateListUser,
});

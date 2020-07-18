import { makeReducerCreator } from '../../utils/reduxUtils';
import { RoomTypes } from './actions';

export const initialState = {
  rooms: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: null,
  loading: false,
  listQuestionSuccess: undefined,
  listQuestionFailure: undefined,
};

// LIST QUESTION
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
  listQuestionSuccess: true,
  listQuestionFailure: false,
});

const getListRoomFailure = (state) => ({
  ...state,
  loading: false,
  listQuestionSuccess: false,
  listQuestionFailure: true,
});

export const room = makeReducerCreator(initialState, {
  [RoomTypes.GET_LIST_ROOM]: getListRoom,
  [RoomTypes.GET_LIST_ROOM_SUCCESS]: getListRoomSuccess,
  [RoomTypes.GET_LIST_ROOM_FAILURE]: getListRoomFailure,
});

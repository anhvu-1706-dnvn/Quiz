import { makeReducerCreator } from '../../utils/reduxUtils';
import { StatisticTypes } from './actions';

// Setup inintial state for test
export const initialState = {
  totalTest: 0,
  totalAdmin: 0,
  totalCreator: 0,
  totalParticipant: 0,
  loading: false,
  tags: null,
  rooms: [],
};

const getOveralStatisticSuccess = (
  state,
  { admin, creator, participant, numOfTest }
) => ({
  ...state,
  totalTest: numOfTest,
  totalAdmin: admin,
  totalCreator: creator,
  totalParticipant: participant,
  loading: false,
});

const getTagStatisticSuccess = (state, { tags }) => ({
  ...state,
  tags,
});

const getRoomStatisticSuccess = (state, { rooms }) => ({
  ...state,
  rooms,
});

const getRoomStatisticDetail = (state) => ({
  ...state,
  loading: true,
});

const getRoomStatisticDetailSuccess = (state, { data }) => ({
  ...state,
  roomDetail: data,
  loading: false,
});

export const statistic = makeReducerCreator(initialState, {
  [StatisticTypes.GET_OVERALL_STATISTIC_SUCCESS]: getOveralStatisticSuccess,
  [StatisticTypes.GET_TAG_STATISTIC_SUCCESS]: getTagStatisticSuccess,
  [StatisticTypes.GET_ROOM_STATISTIC_SUCCESS]: getRoomStatisticSuccess,
  [StatisticTypes.GET_ROOM_STATISTIC_DETAIL]: getRoomStatisticDetail,
  [StatisticTypes.GET_ROOM_STATISTIC_DETAIL_SUCCESS]: getRoomStatisticDetailSuccess,
});

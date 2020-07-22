import { makeConstantCreator, makeActionCreator } from "../../utils/reduxUtils";

export const StatisticTypes = makeConstantCreator(
  "GET_OVERALL_STATISTIC",
  "GET_OVERALL_STATISTIC_SUCCESS",

  "GET_TAG_STATISTIC",
  "GET_TAG_STATISTIC_SUCCESS",

  "GET_ROOM_STATISTIC",
  "GET_ROOM_STATISTIC_SUCCESS",


  "GET_ROOM_STATISTIC_DETAIL",
  "GET_ROOM_STATISTIC_DETAIL_SUCCESS",
);


// get overall statistic 
export const getOverallStatisticAction = () =>
  makeActionCreator(StatisticTypes.GET_OVERALL_STATISTIC);
export const getOverallStatisticSuccessAction = (data) =>
  makeActionCreator(StatisticTypes.GET_OVERALL_STATISTIC_SUCCESS, data);

// get tag statistic 
export const getTagStatisticAction = () =>
  makeActionCreator(StatisticTypes.GET_TAG_STATISTIC);
export const getTagStatisticSuccessAction = (tags) => 
  makeActionCreator(StatisticTypes.GET_TAG_STATISTIC_SUCCESS, {tags});

// get room statistic 
export const getRoomStatisticAction = () =>
  makeActionCreator(StatisticTypes.GET_ROOM_STATISTIC);
export const getRoomStatisticSuccessAction = (rooms) => 
  makeActionCreator(StatisticTypes.GET_ROOM_STATISTIC_SUCCESS, {rooms});


// get room statistic detail
export const getRoomStatisticDetailAction = (roomId) =>
  makeActionCreator(StatisticTypes.GET_ROOM_STATISTIC_DETAIL, {roomId});
export const getRoomStatisticDetailSuccessAction = (data) => 
  makeActionCreator(StatisticTypes.GET_ROOM_STATISTIC_DETAIL_SUCCESS, {data});


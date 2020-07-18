/* eslint-disable no-console */
import { takeEvery, put, call } from "redux-saga/effects";
import moment from "moment";
import * as _ from 'lodash'
import {
  StatisticTypes,
  getOverallStatisticSuccessAction,
  getTagStatisticSuccessAction,
  getRoomStatisticSuccessAction,
  getRoomStatisticDetailSuccessAction,
} from "./actions";
// import {data} from './tempData'
import { getOverallStatistic, getAllTagsAndCountTest, getAllRoomStatistic, getRoomStatisticDetail } from "../../api/modules/statistic";
import { apiWrapper } from "../../utils/reduxUtils";

function* getOverallStatisticData() {
  try {
   const response  = yield call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: "Lỗi !!",
      },
      getOverallStatistic,
    );
    yield put(getOverallStatisticSuccessAction(response));
  } catch (error) {
    console.log('Error >>', error);
  }
}

function * getTagsAndCountTest() {
  try {
    const response = yield  call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: "Lỗi !!", 
      },
      getAllTagsAndCountTest,
    )
    yield put(getTagStatisticSuccessAction(response));
  } catch (error) {
    console.log(error);
  }
}

function * getRoomStatisticInfo() {
  try {
    
    const response = yield  call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: "Lỗi !!", 
      },
      getAllRoomStatistic,
    )
    response.forEach(e => {
      e.creatorName = e.creator.fullName
      e.testName = e.test.name
      e.key = e.id
    });
    yield put(getRoomStatisticSuccessAction(response));
  } catch (error) {
    console.log(error);
  }
}


function * getRoomStatisticDetailInfo({roomId}) {
  try {
    const response = yield  call(
      apiWrapper,
      {
        isShowLoading: true,
        isShowSucceedNoti: false,
        errorDescription: "Lỗi !!", 
      },
      getRoomStatisticDetail,
      roomId,
    )
    const roomDetail = {}

    console.log(response);
    roomDetail.test = {...response.room.test}
    roomDetail.questions = [...response.questions]
    // roomDetail.scores = _.countBy([...response.sessions.map(e=> e.score)])
    // roomDetail.scores = _.countBy([...response.sessions.map(e=> e.score)])
    
  
    roomDetail.userRanking = [...response.sessions.map(e => ({
      fullName: e.user.fullName,
      score: e.score,
      time: moment(e.updatedAt).diff(moment(e.createdAt),'seconds'),
      key: e.id,
    }))]
    // console.log('TOP ', topUserScores);
    
    yield put(getRoomStatisticDetailSuccessAction(roomDetail));
  } catch (error) {
    console.log(error);
  }
}
export default [
  takeEvery(StatisticTypes.GET_OVERALL_STATISTIC, getOverallStatisticData),
  takeEvery(StatisticTypes.GET_TAG_STATISTIC, getTagsAndCountTest),
  takeEvery(StatisticTypes.GET_ROOM_STATISTIC, getRoomStatisticInfo),
  takeEvery(StatisticTypes.GET_ROOM_STATISTIC_DETAIL, getRoomStatisticDetailInfo),
];

import { get } from '../../utils';

export async function getOverallStatistic() {
  return get('/statistic/overall');
}
export async function getAllTagsAndCountTest() {
  return get('/statistic/tags');
}
export async function getAllRoomStatistic() {
  return get('/statistic/rooms');
}
export async function getRoomStatisticDetail(id) {
  return get(`/rooms/${id}/statistic`);
}


import { get, post } from '../../utils';

export async function getListRoom(params) {
  return get('/rooms', params);
}

export async function createRoom(data) {
  return post('/rooms', data);
}

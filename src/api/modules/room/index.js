import { get } from '../../utils';

export async function getListRoom(params) {
  return get('/rooms', params);
}

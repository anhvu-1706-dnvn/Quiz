import { get } from '../../utils';

export async function getListTags(params) {
  return get('/tags', params);
}

export async function getOne(id) {
  return get(`/tags/${id}/tests`);
}

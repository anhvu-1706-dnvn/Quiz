import { get } from '../../utils';

export async function getListTags(params) {
  return get('/tags', params);
}

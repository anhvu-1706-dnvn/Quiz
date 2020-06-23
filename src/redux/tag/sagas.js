import { takeEvery, put } from 'redux-saga/effects';
import {
  TagTypes,
  getListTagsSuccessAction,
  getListTagsFailureAction,
} from './action';
import { getListTags } from '../../api/modules/tag';

function* getListTagsSaga({ limit, offset, filter, orderBy }) {
  try {
    if (limit === undefined) {
      limit = 50;
    }
    if (offset === undefined) {
      offset = 0;
    }
    const { results, total } = yield getListTags({
      limit,
      offset,
      filter,
      orderBy,
    });
    const data = results.map((e) => ({
      key: e.id,
      id: e.id,
      name: e.name,
    }));
    yield put(getListTagsSuccessAction(data, total, limit, offset));
  } catch (error) {
    yield put(getListTagsFailureAction(error));
  }
}

export default [takeEvery(TagTypes.GET_LIST_TAGS, getListTagsSaga)];

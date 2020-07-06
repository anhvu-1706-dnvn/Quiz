import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const TagTypes = makeConstantCreator(
  'GET_LIST_TAGS',
  'GET_LIST_TAGS_SUCCESS',
  'GET_LIST_TAGS_FAILURE',
  'GET_ONE_TAG',
  'GET_ONE_TAG_SUCCESS',
  // eslint-disable-next-line comma-dangle
  'GET_ONE_TAG_FAILURE'
);

// List tag
export const getListTagsAction = (limit, offset, filter, orderBy, fields) =>
  makeActionCreator(TagTypes.GET_LIST_TAGS, {
    limit,
    offset,
    filter,
    orderBy,
    fields,
  });

export const getListTagsSuccessAction = (data, total, limit, offset) =>
  makeActionCreator(TagTypes.GET_LIST_TAGS_SUCCESS, {
    data,
    total,
    limit,
    offset,
  });
export const getListTagsFailureAction = (error) =>
  makeActionCreator(TagTypes.GET_LIST_TAGS_FAILURE, { error });

// Get one tag
export const getOneTagAction = (id) =>
  makeActionCreator(TagTypes.GET_ONE_TAG, { id });
export const getOneTagSuccessAction = (data) =>
  makeActionCreator(TagTypes.GET_ONE_TAG_SUCCESS, { data });
export const getOneTagFailureAction = (error) =>
  makeActionCreator(TagTypes.GET_ONE_TAG_FAILURE, { error });

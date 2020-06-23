import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const TagTypes = makeConstantCreator(
  'GET_LIST_TAGS',
  'GET_LIST_TAGS_SUCCESS',
  'GET_LIST_TAGS_FAILURE'
);

// List question
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

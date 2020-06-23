import { makeReducerCreator } from '../../utils/reduxUtils';
import { TagTypes } from './action';

// Setup inintial state for tag
export const initialState = {
  tags: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: null,
  loading: false,
  listTagsSuccess: undefined,
  listTagsFailure: undefined,
  createLoading: false,
};
// End setup

// LIST TAG
const getListTags = (state) => ({
  ...state,
  loading: true,
});

const getListTagsSuccess = (state, { data, total, limit, offset }) => ({
  ...state,
  tags: data,
  limit,
  offset,
  total,
  loading: false,
  listTagsSuccess: true,
  listTagsFailure: false,
});

const getListTagsFailure = (state) => ({
  ...state,
  loading: false,
  listTagsSuccess: false,
  listTagsFailure: true,
});

export const tag = makeReducerCreator(initialState, {
  [TagTypes.GET_LIST_TAGS]: getListTags,
  [TagTypes.GET_LIST_TAGS_SUCCESS]: getListTagsSuccess,
  [TagTypes.GET_LIST_TAGS_FAILURE]: getListTagsFailure,
});

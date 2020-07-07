import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const TestTypes = makeConstantCreator(
  'GET_LIST_TEST',
  'GET_LIST_TEST_SUCCESS',
  'GET_LIST_TEST_FAILURE',

  'CREATE_ONE_TEST',
  'CREATE_ONE_TEST_SUCCESS',
  'CREATE_ONE_TEST_FAILURE',

  'UPDATE_ONE_TEST',
  'UPDATE_ONE_TEST_SUCCESS',
  'UPDATE_ONE_TEST_FAILURE',

  'GET_ONE_TEST',
  'GET_ONE_TEST_SUCCESS',
  'GET_ONE_TEST_FAILURE',

  'UPLOAD_IMAGE_SUCCESS',
  'UPLOAD_IMAGE_FAILURE',
  'REMOVE_IMAGE'
);

// List test
export const getListTestAction = ({ limit, offset, filter, orderBy, fields }) =>
  makeActionCreator(TestTypes.GET_LIST_TEST, {
    limit,
    offset,
    filter,
    orderBy,
    fields,
  });
export const getListTestSuccessAction = (data, total, limit, offset) =>
  makeActionCreator(TestTypes.GET_LIST_TEST_SUCCESS, {
    data,
    total,
    limit,
    offset,
  });
export const getListTestFailureAction = (error) =>
  makeActionCreator(TestTypes.GET_LIST_TEST_FAILURE, { error });

// Create one test
export const createOneTestAction = (payload) =>
  makeActionCreator(TestTypes.CREATE_ONE_TEST, { payload });
export const createOneTestSuccessAction = (data) =>
  makeActionCreator(TestTypes.CREATE_ONE_TEST_SUCCESS, { data });
export const createOneTestFailureAction = (error) =>
  makeActionCreator(TestTypes.CREATE_ONE_TEST_FAILURE, { error });

// Edit one test
export const updateOneTestAction = (id, payload) =>
  makeActionCreator(TestTypes.UPDATE_ONE_TEST, { id, payload });
export const updateOneTestSuccessAction = (id) =>
  makeActionCreator(TestTypes.UPDATE_ONE_TEST_SUCCESS, { id });
export const updateOneTestFailureAction = (error) =>
  makeActionCreator(TestTypes.UPDATE_ONE_TEST_FAILURE, { error });

// Get one test
export const getOneTestAction = (id) =>
  makeActionCreator(TestTypes.GET_ONE_TEST, { id });
export const getOneTestSuccessAction = (data) =>
  makeActionCreator(TestTypes.GET_ONE_TEST_SUCCESS, { data });
export const getOneTestFailureAction = (error) =>
  makeActionCreator(TestTypes.GET_ONE_TEST_FAILURE, { error });

// Upload - remove image
export const uploadImageSuccessAction = (fileUrl, mode) =>
  makeActionCreator(TestTypes.UPLOAD_IMAGE_SUCCESS, { fileUrl, mode });
export const uploadImageFailureAction = (error) =>
  makeActionCreator(TestTypes.UPLOAD_IMAGE_FAILURE, { error });
export const removeImageAction = (link) =>
  makeActionCreator(TestTypes.REMOVE_IMAGE, { link });

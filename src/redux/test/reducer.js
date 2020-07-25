import { makeReducerCreator } from '../../utils/reduxUtils';
import { TestTypes } from './actions';

// Setup inintial state for test
export const initialState = {
  tests: [],
  offset: 0, // offset = (page - 1) * limit;
  limit: 10,
  total: null,
  loading: false,
  listTestSuccess: undefined,
  listTestFailure: undefined,

  createTestSuccess: undefined,
  createTestFailure: undefined,

  updateTestSuccess: undefined,
  updateTestFailure: undefined,
  deleteTestSuccess: undefined,
  deleteTestFailure: undefined,
  currentTest: null,
  registrations: [],
  testImage: null,
};
// End setup

// LIST TEST
const getListTest = (state) => ({
  ...state,
  loading: true,
});

const getListTestSuccess = (state, { data, total, limit, offset }) => ({
  ...state,
  tests: data,
  limit,
  offset,
  total,
  loading: false,
  listTestSuccess: true,
  listTestFailure: false,
  currentTest: data[0],
});

const getListTestFailure = (state) => ({
  ...state,
  loading: false,
  listTestSuccess: false,
  listTestFailure: true,
});

// ---------------------------------------
const createOneTestSuccess = (state, { data }) => {
  return {
    ...state,
    loading: false,
    createTestFailure: false,
    createTestSuccess: true,
    currentTest: data,
  };
};

const createOneTestFailure = (state) => ({
  ...state,
  loading: false,
  createTestFailure: false,
  createTestSuccess: true,
});
// -----------------------------------------
const updateOneTest = (state, { id, payload }) => {
  const testList = [...state.tests];
  payload.key = id;
  const index = testList.findIndex((e) => e.id === id);
  testList[index] = payload;
  return {
    ...state,
    tests: testList,
  };
};
const updateOneTestSuccess = (state, { data }) => ({
  ...state,
  loading: false,
  updateTestFailure: false,
  updateTestSuccess: true,
  currentTest: data,
});
const updateOneTestFailure = (state) => ({
  ...state,
  loading: false,
  updateTestFailure: false,
  updateTestSuccess: true,
});

// -----------------------------------------
const getOneTestSuccess = (state, { data }) => ({
  ...state,
  currentTest: data,
  loading: false,
});
const getOneTestFailure = (state) => ({
  ...state,
  loading: false,
});

// -----------------------------------------
const deleteOneTestSuccess = (state, { id }) => {
  const test = state.tests.find((e) => e.id === id);
  const index = state.tests.indexOf(test);
  const newTests = [
    ...state.tests.slice(0, index),
    ...state.tests.slice(index + 1),
  ];
  return {
    ...state,
    tests: newTests,
    deleteTestSuccess: true,
    deleteTestFailure: false,
  };
};

const deleteOneTestFailure = (state) => ({
  ...state,
  deleteTestSuccess: false,
  deleteTestFailure: true,
});

// -----------------------------------------
// UPLOAD IMAGE
const uploadImageSuccess = (state, { fileUrl }) => {
  return {
    ...state,
    testImage: fileUrl,
  };
};

const uploadImageFailure = (state) => ({
  ...state,
  loading: false,
});

const removeImage = (state) => ({
  ...state,
  testImage: null,
});
// --------------------------------------------------
// GET REGISTRATIONS BY TEST
const getRegistrations = (state) => ({
  ...state,
  loading: true,
});
const getRegistrationsSuccess = (state, { data, total, limit, offset }) => ({
  ...state,
  registrations: data,
  total,
  limit,
  offset,
  loading: false,
});
const getRegistrationsFailure = (state) => ({
  ...state,
  loading: false,
});

export const test = makeReducerCreator(initialState, {
  [TestTypes.GET_LIST_TEST]: getListTest,
  [TestTypes.GET_LIST_TEST_SUCCESS]: getListTestSuccess,
  [TestTypes.GET_LIST_TEST_FAILURE]: getListTestFailure,

  [TestTypes.CREATE_ONE_TEST_SUCCESS]: createOneTestSuccess,
  [TestTypes.CREATE_ONE_TEST_FAILURE]: createOneTestFailure,

  [TestTypes.UPDATE_ONE_TEST]: updateOneTest,
  [TestTypes.UPDATE_ONE_TEST_SUCCESS]: updateOneTestSuccess,
  [TestTypes.UPDATE_ONE_TEST_FAILURE]: updateOneTestFailure,

  [TestTypes.GET_ONE_TEST_SUCCESS]: getOneTestSuccess,
  [TestTypes.GET_ONE_TEST_FAILURE]: getOneTestFailure,

  [TestTypes.DELETE_ONE_TEST_SUCCESS]: deleteOneTestSuccess,
  [TestTypes.DELETE_ONE_TEST_FAILURE]: deleteOneTestFailure,

  [TestTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [TestTypes.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,

  [TestTypes.REMOVE_IMAGE]: removeImage,

  [TestTypes.GET_REGISTRATIONS_BY_TEST]: getRegistrations,
  [TestTypes.GET_REGISTRATIONS_BY_TEST_SUCCESS]: getRegistrationsSuccess,
  [TestTypes.GET_REGISTRATIONS_BY_TEST_FAILURE]: getRegistrationsFailure,
});

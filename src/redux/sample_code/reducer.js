import { makeReducerCreator } from "../../utils/reduxUtils";
import { TestTypes } from "./actions";


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

  currentTest: {},
  registrations: [],
  testImage: null,
};
// End setup

// LIST TEST
const getListTest = state => ({
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
});

const getListTestFailure = state => ({
  ...state,
  loading: false,
  listTestSuccess: false,
  listTestFailure: true,
});

// ---------------------------------------
const createOneTestSuccess = state => {

  return {
    ...state,
    loading:false,
    createTestFailure: false,
    createTestSuccess: true,
  }
} 

const createOneTestFailure = state => ({
  ...state,
  loading:false,
  createTestFailure: false,
  createTestSuccess: true,
})
// -----------------------------------------
const updateOneTest = (state, {id, payload}) => {
  const testList = [...state.tests];
  payload.key = id
  const index = testList.findIndex(e => e.id ===id);
  testList[index] = payload;
  return {
    ...state,
    tests:testList,
  }
}
const updateOneTestSuccess = state => ({
  ...state,
  loading:false,
  updateTestFailure: false,
  updateTestSuccess: true,
})
const updateOneTestFailure = state => ({
  ...state,
  loading:false,
  updateTestFailure: false,
  updateTestSuccess: true,
})

// -----------------------------------------
const getOneTestSuccess =(state, {data}) => ({
  ...state,
  currentTest: data,
  loading:false,
})
const getOneTestFailure =(state) => ({
  ...state,
  loading:false,
})

// -----------------------------------------
// UPLOAD IMAGE
const uploadImageSuccess = (state, { fileUrl }) => {
  return {
    ...state,
    testImage: fileUrl,
  };
};

const uploadImageFailure = state => ({
  ...state,
  loading: false,
});

const removeImage = (state) => ({
  ...state,
  testImage:null,
})
// --------------------------------------------------
// GET REGISTRATIONS BY TEST
const getRegistrations = state => ({
  ...state,
  loading: true,
})
const getRegistrationsSuccess = (state,{data, total, limit, offset} )=> ({
  ...state,
  registrations: data,
  total, limit, offset,
  loading: false,
})
const getRegistrationsFailure = state => ({
  ...state,  
  loading: false,
})

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

  [TestTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [TestTypes.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,

  [TestTypes.REMOVE_IMAGE]: removeImage,

  [TestTypes.GET_REGISTRATIONS_BY_TEST]: getRegistrations,
  [TestTypes.GET_REGISTRATIONS_BY_TEST_SUCCESS]: getRegistrationsSuccess,
  [TestTypes.GET_REGISTRATIONS_BY_TEST_FAILURE]: getRegistrationsFailure,
})

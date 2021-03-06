import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const QuestionTypes = makeConstantCreator(
  'GET_LIST_QUESTION_BY_TEST',
  'GET_LIST_QUESTION_BY_TEST_SUCCESS',
  'GET_LIST_QUESTION_BY_TEST_FAILURE',

  'CREATE_ONE_QUESTION',
  'CREATE_ONE_QUESTION_SUCCESS',
  'CREATE_ONE_QUESTION_FAILURE',

  'UPDATE_ONE_QUESTION',
  'UPDATE_ONE_QUESTION_SUCCESS',
  'UPDATE_ONE_QUESTION_FAILURE',

  'GET_ONE_QUESTION',
  'GET_ONE_QUESTION_SUCCESS',
  'GET_ONE_QUESTION_FAILURE',

  'DELETE_ONE_QUESTION',
  'DELETE_ONE_QUESTION_SUCCESS',
  'DELETE_ONE_QUESTION_FAILURE',

  'UPDATE_CURRENT_QUESTION',
  'DELETE_LIST_QUESTION',

  'UPLOAD_IMAGE_SUCCESS',
  'UPLOAD_IMAGE_FAILURE',
  'REMOVE_IMAGE'
);

// List question
export const getListQuestionByTestAction = ({
  limit,
  offset,
  filter,
  orderBy,
  fields,
}) =>
  makeActionCreator(QuestionTypes.GET_LIST_QUESTION_BY_TEST, {
    limit,
    offset,
    filter,
    orderBy,
    fields,
  });
export const getListQuestionByTestSuccessAction = (
  data,
  total,
  limit,
  offset
) =>
  makeActionCreator(QuestionTypes.GET_LIST_QUESTION_BY_TEST_SUCCESS, {
    data,
    total,
    limit,
    offset,
  });
export const getListQuestionByTestFailureAction = (error) =>
  makeActionCreator(QuestionTypes.GET_LIST_QUESTION_BY_TEST_FAILURE, { error });

// Create one question
export const createOneQuestionAction = (payload) =>
  makeActionCreator(QuestionTypes.CREATE_ONE_QUESTION, { payload });
export const createOneQuestionSuccessAction = (data) =>
  makeActionCreator(QuestionTypes.CREATE_ONE_QUESTION_SUCCESS, { data });
export const createOneQuestionFailureAction = (error) =>
  makeActionCreator(QuestionTypes.CREATE_ONE_QUESTION_FAILURE, { error });

// Edit one question
export const updateOneQuestionAction = (id, payload) =>
  makeActionCreator(QuestionTypes.UPDATE_ONE_QUESTION, { id, payload });
export const updateOneQuestionSuccessAction = (id) =>
  makeActionCreator(QuestionTypes.UPDATE_ONE_QUESTION_SUCCESS, { id });
export const updateOneQuestionFailureAction = (error) =>
  makeActionCreator(QuestionTypes.UPDATE_ONE_QUESTION_FAILURE, { error });

// Get one question
export const getOneQuestionAction = (id) =>
  makeActionCreator(QuestionTypes.GET_ONE_QUESTION, { id });
export const getOneQuestionSuccessAction = (data) =>
  makeActionCreator(QuestionTypes.GET_ONE_QUESTION_SUCCESS, { data });
export const getOneQuestionFailureAction = (error) =>
  makeActionCreator(QuestionTypes.GET_ONE_QUESTION_FAILURE, { error });

// Delete one test
export const deleteOneQuestionAction = (id) =>
  makeActionCreator(QuestionTypes.DELETE_ONE_QUESTION, { id });
export const deleteOneQuestionSuccessAction = (id) =>
  makeActionCreator(QuestionTypes.DELETE_ONE_QUESTION_SUCCESS, { id });
export const deleteOneQuestionFailureAction = () =>
  makeActionCreator(QuestionTypes.DELETE_ONE_QUESTION_FAILURE);

// Upload - remove image
export const uploadImageSuccessAction = (fileUrl, mode) =>
  makeActionCreator(QuestionTypes.UPLOAD_IMAGE_SUCCESS, { fileUrl, mode });
export const uploadImageFailureAction = (error) =>
  makeActionCreator(QuestionTypes.UPLOAD_IMAGE_FAILURE, { error });
export const removeImageAction = (link) =>
  makeActionCreator(QuestionTypes.REMOVE_IMAGE, { link });

export const updateCurrentQuestion = (data) =>
  makeActionCreator(QuestionTypes.UPDATE_CURRENT_QUESTION, data);

export const deleteListQuestion = () =>
  makeActionCreator(QuestionTypes.DELETE_LIST_QUESTION);

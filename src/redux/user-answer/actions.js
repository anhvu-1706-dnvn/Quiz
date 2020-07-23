import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const UserAnswerTypes = makeConstantCreator(
  'CREATE_ONE_USER_ANSWER_ACTION',
  'CREATE_ONE_USER_ANSWER_SUCCESS',
  'CREATE_ONE_USER_ANSWER_FAILURE',
);

// Create one room
export const createOneUserAnswerAction = (payload) =>
  makeActionCreator(UserAnswerTypes.CREATE_ONE_USER_ANSWER_ACTION, { payload });
export const createOneUserAnswerSuccessAction = (data) =>
  makeActionCreator(UserAnswerTypes.CREATE_ONE_USER_ANSWER_SUCCESS, { data });
export const createOneUserAnswerFailureAction = (error) =>
  makeActionCreator(UserAnswerTypes.CREATE_ONE_USER_ANSWER_FAILURE, { error });

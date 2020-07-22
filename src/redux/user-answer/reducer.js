import { makeReducerCreator } from '../../utils/reduxUtils';
import { UserAnswerTypes } from './actions';

export const initialState = {
  currentUserAnswer: null,
  isCreatedUserAnswer: false,
};

const createUserAnswerSuccess = (state, { data }) => ({
  ...state,
  isCreatedUserAnswer: true,
  currentUserAnswer: data,
});

const createUserAnswerFailure = (state) => ({
  ...state,
  isCreatedUserAnswer: false,
});

export const userAnswer = makeReducerCreator(initialState, {
  [UserAnswerTypes.CREATE_ONE_USER_ANSWER_SUCCESS]: createUserAnswerSuccess,
  [UserAnswerTypes.CREATE_ONE_USER_ANSWER_FAILURE]: createUserAnswerFailure,
});

import { makeReducerCreator } from '../../utils/reduxUtils';
import { SessionTypes } from './actions';

export const initialState = {
  currentSession: null,
  isCreatedSession: false,
};

const createSessionSuccess = (state, { data }) => ({
  ...state,
  isCreatedSession: true,
  currentSession: data,
});

const createSessionFailure = (state) => ({
  ...state,
  isCreatedSession: false,
});

export const session = makeReducerCreator(initialState, {
  [SessionTypes.CREATE_ONE_SESSION_SUCCESS]: createSessionSuccess,
  [SessionTypes.CREATE_ONE_SESSION_FAILURE]: createSessionFailure,
});

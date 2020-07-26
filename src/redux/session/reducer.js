import { makeReducerCreator } from '../../utils/reduxUtils';
import { SessionTypes } from './actions';

export const initialState = {
  currentSession: null,
  isCreatedSession: false,
  isGotSession: false,
  loading: false,
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

const getSessionAction = (state) => ({
  ...state,
  loading: true,
});

const getSessionSuccess = (state, { data }) => ({
  ...state,
  isGotSession: true,
  currentSession: data,
  loading: false,
});

const getSessionFailure = (state) => ({
  ...state,
  isGotSession: false,
  loading: false,
});

export const session = makeReducerCreator(initialState, {
  [SessionTypes.CREATE_ONE_SESSION_SUCCESS]: createSessionSuccess,
  [SessionTypes.CREATE_ONE_SESSION_FAILURE]: createSessionFailure,

  [SessionTypes.GET_ONE_SESSION_ACTION]: getSessionAction,
  [SessionTypes.GET_ONE_SESSION_SUCCESS]: getSessionSuccess,
  [SessionTypes.GET_ONE_SESSION_FAILURE]: getSessionFailure,
});

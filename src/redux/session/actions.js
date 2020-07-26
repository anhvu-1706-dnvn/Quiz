import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const SessionTypes = makeConstantCreator(
  'CREATE_ONE_SESSION_ACTION',
  'CREATE_ONE_SESSION_SUCCESS',
  'CREATE_ONE_SESSION_FAILURE',

  'GET_ONE_SESSION_ACTION',
  'GET_ONE_SESSION_SUCCESS',
  'GET_ONE_SESSION_FAILURE'
);

// Create one session
export const createOneSessionAction = (payload) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_ACTION, { payload });
export const createOneSessionSuccessAction = (data) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_SUCCESS, { data });
export const createOneSessionFailureAction = (error) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_FAILURE, { error });

// Get one session
export const getOneSessionAction = (id) =>
  makeActionCreator(SessionTypes.GET_ONE_SESSION_ACTION, { id });
export const getOneSessionSuccessAction = (data) =>
  makeActionCreator(SessionTypes.GET_ONE_SESSION_SUCCESS, { data });
export const getOneSessionFailureAction = (error) =>
  makeActionCreator(SessionTypes.GET_ONE_SESSION_FAILURE, { error });

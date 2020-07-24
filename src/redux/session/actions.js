import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const SessionTypes = makeConstantCreator(
  'CREATE_ONE_SESSION_ACTION',
  'CREATE_ONE_SESSION_SUCCESS',
  'CREATE_ONE_SESSION_FAILURE',
);

// Create one room
export const createOneSessionAction = (payload) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_ACTION, { payload });
export const createOneSessionSuccessAction = (data) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_SUCCESS, { data });
export const createOneSessionFailureAction = (error) =>
  makeActionCreator(SessionTypes.CREATE_ONE_SESSION_FAILURE, { error });

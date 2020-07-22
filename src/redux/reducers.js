import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { test } from './test/reducer';
import { question } from './question/reducer';
import { user } from './user/reducer';
import { tag } from './tag/reducer';
import { room } from './room/reducer';
import { session } from './session/reducer';
import { userAnswer } from './user-answer/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    test,
    question,
    tag,
    room,
    session,
    userAnswer,
  });

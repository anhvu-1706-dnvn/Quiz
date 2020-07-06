import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { test } from './test/reducer';
import { question } from './question/reducer';
import { user } from './user/reducer';
import { tag } from './tag/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    user,
    test,
    question,
    tag,
  });

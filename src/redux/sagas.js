import { all } from "redux-saga/effects";
import userSaga from "./user/sagas";
// import trainingSaga from "./training/sagas";
import questionSaga from "./question/sagas";
import testSaga from "./test/sagas";

export default function* root() {
  yield all([
    ...userSaga,
    ...questionSaga,
    ...testSaga,
  ]);
}

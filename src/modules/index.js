import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import auth, { authSaga } from "./auth";
import loading from "./loading";
import admin, { adminSaga } from "./admin";

const rootReducer = combineReducers({
  auth,
  loading,
  admin,
});

export function* rootSaga() {
  yield all([authSaga(), adminSaga()]);
}

export default rootReducer;
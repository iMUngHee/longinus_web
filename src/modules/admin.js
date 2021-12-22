import { createAction } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { call, takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";

const TEMP_SET_ADMIN = "admin/TEMP_SET_ADMIN";

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("admin/CHECK");

const LOGOUT = 'admin/LOGOUT';

export const tempSetAdmin = createAction(TEMP_SET_ADMIN, (admin) => admin);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('admin');
  } catch(e) {
    console.log('localStorage is not working.');
  }
}

function* logoutSaga() {
  try{
    yield call(authAPI.logout);
    localStorage.removeItem('admin');
  } catch(e) {
    console.log(e);
  }
}

export function* adminSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  admin: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_ADMIN]: (state, { payload: admin }) => ({
      ...state,
      admin,
    }),
    [CHECK_SUCCESS]: (state, {payload: admin}) => ({
      ...state,
      admin,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, {payload: error}) => ({
      ...state,
      admin: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      admin: null,
    })
  },
  initialState
);

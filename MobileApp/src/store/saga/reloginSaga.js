import {LOGINSUCCESS} from '../actions/types';
import {put} from 'redux-saga/effects';
export default function* (res) {
  yield put({type: LOGINSUCCESS, payload: res.payload.user});
}

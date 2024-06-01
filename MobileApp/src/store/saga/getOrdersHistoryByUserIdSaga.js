import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS,
  GET_ORDERS_HISTORY_BY_USER_ID_FAIL
} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS, payload: res});
  } catch (error) {
    yield put({type: GET_ORDERS_HISTORY_BY_USER_ID_FAIL, payload: error.message});
  }
}

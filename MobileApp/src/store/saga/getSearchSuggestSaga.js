import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  GET_SEARCH_SUGGEST_SUCCESS,
  GET_SEARCH_SUGGEST_FAIL,
} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: GET_SEARCH_SUGGEST_SUCCESS, payload: res});
  } catch (error) {
    yield put({type: GET_SEARCH_SUGGEST_FAIL, payload: error.message});
  }
}

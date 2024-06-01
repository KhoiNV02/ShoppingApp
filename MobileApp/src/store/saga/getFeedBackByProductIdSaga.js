import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {GET_FEEDBACKS_BY_PRODUCT_ID_FAIL, GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS, payload: res});
  } catch (error) {
    yield put({
      type: GET_FEEDBACKS_BY_PRODUCT_ID_FAIL,
      payload: error.message,
    });
  }
}

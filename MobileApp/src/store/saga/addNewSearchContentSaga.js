import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  ADD_SEARCH_CONTENT_SUCCESS,
  ADD_SEARCH_CONTENT_FAIL,
} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({
      type: ADD_SEARCH_CONTENT_SUCCESS,
      payload: res.content,
    });
  } catch (error) {
    yield put({type: ADD_SEARCH_CONTENT_FAIL, payload: 'Thêm mới thất bại'});
  }
}

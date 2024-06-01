import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAIL,
} from '../actions/types';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: UPDATE_CART_ITEM_SUCCESS, payload: action.cartItem});
  } catch (error) {
    yield put({type: UPDATE_CART_ITEM_FAIL, payload: 'Cập nhật thất bại'});
  }
}

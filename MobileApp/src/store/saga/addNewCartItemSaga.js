import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {ADD_CART_ITEM_SUCCESS, ADD_CART_ITEM_FAIL} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: ADD_CART_ITEM_SUCCESS, payload: res.updated ? 0 : 1});
    ToastMessage({message: i18n.t('Add To Cart Success')});
  } catch (error) {
    yield put({type: ADD_CART_ITEM_FAIL, payload: 'Thêm thất bại'});
    ToastMessage({message: i18n.t('Add To Cart Fail')});
  }
}

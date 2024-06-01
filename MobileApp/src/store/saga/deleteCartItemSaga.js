import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  DELELE_CART_ITEM_SUCCESS,
  DELELE_CART_ITEM_FAIL,
} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: DELELE_CART_ITEM_SUCCESS, payload: action.cartItem});
    ToastMessage({message: i18n.t('Delete Success')});
  } catch (error) {
    yield put({type: DELELE_CART_ITEM_FAIL, payload: 'Xóa thất bại'});
    ToastMessage({message: i18n.t('Delete Fail')});
  }
}

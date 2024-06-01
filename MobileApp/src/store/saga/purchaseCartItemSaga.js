import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {PURCHASE_CART_ITEM, PURCHASE_CART_ITEM_SUCCESS} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    yield call(makeRequest, action.payload.config);
    yield put({type: PURCHASE_CART_ITEM_SUCCESS, payload: action.cartItem});
    ToastMessage({message:i18n.t('Buy Success')});
  } catch (error) {
    ToastMessage({message:i18n.t('Buy Fail')});
  }
}

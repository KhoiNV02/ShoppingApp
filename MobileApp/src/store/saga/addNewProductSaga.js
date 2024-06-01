import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {ADD_NEW_PRODUCT_SUCCESS, ADD_NEW_PRODUCT_FAIL} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: ADD_NEW_PRODUCT_SUCCESS, payload: 'Thêm mới thành công'});
    ToastMessage({message: i18n.t('Add Success')});
  } catch (error) {
    yield put({type: ADD_NEW_PRODUCT_FAIL, payload: 'Thêm mới thất bại'});
    ToastMessage({message: i18n.t('Add Fail')});
  }
}

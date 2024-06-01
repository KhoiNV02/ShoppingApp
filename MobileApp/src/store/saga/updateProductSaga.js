import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {UPDATESUCCESS, UPDATEFAIL, RESETUPDATE} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: UPDATESUCCESS, payload: res.message});
    if (action.payload.config.data.type === 'sold')
      ToastMessage({message: i18n.t('Buy Success')});
  } catch (error) {
    yield put({type: UPDATEFAIL, payload: 'Mua hàng thất bại'});
    if (action.payload.config.data.type === 'sold')
      ToastMessage({message: i18n.t('Buy Fail')});
  }
}

import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {LOGINFAIL, LOGINSUCCESS} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: LOGINSUCCESS, payload: res});
    yield call(AsyncStorage.setItem, 'user', res.username);
    yield call(AsyncStorage.setItem, '_id', res._id);
    ToastMessage({message: i18n.t('Login successful')});
  } catch (error) {
    yield put({type: LOGINFAIL});
    ToastMessage({message: i18n.t('Incorrect'), type: 'error'});
  }
}

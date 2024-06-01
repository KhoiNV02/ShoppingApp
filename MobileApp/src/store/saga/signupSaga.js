import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {LOGINSUCCESS} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reduxSaga from 'redux-saga';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: LOGINSUCCESS, payload: res});
    yield call(AsyncStorage.setItem, 'user', res.username);
    yield call(AsyncStorage.setItem, '_id', res._id);
    ToastMessage({message: i18n.t('Signup successful')});
  } catch (error) {
    ToastMessage({message: i18n.t('Username is exist'), type: 'error'});
  }
}

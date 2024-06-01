import {call, put} from 'redux-saga/effects';
import {LOGOUT} from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function* () {
  yield call(AsyncStorage.removeItem, 'user');
  yield call(AsyncStorage.removeItem, '_id');
}

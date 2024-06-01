import '../../../../__mock__/react-native-toast-message.js';
import '../../../../__mock__/async-storage.js';

import {testSaga} from 'redux-saga-test-plan';
import {LOGOUT} from '../../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoutSaga from '../logoutSaga.js';

describe('logout saga test', () => {
  it('should call logout saga ', () => {
    testSaga(logoutSaga, {
      type: LOGOUT,
    })
      .next()
      .call(AsyncStorage.removeItem, 'user')
      .next()
      .call(AsyncStorage.removeItem, '_id')
      .next()
      .isDone();
  });
});

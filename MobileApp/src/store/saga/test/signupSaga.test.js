import '../../../../__mock__/react-native-toast-message.js';
import '../../../../__mock__/async-storage.js';

import {testSaga} from 'redux-saga-test-plan';
import {LOGIN, LOGINFAIL, LOGINSUCCESS, SIGNUP} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import loginSaga from '../loginSaga.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signupSaga from '../signupSaga.js';

describe('login saga test', () => {
  const config = {
    url: `auth/signup`,
    method: 'POST',
    params: {
      username: 'a',
      password: '1',
    },
  };

  const res = {username: 'a', _id: '1'};

  const error = {message: 'login fail'};

  it('should call login saga success', () => {
    testSaga(signupSaga, {
      type: SIGNUP,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: LOGINSUCCESS, payload: res})
      .next()
      .call(AsyncStorage.setItem, 'user', res.username)
      .next()
      .call(AsyncStorage.setItem, '_id', res._id)
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call login saga fail', () => {
    testSaga(signupSaga, {
      type: SIGNUP,
      payload: {config},
    })
      .next()
      .throw(error)
      .next()
      .isDone();
  });
});

import {testSaga} from 'redux-saga-test-plan';
import {LOGINSUCCESS, RELOGIN} from '../../actions/types';
import reloginSaga from '../reloginSaga.js';

describe('relogin saga test', () => {
    const res = {payload: {user: {_id: '1', username: 'a'}}};
    const user = {_id: '1', username: 'a'};
    it('should call relogin saga success', () => {
      testSaga(reloginSaga, {
        type: RELOGIN,
        payload: {user},
      })
        .next()
        .put({type: LOGINSUCCESS, payload: res.payload.user})
        .next()
        .isDone();
    });
  });

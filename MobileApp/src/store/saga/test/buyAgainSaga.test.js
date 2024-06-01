import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  BUY_AGAIN,
  BUY_AGAIN_FAIL,
  BUY_AGAIN_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import buyAgainSaga from '../buyAgainSaga.js';

describe('add feedback saga test', () => {
  const config = {
    url: `cartItems`,
    method: 'POST',
    data: {
      orderId: '31ds1g15d631',
    },
  };
  const res = {data: {message: 'Feedback submitted successfully'}};
  const error = {message: 'Feedback submitted fail'}; 

  it('should call buy again saga success', () => {
    testSaga(buyAgainSaga, {type: BUY_AGAIN, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: BUY_AGAIN_SUCCESS, payload: res})
      .next()
      .isDone();
  });

  it('should call buy again saga fail', () => {
    testSaga(buyAgainSaga, {type: BUY_AGAIN, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .put({type: BUY_AGAIN_FAIL, payload: error.message})
      .next()
      .isDone();
  });
});

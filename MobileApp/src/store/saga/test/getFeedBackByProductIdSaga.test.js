import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  GET_FEEDBACKS_BY_PRODUCT_ID,
  GET_FEEDBACKS_BY_PRODUCT_ID_FAIL,
  GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import getFeedBackByProductIdSaga from '../getFeedBackByProductIdSaga.js';

describe('get feedback by product id saga test', () => {
  const config = {
    url: `feedbacks/12345`,
    method: 'GET',
    params: {
      skip: 0,
      limit: 10,
    },
  };

  const res = [{}];

  const error = {message: 'delete cart item fail'};

  it('should call get feedback by product id saga success', () => {
    testSaga(getFeedBackByProductIdSaga, {
      type: GET_FEEDBACKS_BY_PRODUCT_ID,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS, payload: res})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call  get feedback by product id saga fail', () => {
    testSaga(getFeedBackByProductIdSaga, {
      type: GET_FEEDBACKS_BY_PRODUCT_ID,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .put({type: GET_FEEDBACKS_BY_PRODUCT_ID_FAIL, payload: error.message})
      .next()
      .isDone();
  });
});

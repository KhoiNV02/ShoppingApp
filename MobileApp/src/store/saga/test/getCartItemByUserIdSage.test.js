import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  GET_CART_ITEM_BY_USER_ID,
  GET_CART_ITEM_BY_USER_ID_FAIL,
  GET_CART_ITEM_BY_USER_ID_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import getCartItemByUserIdSaga from '../getCartItemByUserIdSaga.js';

describe('get cart item by user id saga test', () => {
  const config = {
    url: `cartItems/12345`,
    method: 'GET',
    params: {
      skip: 0,
      limit: 10,
    },
  };

  const res = [{}];

  const error = {message: 'delete cart item fail'};

  it('should call get cart item by user id saga success', () => {
    testSaga(getCartItemByUserIdSaga, {
      type: GET_CART_ITEM_BY_USER_ID,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_CART_ITEM_BY_USER_ID_SUCCESS, payload: res})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga fail', () => {
    testSaga(getCartItemByUserIdSaga, {
      type: GET_CART_ITEM_BY_USER_ID,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .put({type: GET_CART_ITEM_BY_USER_ID_FAIL, payload: error.message})
      .next()
      .isDone();
  });
});

import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import addNewOrderSaga from '../addNewOrderSaga.js';
import {
  ADD_NEW_ORDER,
  ADD_NEW_ORDER_SUCCESS,
  ADD_NEW_ORDER_FAIL,
  PURCHASE_CART_ITEM_SUCCESS
} from '../../actions/types.js';
import {makeRequest} from '../../../common/utils/httpRequestAPI.js';

describe('add new order saga test', () => {
  const config = {
    url: `orders`,
    method: 'POST',
    data: {
      cartItemId: 'kofaofkakfka',
      user: 'kfoakoffa',
    },
  };
  const cartItems=[{}]
  it('should call add new order saga success', () => {
    testSaga(addNewOrderSaga, {type: ADD_NEW_ORDER, payload: {config}, cartItems})
      .next()
      .call(makeRequest, config)
      .next()
      .put({type: PURCHASE_CART_ITEM_SUCCESS, payload: cartItems})
      .next()
      .put({type: ADD_NEW_ORDER_SUCCESS})
      .next()
      .next()
      .isDone();
  });

  it('should call add new order saga fail', () => {
    
    testSaga(addNewOrderSaga, {type: ADD_NEW_ORDER, payload: {config},cartItems})
      .next()
      .call(makeRequest, config)
      .throw(new Error())
      .put({type: ADD_NEW_ORDER_FAIL})
      .next()
      .isDone();
  });
});

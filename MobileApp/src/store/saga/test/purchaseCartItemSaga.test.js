import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  DELELE_CART_ITEM,
  DELELE_CART_ITEM_FAIL,
  DELELE_CART_ITEM_SUCCESS,
  PURCHASE_CART_ITEM,
  PURCHASE_CART_ITEM_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import deleteCartItemSaga from '../deleteCartItemSaga.js';
import purchaseCartItemSaga from '../purchaseCartItemSaga.js';
describe('purchase cart item saga test', () => {
  const config = {
    url: `cartitems`,
    method: 'POST',
    data: {},
  };

  const cartItem = [
    {
      data: {},
    },
  ];

  const error = {message: ''};

  it('should call purchase cartitem saga success', () => {
    testSaga(purchaseCartItemSaga, {
      type: PURCHASE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next()
      .put({type: PURCHASE_CART_ITEM_SUCCESS, payload: cartItem})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add new cart item saga fail', () => {
    testSaga(purchaseCartItemSaga, {
      type: PURCHASE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .next()
      .isDone();
  });
});

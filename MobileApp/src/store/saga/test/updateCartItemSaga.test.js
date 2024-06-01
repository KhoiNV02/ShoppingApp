import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  DELELE_CART_ITEM,
  DELELE_CART_ITEM_FAIL,
  DELELE_CART_ITEM_SUCCESS,
  PURCHASE_CART_ITEM,
  PURCHASE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM,
  UPDATE_CART_ITEM_FAIL,
  UPDATE_CART_ITEM_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import deleteCartItemSaga from '../deleteCartItemSaga.js';
import purchaseCartItemSaga from '../purchaseCartItemSaga.js';
import updateCartItemSaga from '../updateCartItemSaga.js';
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
    testSaga(updateCartItemSaga, {
      type: UPDATE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next()
      .put({type: UPDATE_CART_ITEM_SUCCESS, payload: cartItem})
      .next()
      .isDone();
  });

  it('should call add new cart item saga fail', () => {
    testSaga(updateCartItemSaga, {
      type: UPDATE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .put({type: UPDATE_CART_ITEM_FAIL, payload: 'Cập nhật thất bại'})
      .next()
      .isDone();
  });
});

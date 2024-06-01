import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  DELELE_CART_ITEM,
  DELELE_CART_ITEM_FAIL,
  DELELE_CART_ITEM_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import deleteCartItemSaga from '../deleteCartItemSaga.js';
describe('delete cart item saga test', () => {
  const config = {
    url: `cartItems`,
    method: 'DELETE',
    data: {},
  };

  const cartItem = [
    {
      data: {},
    },
  ];

  const error = {message: 'delete cart item fail'};

  it('should call add new cart item saga success', () => {
    testSaga(deleteCartItemSaga, {
      type: DELELE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next(cartItem)
      .put({type: DELELE_CART_ITEM_SUCCESS, payload: cartItem})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add new cart item saga fail', () => {
    testSaga(deleteCartItemSaga, {
      type: DELELE_CART_ITEM,
      payload: {config},
      cartItem,
    })
      .next()
      .call(makeRequest, config)
      .next()
      .throw(error)
      .put({type: DELELE_CART_ITEM_FAIL, payload: 'Xóa thất bại'})
      .next()
      .isDone();
  });
});

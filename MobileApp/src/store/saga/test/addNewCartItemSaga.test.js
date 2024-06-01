import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_FAIL,
  ADD_CART_ITEM_SUCCESS,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import addNewCartItemSaga from '../addNewCartItemSaga.js';
describe('add new cart item saga test', () => {
  const config = {
    url: `cartItems`,
    method: 'POST',
    data: {
      user: '661641a9b6980ad4ee8243c5',
      product: '661652b509bed736d8917641',
      quantity: '2',
    },
  };
  const response = {updated: true};

  const error = {message: 'add new cart item fail'};

  it('should call add new cart item saga success', () => {
    const res = {updated: false};
    testSaga(addNewCartItemSaga, {type: ADD_CART_ITEM, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: ADD_CART_ITEM_SUCCESS, payload: res.updated ? 0 : 1})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add new cart item saga success', () => {
    const res = {updated: true};
    testSaga(addNewCartItemSaga, {type: ADD_CART_ITEM, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: ADD_CART_ITEM_SUCCESS, payload: res.updated ? 0 : 1})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add new cart item saga fail', () => {
    testSaga(addNewCartItemSaga, {type: ADD_CART_ITEM, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(response)
      .throw(error)
      .put({type: ADD_CART_ITEM_FAIL, payload: 'Thêm thất bại'})
      .next()
      .isDone();
  });
});

import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import {
  GET_BESTSELLERS_SUCCESS,
  GET_MOSTEXPENSIVE_SUCCESS,
  GET_MOSTVIEWED_SUCCESS,
  GET_RECENTLYADDED_SUCCESS,
  GET_ALL_BESTSELLERS_SUCCESS,
  GET_ALL_MOSTVIEWED_SUCCESS,
  GET_ALL_RECENTLYADDED_SUCCESS,
  GET_ALL_MOSTEXPENSIVE_SUCCESS,
  GET_HOMEPRODUCT,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';
import getCartItemByUserIdSaga from '../getCartItemByUserIdSaga.js';
import {getHomeProductSaga} from '../homeProductSaga.js';

describe('get home product saga test', () => {
  const config = {
    url: `product`,
    method: 'GET',
    params: {
      skip: 0,
      limit: 10,
    },
  };

  const res = {data: []};

  const error = {message: 'delete cart item fail'};

  it('should call get cart item by user id saga success type : GET_BESTSELLERS_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_BESTSELLERS_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_BESTSELLERS_SUCCESS, payload: res.data})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type : GET_MOSTVIEWED_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_MOSTVIEWED_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_MOSTVIEWED_SUCCESS, payload: res.data})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type :GET_RECENTLYADDED_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_RECENTLYADDED_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_RECENTLYADDED_SUCCESS, payload: res.data})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type :GET_MOSTEXPENSIVE_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_MOSTEXPENSIVE_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_MOSTEXPENSIVE_SUCCESS, payload: res.data})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type : GET_ALL_BESTSELLERS_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_ALL_BESTSELLERS_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_ALL_BESTSELLERS_SUCCESS, payload: res})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type : GET_ALL_MOSTVIEWED_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_ALL_MOSTVIEWED_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_ALL_MOSTVIEWED_SUCCESS, payload: res})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type :GET_ALL_RECENTLYADDED_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_ALL_RECENTLYADDED_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_ALL_RECENTLYADDED_SUCCESS, payload: res})
      .next()
      .isDone();
  });

  it('should call get cart item by user id saga success type :GET_ALL_MOSTEXPENSIVE_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: GET_ALL_MOSTEXPENSIVE_SUCCESS,
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: GET_ALL_MOSTEXPENSIVE_SUCCESS, payload: res})
      .next()
      .isDone();
  });
  it('should call get cart item by user id saga success type :GET_ALL_MOSTEXPENSIVE_SUCCESS', () => {
    testSaga(getHomeProductSaga, {
      type: GET_HOMEPRODUCT,
      payload: {config},
      category: '',
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .isDone();
  });
});

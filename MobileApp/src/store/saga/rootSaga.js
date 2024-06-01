import {
  ADD_NEW_FEEDBACK,
  BUY_AGAIN,
  GET_FEEDBACKS_BY_PRODUCT_ID,
  ADD_SEARCH_CONTENT,
  GET_HOMEPRODUCT,
  LOGIN,
  LOGOUT,
  PURCHASE_CART_ITEM,
  RELOGIN,
  SIGNUP,
  UPDATEPRODUCT,
} from '../actions/types';

import {
  all,
  take,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';

import updateProductSaga from './updateProductSaga';

import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';
import reloginSaga from './reloginSaga';
import signupSaga from './signupSaga';
import {getHomeProductSaga} from './homeProductSaga';

import {
  GET_PRODUCT_BY_USER_ID,
  DELELE_PRODUCT,
  ADD_NEW_PRODUCT,
  ADD_CART_ITEM,
  GET_PRODUCT_BY_ID,
  DELELE_CART_ITEM,
  UPDATE_CART_ITEM,
  GET_CART_ITEM_BY_USER_ID,
  ADD_NEW_ORDER,
  GET_ORDERS_HISTORY_BY_USER_ID,
  GET_SEARCH_SUGGEST,
  GET_SEARCH_RESULT,
} from '../actions/types';

import getProductByUserIdSaga from './getProductByUserIdSaga';
import deleteProductSaga from './deleteProductSaga';
import addNewProductSaga from './addNewProductSaga';
import addNewCartItemSaga from './addNewCartItemSaga';
import updateCartItemSaga from './updateCartItemSaga';
import getProductByProductIdSaga from './getProductByProductIdSaga';
import deleteCartItemSaga from './deleteCartItemSaga';
import getCartItemByUserIdSaga from './getCartItemByUserIdSaga';
import purchaseCartItemSaga from './purchaseCartItemSaga';
import addNewOrderSaga from './addNewOrderSaga';
import getOrdersHistoryByUserIdSaga from './getOrdersHistoryByUserIdSaga';
import addFeedbackSaga from './addFeedbackSaga';
import getFeedBackByProductIdSaga from './getFeedBackByProductIdSaga';
import buyAgainSaga from './buyAgainSaga';
import getSearchSuggestSaga from './getSearchSuggestSaga';
import addNewSearchContentSaga from './addNewSearchContentSaga';
import getSearchResultSaga from './getSearchResultSaga';
const sagas = function* () {
  yield all([
    takeEvery(UPDATEPRODUCT, updateProductSaga),
    takeEvery(GET_PRODUCT_BY_ID, getProductByProductIdSaga),
    takeEvery(DELELE_CART_ITEM, deleteCartItemSaga),
    takeEvery(UPDATE_CART_ITEM, updateCartItemSaga),
    takeEvery(GET_CART_ITEM_BY_USER_ID, getCartItemByUserIdSaga),
    takeEvery(PURCHASE_CART_ITEM, purchaseCartItemSaga),
    takeEvery(ADD_NEW_ORDER,addNewOrderSaga),
    takeEvery(GET_ORDERS_HISTORY_BY_USER_ID,getOrdersHistoryByUserIdSaga),
    takeEvery(ADD_NEW_FEEDBACK,addFeedbackSaga),
    takeEvery(GET_FEEDBACKS_BY_PRODUCT_ID,getFeedBackByProductIdSaga),
    takeEvery(BUY_AGAIN,buyAgainSaga),
    takeEvery(GET_SEARCH_SUGGEST, getSearchSuggestSaga),
    takeEvery(ADD_SEARCH_CONTENT, addNewSearchContentSaga),
    takeEvery(GET_SEARCH_RESULT, getSearchResultSaga),

    takeEvery(DELELE_PRODUCT, deleteProductSaga),
    takeEvery(ADD_NEW_PRODUCT, addNewProductSaga),
    takeEvery(ADD_CART_ITEM, addNewCartItemSaga),
    takeEvery(GET_PRODUCT_BY_USER_ID, getProductByUserIdSaga),
    takeEvery(LOGIN, loginSaga),
    takeEvery(LOGOUT, logoutSaga),
    takeEvery(RELOGIN, reloginSaga),
    takeEvery(SIGNUP, signupSaga),
    takeEvery(GET_HOMEPRODUCT, getHomeProductSaga),
  ]);
};

export default sagas;

import {
  UPDATEPRODUCT,
  LOGIN,
  LOGOUT,
  RELOGIN,
  SIGNUP,
  GET_HOMEPRODUCT,
  GET_PRODUCT_BY_USER_ID,
  GET_PRODUCT_BY_ID,
  DELELE_PRODUCT,
  ADD_NEW_PRODUCT,
  ADD_CART_ITEM,
  DELELE_CART_ITEM,
  UPDATE_CART_ITEM,
  GET_CART_ITEM_BY_USER_ID,
  CHANGE_LANGUAGES,
  PURCHASE_CART_ITEM,
  ADD_NEW_ORDER,
  GET_ORDERS_HISTORY_BY_USER_ID,
  RESET_ORDERS_HISTORY,
  ADD_NEW_FEEDBACK,
  GET_FEEDBACKS_BY_PRODUCT_ID,
  RESET_FEEDBACKS,
  SET_RATING_STATUS,
  BUY_AGAIN,
  GET_SEARCH_SUGGEST,
  ADD_SEARCH_CONTENT,
  GET_SEARCH_RESULT,
  RESET_SEARCH_RESULT,
  RESET_SEARCH_SUGGEST_HISTORY,
} from './types';

import {
  login,
  relogin,
  signup,
  logout,
  getHomeProduct,
  updateProduct,
  deleteProduct,
  addNewProduct,
  getProductByUserId,
  getProductByProductId,
  addNewCartItem,
  deleteCartItem,
  purchaseCartItem,
  updateCartItem,
  getCartItemByUserId,
  changeLanguage,
  addNewOrder,
  getOrdersHistoryByUserId,
  resetOrdersHistory,
  addNewFeedback,
  getSearchSuggest,
  getFeedbacksByProductId,
  addSearchContent,
  resetFeedBacks,
  setRatingStatus,
  buyAgain,
  getSearchResult,
  resetSearchResult,
  resetSearchSuggest,
} from './actions';

describe('Action Creators', () => {
  it('should create an action to login', () => {
    const config = { username: 'testuser', password: 'password' };
    const expectedAction = {
      type: LOGIN,
      payload: { config },
    };
    expect(login(config)).toEqual(expectedAction);
  });

  it('should create an action to relogin', () => {
    const user = { username: 'testuser', token: 'abcd1234' };
    const expectedAction = {
      type: RELOGIN,
      payload: { user },
    };
    expect(relogin(user)).toEqual(expectedAction);
  });

  it('should create an action to signup', () => {
    const config = { username: 'testuser', password: 'password', email: 'test@example.com' };
    const expectedAction = {
      type: SIGNUP,
      payload: { config },
    };
    expect(signup(config)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = { type: LOGOUT };
    expect(logout()).toEqual(expectedAction);
  });

  it('should create an action to get home product', () => {
    const config = { category: 'electronics' };
    const category = 'electronics';
    const expectedAction = {
      category: category,
      type: GET_HOMEPRODUCT,
      payload: { config },
    };
    expect(getHomeProduct(config, category)).toEqual(expectedAction);
  });

  it('should create an action to update product', () => {
    const config = { id: '1', name: 'Product1', price: 100 };
    const expectedAction = {
      type: UPDATEPRODUCT,
      payload: { config },
    };
    expect(updateProduct(config)).toEqual(expectedAction);
  });

  it('should create an action to delete product', () => {
    const config = { id: '1' };
    const expectedAction = {
      type: DELELE_PRODUCT,
      payload: { config },
    };
    expect(deleteProduct(config)).toEqual(expectedAction);
  });

  it('should create an action to add new product', () => {
    const config = { name: 'Product1', price: 100 };
    const expectedAction = {
      type: ADD_NEW_PRODUCT,
      payload: { config },
    };
    expect(addNewProduct(config)).toEqual(expectedAction);
  });

  it('should create an action to get product by user ID', () => {
    const config = { userId: '123' };
    const expectedAction = {
      type: GET_PRODUCT_BY_USER_ID,
      payload: { config },
    };
    expect(getProductByUserId(config)).toEqual(expectedAction);
  });

  it('should create an action to get product by product ID', () => {
    const config = { productId: '1' };
    const expectedAction = {
      type: GET_PRODUCT_BY_ID,
      payload: { config },
    };
    expect(getProductByProductId(config)).toEqual(expectedAction);
  });

  it('should create an action to add new cart item', () => {
    const config = { productId: '1', quantity: 2 };
    const expectedAction = {
      type: ADD_CART_ITEM,
      payload: { config },
    };
    expect(addNewCartItem(config)).toEqual(expectedAction);
  });

  it('should create an action to delete cart item', () => {
    const config = { cartItemId: '1' };
    const cartItem = { id: '1' };
    const expectedAction = {
      type: DELELE_CART_ITEM,
      payload: { config },
      cartItem: cartItem,
    };
    expect(deleteCartItem(config, cartItem)).toEqual(expectedAction);
  });

  it('should create an action to purchase cart item', () => {
    const config = { userId: '123' };
    const cartItem = { id: '1' };
    const expectedAction = {
      type: PURCHASE_CART_ITEM,
      payload: { config },
      cartItem: cartItem,
    };
    expect(purchaseCartItem(config, cartItem)).toEqual(expectedAction);
  });

  it('should create an action to update cart item', () => {
    const config = { cartItemId: '1', quantity: 3 };
    const cartItem = { id: '1' };
    const expectedAction = {
      type: UPDATE_CART_ITEM,
      payload: { config },
      cartItem: cartItem,
    };
    expect(updateCartItem(config, cartItem)).toEqual(expectedAction);
  });

  it('should create an action to get cart item by user ID', () => {
    const config = { userId: '123' };
    const expectedAction = {
      type: GET_CART_ITEM_BY_USER_ID,
      payload: { config },
    };
    expect(getCartItemByUserId(config)).toEqual(expectedAction);
  });

  it('should create an action to change language', () => {
    const lang = 'en';
    const expectedAction = {
      type: CHANGE_LANGUAGES,
      payload: lang,
    };
    expect(changeLanguage(lang)).toEqual(expectedAction);
  });

  it('should create an action to add new order', () => {
    const config = { userId: '123' };
    const cartItems = [{ id: '1', quantity: 2 }];
    const expectedAction = {
      type: ADD_NEW_ORDER,
      payload: { config },
      cartItems: cartItems,
    };
    expect(addNewOrder(config, cartItems)).toEqual(expectedAction);
  });

  it('should create an action to get orders history by user ID', () => {
    const config = { userId: '123' };
    const expectedAction = {
      type: GET_ORDERS_HISTORY_BY_USER_ID,
      payload: { config },
    };
    expect(getOrdersHistoryByUserId(config)).toEqual(expectedAction);
  });

  it('should create an action to reset orders history', () => {
    const expectedAction = { type: RESET_ORDERS_HISTORY };
    expect(resetOrdersHistory()).toEqual(expectedAction);
  });

  it('should create an action to add new feedback', () => {
    const config = { productId: '1', feedback: 'Great product!' };
    const expectedAction = {
      type: ADD_NEW_FEEDBACK,
      payload: { config },
    };
    expect(addNewFeedback(config)).toEqual(expectedAction);
  });

  it('should create an action to get search suggest', () => {
    const config = { query: 'laptop' };
    const expectedAction = {
      type: GET_SEARCH_SUGGEST,
      payload: { config },
    };
    expect(getSearchSuggest(config)).toEqual(expectedAction);
  });

  it('should create an action to get feedbacks by product ID', () => {
    const config = { productId: '1' };
    const expectedAction = {
      type: GET_FEEDBACKS_BY_PRODUCT_ID,
      payload: { config },
    };
    expect(getFeedbacksByProductId(config)).toEqual(expectedAction);
  });

  it('should create an action to add search content', () => {
    const config = { content: 'laptop' };
    const expectedAction = {
      type: ADD_SEARCH_CONTENT,
      payload: { config },
    };
    expect(addSearchContent(config)).toEqual(expectedAction);
  });

  it('should create an action to reset feedbacks', () => {
    const expectedAction = { type: RESET_FEEDBACKS };
    expect(resetFeedBacks()).toEqual(expectedAction);
  });

  it('should create an action to set rating status', () => {
    const ratingStatus = { productId: '1', rating: 5 };
    const expectedAction = {
      type: SET_RATING_STATUS,
      payload: ratingStatus,
    };
    expect(setRatingStatus(ratingStatus)).toEqual(expectedAction);
  });

  it('should create an action to buy again', () => {
    const config = { orderId: '123' };
    const expectedAction = {
      type: BUY_AGAIN,
      payload: { config },
    };
    expect(buyAgain(config)).toEqual(expectedAction);
  });

  it('should create an action to get search result', () => {
    const config = { query: 'laptop' };
    const expectedAction = {
      type: GET_SEARCH_RESULT,
      payload: { config },
    };
    expect(getSearchResult(config)).toEqual(expectedAction);
  });

  it('should create an action to reset search result', () => {
    const expectedAction = { type: RESET_SEARCH_RESULT };
    expect(resetSearchResult()).toEqual(expectedAction);
  });

  it('should create an action to reset search suggest history', () => {
    const expectedAction = { type: RESET_SEARCH_SUGGEST_HISTORY };
    expect(resetSearchSuggest()).toEqual(expectedAction);
  });
});

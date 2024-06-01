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

export const login = config => ({
  type: LOGIN,
  payload: {
    config,
  },
});

export const relogin = user => ({
  type: RELOGIN,
  payload: {
    user,
  },
});

export const signup = config => ({
  type: SIGNUP,
  payload: {
    config,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const getHomeProduct = (config, category) => {
  return {
    category: category,
    type: GET_HOMEPRODUCT,
    payload: {config},
  };
};

export const updateProduct = config => {
  return {
    type: UPDATEPRODUCT,
    payload: {config},
  };
};
export const deleteProduct = config => {
  return {
    type: DELELE_PRODUCT,
    payload: {config},
  };
};
export const addNewProduct = config => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: {config},
  };
};
export const getProductByUserId = config => {
  return {
    type: GET_PRODUCT_BY_USER_ID,
    payload: {config},
  };
};

export const getProductByProductId = config => {
  return {
    type: GET_PRODUCT_BY_ID,
    payload: {config},
  };
};

export const addNewCartItem = config => {
  return {
    type: ADD_CART_ITEM,
    payload: {config},
  };
};

export const deleteCartItem = (config, cartItem) => {
  return {
    type: DELELE_CART_ITEM,
    payload: {config},
    cartItem: cartItem,
  };
};

export const purchaseCartItem = (config, cartItem) => {
  return {
    type: PURCHASE_CART_ITEM,
    payload: {config},
    cartItem: cartItem,
  };
};

export const updateCartItem = (config, cartItem) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: {config},
    cartItem: cartItem,
  };
};

export const getCartItemByUserId = config => {
  return {
    type: GET_CART_ITEM_BY_USER_ID,
    payload: {config},
  };
};
export const changeLanguage = lang => {
  return {
    type: CHANGE_LANGUAGES,
    payload: lang,
  };
};

export const addNewOrder = (config, cartItems) => {
  return {
    type: ADD_NEW_ORDER,
    payload: {config},
    cartItems: cartItems,
  };
};

export const getOrdersHistoryByUserId = config => {
  return {
    type: GET_ORDERS_HISTORY_BY_USER_ID,
    payload: {config},
  };
};

export const resetOrdersHistory = () => {
  return {
    type: RESET_ORDERS_HISTORY,
  };
};

export const addNewFeedback = config => {
  return {
    type: ADD_NEW_FEEDBACK,
    payload: {config},
  };
};
export const getSearchSuggest = config => {
  return {
    type: GET_SEARCH_SUGGEST,
    payload: {config},
  };
};

export const getFeedbacksByProductId = config => {
  return {
    type: GET_FEEDBACKS_BY_PRODUCT_ID,
    payload: {config},
  };
};
export const addSearchContent = config => {
  return {
    type: ADD_SEARCH_CONTENT,
    payload: {config},
  };
};

export const resetFeedBacks = () => {
  return {
    type: RESET_FEEDBACKS,
  };
};

export const setRatingStatus = (ratingStatus) => {
  return {
    type: SET_RATING_STATUS,
    payload : ratingStatus
  };
};

export const buyAgain = config => {
  return {
    type: BUY_AGAIN,
    payload: {config},
  };
};
export const getSearchResult = config => {
  return {
    type: GET_SEARCH_RESULT,
    payload: {config},
  };
};


export const resetSearchResult = () => {
  return {
    type: RESET_SEARCH_RESULT,
  };
};

export const resetSearchSuggest = () => {
  return {
    type: RESET_SEARCH_SUGGEST_HISTORY,
  };
};

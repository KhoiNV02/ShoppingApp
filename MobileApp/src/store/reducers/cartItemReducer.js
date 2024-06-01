import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_SUCCESS,
  ADD_CART_ITEM_FAIL,
  DELELE_CART_ITEM,
  DELELE_CART_ITEM_SUCCESS,
  DELELE_CART_ITEM_FAIL,
  UPDATE_CART_ITEM,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAIL,
  GET_CART_ITEM_BY_USER_ID,
  GET_CART_ITEM_BY_USER_ID_SUCCESS,
  GET_CART_ITEM_BY_USER_ID_FAIL,
  PURCHASE_CART_ITEM,
  PURCHASE_CART_ITEM_SUCCESS,
  BUY_AGAIN,
  BUY_AGAIN_SUCCESS,
  BUY_AGAIN_FAIL,
} from '../actions/types';
const initData = {
  message: '',
  isLoading: false,
  isFail: false,
  isAddingLoading: false,
  isSuccess: false,
  isAddingSuccess: false,
  cartItems: [],
  cartItemCount: 0,
};
export default cartItemReducer = (state = initData, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        isAddingLoading: true,
        isAddingSuccess: false,
      };
    case ADD_CART_ITEM_SUCCESS:
      return {
        ...state,
        isAddingLoading: false,
        isFail: false,
        isAddingSuccess: true,
        cartItemCount: state.cartItemCount + action.payload,
      };
    case ADD_CART_ITEM_FAIL:
      return {
        ...state,
        isAddingLoading: false,
        isFail: true,
        isAddingSuccess: false,
      };

    case DELELE_CART_ITEM:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case DELELE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        isFail: false,
        isSuccess: true,
        cartItemCount: state.cartItemCount - 1,
      };
    case DELELE_CART_ITEM_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
        isSuccess: false,
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        isFail: false,
      };
    case UPDATE_CART_ITEM_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    case GET_CART_ITEM_BY_USER_ID:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CART_ITEM_BY_USER_ID_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        isFail: false,
        cartItemCount: action.payload.length,
      };
    case GET_CART_ITEM_BY_USER_ID_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    case PURCHASE_CART_ITEM:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case PURCHASE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        isFail: false,
        isSuccess: true,
        cartItemCount: 0,
      };
    case BUY_AGAIN:
      return {
        ...state,
        isLoading: true,
      };
    case BUY_AGAIN_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        isLoading: false,
        isFail: false,
        cartItemCount: action.payload.length,
      };
    case BUY_AGAIN_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    default:
      return state;
  }
};

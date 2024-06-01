import cartItemReducer from '../cartItemReducer';
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
} from '../../actions/types';

describe('cartItemReducer', () => {
  const initialState = {
    message: '',
    isLoading: false,
    isFail: false,
    isAddingLoading: false,
    isSuccess: false,
    isAddingSuccess: false,
    cartItems: [],
    cartItemCount: 0,
  };

  it('should return the initial state', () => {
    expect(cartItemReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_CART_ITEM', () => {
    const action = { type: ADD_CART_ITEM };
    const expectedState = { ...initialState, isAddingLoading: true, isAddingSuccess: false };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_CART_ITEM_SUCCESS', () => {
    const action = { type: ADD_CART_ITEM_SUCCESS, payload: 1 };
    const expectedState = {
      ...initialState,
      isAddingLoading: false,
      isFail: false,
      isAddingSuccess: true,
      cartItemCount: initialState.cartItemCount + action.payload,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_CART_ITEM_FAIL', () => {
    const action = { type: ADD_CART_ITEM_FAIL };
    const expectedState = { ...initialState, isAddingLoading: false, isFail: true, isAddingSuccess: false };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELELE_CART_ITEM', () => {
    const action = { type: DELELE_CART_ITEM };
    const expectedState = { ...initialState, isLoading: true, isSuccess: false };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELELE_CART_ITEM_SUCCESS', () => {
    const action = { type: DELELE_CART_ITEM_SUCCESS, payload: [] };
    const expectedState = {
      ...initialState,
      cartItems: action.payload,
      isLoading: false,
      isFail: false,
      isSuccess: true,
      cartItemCount: initialState.cartItemCount - 1,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELELE_CART_ITEM_FAIL', () => {
    const action = { type: DELELE_CART_ITEM_FAIL, payload: 'error' };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
      isSuccess: false,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CART_ITEM', () => {
    const action = { type: UPDATE_CART_ITEM };
    const expectedState = { ...initialState, isLoading: true, isSuccess: false };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CART_ITEM_SUCCESS', () => {
    const action = { type: UPDATE_CART_ITEM_SUCCESS, payload: [] };
    const expectedState = {
      ...initialState,
      cartItems: action.payload,
      isLoading: false,
      isFail: false,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CART_ITEM_FAIL', () => {
    const action = { type: UPDATE_CART_ITEM_FAIL, payload: 'error' };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CART_ITEM_BY_USER_ID', () => {
    const action = { type: GET_CART_ITEM_BY_USER_ID };
    const expectedState = { ...initialState, isLoading: true };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CART_ITEM_BY_USER_ID_SUCCESS', () => {
    const action = { type: GET_CART_ITEM_BY_USER_ID_SUCCESS, payload: [{ id: 1 }, { id: 2 }] };
    const expectedState = {
      ...initialState,
      cartItems: action.payload,
      isLoading: false,
      isFail: false,
      cartItemCount: action.payload.length,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_CART_ITEM_BY_USER_ID_FAIL', () => {
    const action = { type: GET_CART_ITEM_BY_USER_ID_FAIL, payload: 'error' };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle PURCHASE_CART_ITEM', () => {
    const action = { type: PURCHASE_CART_ITEM };
    const expectedState = { ...initialState, isLoading: true, isSuccess: false };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle PURCHASE_CART_ITEM_SUCCESS', () => {
    const action = { type: PURCHASE_CART_ITEM_SUCCESS, payload: [] };
    const expectedState = {
      ...initialState,
      cartItems: action.payload,
      isLoading: false,
      isFail: false,
      isSuccess: true,
      cartItemCount: 0,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle BUY_AGAIN', () => {
    const action = { type: BUY_AGAIN };
    const expectedState = { ...initialState, isLoading: true };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle BUY_AGAIN_SUCCESS', () => {
    const action = { type: BUY_AGAIN_SUCCESS, payload: [{ id: 1 }, { id: 2 }] };
    const expectedState = {
      ...initialState,
      cartItems: action.payload,
      isLoading: false,
      isFail: false,
      cartItemCount: action.payload.length,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle BUY_AGAIN_FAIL', () => {
    const action = { type: BUY_AGAIN_FAIL, payload: 'error' };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(cartItemReducer(initialState, action)).toEqual(expectedState);
  });
});

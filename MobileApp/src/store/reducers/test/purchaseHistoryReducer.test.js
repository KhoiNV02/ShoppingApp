// purchaseHistoryReducer.test.js
import purchaseHistoryReducer from '../purchaseHistoryReducer';
import {
  ADD_NEW_ORDER,
  ADD_NEW_ORDER_SUCCESS,
  ADD_NEW_ORDER_FAIL,
  GET_ORDERS_HISTORY_BY_USER_ID,
  GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS,
  GET_ORDERS_HISTORY_BY_USER_ID_FAIL,
  RESET_ORDERS_HISTORY,
} from '../../actions/types';
describe('purchaseHistoryReducer', () => {
  const initialState = {
    isGetOrderLoading: false,
    isFail: false,
    isAddingLoading: false,
    isAddingSuccess: false,
    ordersHistory: [],
    totalOrder: 0,
  };

  it('should return the initial state', () => {
    expect(purchaseHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_NEW_ORDER', () => {
    const action = {type: ADD_NEW_ORDER};
    const expectedState = {
      ...initialState,
      isAddingLoading: true,
      isAddingSuccess: false,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_ORDER_SUCCESS', () => {
    const action = {type: ADD_NEW_ORDER_SUCCESS};
    const expectedState = {
      ...initialState,
      isAddingLoading: false,
      isFail: false,
      isAddingSuccess: true,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_ORDER_FAIL', () => {
    const action = {type: ADD_NEW_ORDER_FAIL};
    const expectedState = {
      ...initialState,
      isAddingLoading: false,
      isFail: true,
      isAddingSuccess: false,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ORDERS_HISTORY_BY_USER_ID', () => {
    const action = {type: GET_ORDERS_HISTORY_BY_USER_ID};
    const expectedState = {
      ...initialState,
      isGetOrderLoading: true,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS', () => {
    const action = {
      type: GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS,
      payload: {
        data: [{id: 1, item: 'Item 1'}],
        totalOrder: 1,
      },
    };
    const expectedState = {
      ...initialState,
      ordersHistory: action.payload.data,
      totalOrder: action.payload.totalOrder,
      isGetOrderLoading: false,
      isFail: false,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ORDERS_HISTORY_BY_USER_ID_FAIL', () => {
    const action = {
      type: GET_ORDERS_HISTORY_BY_USER_ID_FAIL,
      payload: 'Error message',
    };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isGetOrderLoading: false,
      isFail: true,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_ORDERS_HISTORY', () => {
    const action = {type: RESET_ORDERS_HISTORY};
    const expectedState = {
      ...initialState,
      ordersHistory: [],
      totalOrder: 0,
    };
    expect(purchaseHistoryReducer(initialState, action)).toEqual(expectedState);
  });
});

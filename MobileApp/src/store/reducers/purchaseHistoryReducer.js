import {
  ADD_NEW_ORDER,
  ADD_NEW_ORDER_SUCCESS,
  ADD_NEW_ORDER_FAIL,
  GET_ORDERS_HISTORY_BY_USER_ID,
  GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS,
  GET_ORDERS_HISTORY_BY_USER_ID_FAIL,
  RESET_ORDERS_HISTORY,
} from '../actions/types';
const initData = {
  isGetOrderLoading: false,
  isFail: false,
  isAddingLoading: false,
  isAddingSuccess: false,
  ordersHistory: [],
  totalOrder: 0,
};
export default purchaseHistoryReducer = (state = initData, action) => {
  switch (action.type) {
    case ADD_NEW_ORDER:
      return {
        ...state,
        isAddingLoading: true,
        isAddingSuccess: false,
      };
    case ADD_NEW_ORDER_SUCCESS:
      return {
        ...state,
        isAddingLoading: false,
        isFail: false,
        isAddingSuccess: true,
      };
    case ADD_NEW_ORDER_FAIL:
      return {
        ...state,
        isAddingLoading: false,
        isFail: true,
        isAddingSuccess: false,
      };
    case GET_ORDERS_HISTORY_BY_USER_ID:
      return {
        ...state,
        isGetOrderLoading: true,
      };
    case GET_ORDERS_HISTORY_BY_USER_ID_SUCCESS:
      return {
        ...state,
        ordersHistory: action.payload.data,
        totalOrder: action.payload.totalOrder,
        isGetOrderLoading: false,
        isFail: false,
      };
    case GET_ORDERS_HISTORY_BY_USER_ID_FAIL:
      return {
        ...state,
        message: action.payload,
        isGetOrderLoading: false,
        isFail: true,
      };
    case RESET_ORDERS_HISTORY:
      return {
        ...state,
        ordersHistory: [],
        totalOrder: 0,
      };
    default:
      return state;
  }
};

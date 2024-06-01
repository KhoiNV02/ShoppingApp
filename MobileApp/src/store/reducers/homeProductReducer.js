import {
  GET_HOMEPRODUCT,
  GET_BESTSELLERS_SUCCESS,
  GET_MOSTEXPENSIVE_SUCCESS,
  GET_MOSTVIEWED_SUCCESS,
  GET_RECENTLYADDED_SUCCESS,
  GET_ALL_BESTSELLERS_SUCCESS,
  GET_ALL_MOSTEXPENSIVE_SUCCESS,
  GET_ALL_MOSTVIEWED_SUCCESS,
  GET_ALL_RECENTLYADDED_SUCCESS,
} from '../actions/types';
const initData = {
  bestsellers: [],
  mostviewed: [],
  recentlyadded: [],
  mostexpensive: [],
  allbestsellers: [],
  allmostviewed: [],
  allrecentlyadded: [],
  allmostexpensive: [],
  totalProduct: 0,

};
export default homeProductReducer = (state = initData, action) => {
  switch (action.type) {
    case GET_HOMEPRODUCT:
      return {
        ...state,
      };
    case GET_BESTSELLERS_SUCCESS:
      return {
        ...state,
        bestsellers: action.payload,
      };
    case GET_MOSTVIEWED_SUCCESS:
      return {
        ...state,
        mostviewed: action.payload,
      };
    case GET_RECENTLYADDED_SUCCESS:
      return {
        ...state,
        recentlyadded: action.payload,
      };
    case GET_MOSTEXPENSIVE_SUCCESS:
      return {
        ...state,
        mostexpensive: action.payload,
      };
      case GET_ALL_BESTSELLERS_SUCCESS:
        return {
          ...state,
          totalProduct: action.payload.totalProduct,
          allbestsellers: [...state.allbestsellers,...action.payload.data],
        };
      case GET_ALL_MOSTVIEWED_SUCCESS:
        return {
          ...state,
          totalProduct: action.payload.totalProduct,
          allmostviewed:[...state.allmostviewed,...action.payload.data],
        };
      case GET_ALL_RECENTLYADDED_SUCCESS:
        return {
          ...state,
          totalProduct: action.payload.totalProduct,
          allrecentlyadded: [...state.allrecentlyadded,...action.payload.data],
        };
      case GET_ALL_MOSTEXPENSIVE_SUCCESS:
        return {
          ...state,
          totalProduct: action.payload.totalProduct,
          allmostexpensive: [...state.allmostexpensive,...action.payload.data],
        };
    default:
      return state;
  }
};

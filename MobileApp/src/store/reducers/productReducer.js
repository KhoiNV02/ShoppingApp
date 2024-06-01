import {
  UPDATEPRODUCT,
  UPDATESUCCESS,
  UPDATEFAIL,
  RESETUPDATE,
  GET_PRODUCT_BY_USER_ID,
  GET_PRODUCT_BY_USER_ID_SUCCESS,
  GET_PRODUCT_BY_USER_ID_FAIL,
  DELELE_PRODUCT,
  DELETE_SUCCESS,
  DELETE_FAIL,
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_FAIL,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  ADD_NEW_FEEDBACK,
  GET_FEEDBACKS_BY_PRODUCT_ID,
  GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS,
  GET_FEEDBACKS_BY_PRODUCT_ID_FAIL,
  RESET_FEEDBACKS,
  SET_RATING_STATUS,
  CHANGE_RATING_STATUS,
  ADD_NEW_FEEDBACK_SUCCESS,
  ADD_NEW_FEEDBACK_FAIL,
  GET_SEARCH_SUGGEST,
  GET_SEARCH_SUGGEST_SUCCESS,
  GET_SEARCH_SUGGEST_FAIL,
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_FAIL,
  RESET_SEARCH_RESULT,
  RESET_SEARCH_SUGGEST_HISTORY,
  RESET_RATING_DONE,
} from '../actions/types';
const initData = {
  message: '',
  isLoading: true,
  isFail: false,
  isAddingLoading: false,
  isDeleteLoading: false,
  isSuccess: false,
  products: [],
  productDetail: '',
  Feedbacks: [],
  totalFeedback: 0,
  isRating: false,
  ratingDone: false,
  isGetSearchSuggestLoading: false,
  isGetSearchSuggestFail: false,
  isGetSearchResultLoading: false,
  isGetSearchResultFail: false,
  searchSuggests: [],
  searchResults: [],
  totalResult: 0,
};
export default productReducer = (state = initData, action) => {
  switch (action.type) {
    case UPDATEPRODUCT:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case UPDATESUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: false,
      };
    case UPDATEFAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    case DELELE_PRODUCT:
      return {
        ...state,
        isDeleteLoading: true,
        isSuccess: false,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isDeleteLoading: false,
        isFail: false,
        isSuccess: true,
      };
    case DELETE_FAIL:
      return {
        ...state,
        message: action.payload,
        isDeleteLoading: false,
        isFail: true,
        isSuccess: false,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        isAddingLoading: true,
        isSuccess: false,
      };
    case ADD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isAddingLoading: false,
        isFail: false,
        isSuccess: true,
      };
    case ADD_NEW_PRODUCT_FAIL:
      return {
        ...state,
        message: action.payload,
        isAddingLoading: false,
        isFail: true,
        isSuccess: false,
      };

    case GET_PRODUCT_BY_USER_ID:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_BY_USER_ID_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isFail: false,
      };
    case GET_PRODUCT_BY_USER_ID_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false,
        isFail: false,
      };
    case GET_PRODUCT_BY_ID_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isFail: true,
      };
    case ADD_NEW_FEEDBACK:
      return {
        ...state,
        ratingDone: false,
        isRating: true,
      };
    case ADD_NEW_FEEDBACK_SUCCESS:
      return {
        ...state,
        isRating: false,
        ratingDone: true,
      };
    case ADD_NEW_FEEDBACK_FAIL:
      return {
        ...state,
        isRating: false,
        ratingDone: true,
      };
    case GET_FEEDBACKS_BY_PRODUCT_ID:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        totalFeedback: action.payload.totalFeedbacks,
        Feedbacks: [...state.Feedbacks, ...action.payload.data.feedbacks],
        isLoading: false,
      };
    case GET_FEEDBACKS_BY_PRODUCT_ID_FAIL:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      };
    case RESET_FEEDBACKS:
      return {
        ...state,
        totalFeedback: 0,
        Feedbacks: [],
      };
    case SET_RATING_STATUS:
      return {
        ...state,
        ratingStatus: action.payload,
      };

      case RESET_RATING_DONE:
        return {
          ...state,
          ratingDone: false,
        };
  
    case GET_SEARCH_SUGGEST:
      return {
        ...state,
        isGetSearchSuggestLoading: true,
      };
    case GET_SEARCH_SUGGEST_SUCCESS:
      return {
        ...state,
        searchSuggests: action.payload,
        isGetSearchSuggestLoading: false,
        isGetSearchSuggestFail: false,
      };
    case GET_SEARCH_SUGGEST_FAIL:
      return {
        ...state,
        searchSuggests: [],
        isGetSearchSuggestLoading: false,
        isGetSearchSuggestFail: true,
      };
    case GET_SEARCH_RESULT:
      return {
        ...state,
        isGetSearchResultLoading: true,
      };
    case GET_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload.products],
        totalResult: action.payload.total,
        isGetSearchResultLoading: false,
        isGetSearchResultFail: false,
      };
    case GET_SEARCH_RESULT_FAIL:
      return {
        ...state,
        searchResults: [],
        isGetSearchResultLoading: false,
        isGetSearchResultFail: true,
        totalResult: 0,
      };
    case RESET_SEARCH_RESULT:
      return {
        ...state,
        searchResults: [],
        totalResult: 0,
      };
    default:
      return state;
  }
};

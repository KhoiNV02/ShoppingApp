import productReducer from '../productReducer';
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
  ADD_NEW_FEEDBACK_SUCCESS,
  ADD_NEW_FEEDBACK_FAIL,
  GET_FEEDBACKS_BY_PRODUCT_ID,
  GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS,
  GET_FEEDBACKS_BY_PRODUCT_ID_FAIL,
  RESET_FEEDBACKS,
  SET_RATING_STATUS,
  GET_SEARCH_SUGGEST,
  GET_SEARCH_SUGGEST_SUCCESS,
  GET_SEARCH_SUGGEST_FAIL,
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_FAIL,
  RESET_SEARCH_RESULT,
  RESET_SEARCH_SUGGEST_HISTORY,
  RESET_RATING_DONE,
} from '../../actions/types';

describe('productReducer', () => {
  const initialState = {
    message: '',
    isLoading: false,
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

  it('should return the initial state', () => {
    expect(productReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATEPRODUCT', () => {
    const action = {type: UPDATEPRODUCT};
    const expectedState = {...initialState, isLoading: true, isSuccess: false};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATESUCCESS', () => {
    const action = {type: UPDATESUCCESS, payload: 'Update successful'};
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATEFAIL', () => {
    const action = {type: UPDATEFAIL, payload: 'Update failed'};
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELELE_PRODUCT', () => {
    const action = {type: DELELE_PRODUCT};
    const expectedState = {
      ...initialState,
      isDeleteLoading: true,
      isSuccess: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_SUCCESS', () => {
    const action = {type: DELETE_SUCCESS, payload: 'Delete successful'};
    const expectedState = {
      ...initialState,
      message: action.payload,
      isDeleteLoading: false,
      isFail: false,
      isSuccess: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_FAIL', () => {
    const action = {type: DELETE_FAIL, payload: 'Delete failed'};
    const expectedState = {
      ...initialState,
      message: action.payload,
      isDeleteLoading: false,
      isFail: true,
      isSuccess: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_PRODUCT', () => {
    const action = {type: ADD_NEW_PRODUCT};
    const expectedState = {
      ...initialState,
      isAddingLoading: true,
      isSuccess: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_PRODUCT_SUCCESS', () => {
    const action = {
      type: ADD_NEW_PRODUCT_SUCCESS,
      payload: 'Add product successful',
    };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isAddingLoading: false,
      isFail: false,
      isSuccess: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_PRODUCT_FAIL', () => {
    const action = {type: ADD_NEW_PRODUCT_FAIL, payload: 'Add product failed'};
    const expectedState = {
      ...initialState,
      message: action.payload,
      isAddingLoading: false,
      isFail: true,
      isSuccess: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_USER_ID', () => {
    const action = {type: GET_PRODUCT_BY_USER_ID};
    const expectedState = {...initialState, isLoading: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_USER_ID_SUCCESS', () => {
    const action = {
      type: GET_PRODUCT_BY_USER_ID_SUCCESS,
      payload: ['Product 1', 'Product 2'],
    };
    const expectedState = {
      ...initialState,
      products: action.payload,
      isLoading: false,
      isFail: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_USER_ID_FAIL', () => {
    const action = {
      type: GET_PRODUCT_BY_USER_ID_FAIL,
      payload: 'Get product by user ID failed',
    };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_ID', () => {
    const action = {type: GET_PRODUCT_BY_ID};
    const expectedState = {...initialState, isLoading: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_ID_SUCCESS', () => {
    const action = {
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: 'Product details',
    };
    const expectedState = {
      ...initialState,
      productDetail: action.payload,
      isLoading: false,
      isFail: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_PRODUCT_BY_ID_FAIL', () => {
    const action = {
      type: GET_PRODUCT_BY_ID_FAIL,
      payload: 'Get product by ID failed',
    };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
      isFail: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_FEEDBACK', () => {
    const action = {type: ADD_NEW_FEEDBACK};
    const expectedState = {...initialState, ratingDone: false, isRating: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_FEEDBACK_SUCCESS', () => {
    const action = {type: ADD_NEW_FEEDBACK_SUCCESS};
    const expectedState = {...initialState, isRating: false, ratingDone: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_NEW_FEEDBACK_FAIL', () => {
    const action = {type: ADD_NEW_FEEDBACK_FAIL};
    const expectedState = {...initialState, isRating: false, ratingDone: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_FEEDBACKS_BY_PRODUCT_ID', () => {
    const action = {type: GET_FEEDBACKS_BY_PRODUCT_ID};
    const expectedState = {...initialState, isLoading: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS', () => {
    const action = {
      type: GET_FEEDBACKS_BY_PRODUCT_ID_SUCCESS,
      payload: {
        totalFeedbacks: 2,
        data: {feedbacks: ['Feedback 1', 'Feedback 2']},
      },
    };
    const expectedState = {
      ...initialState,
      totalFeedback: action.payload.totalFeedbacks,
      Feedbacks: action.payload.data.feedbacks,
      isLoading: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_FEEDBACKS_BY_PRODUCT_ID_FAIL', () => {
    const action = {
      type: GET_FEEDBACKS_BY_PRODUCT_ID_FAIL,
      payload: 'Get feedbacks failed',
    };
    const expectedState = {
      ...initialState,
      message: action.payload,
      isLoading: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_FEEDBACKS', () => {
    const action = {type: RESET_FEEDBACKS};
    const expectedState = {...initialState, totalFeedback: 0, Feedbacks: []};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_RATING_DONE', () => {
    const action = {type: RESET_RATING_DONE};
    const expectedState = {...initialState, ratingDone:false};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });


  it('should handle SET_RATING_STATUS', () => {
    const action = {type: SET_RATING_STATUS, payload: 'rating status'};
    const expectedState = {...initialState, ratingStatus: action.payload};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_SUGGEST', () => {
    const action = {type: GET_SEARCH_SUGGEST};
    const expectedState = {...initialState, isGetSearchSuggestLoading: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_SUGGEST_SUCCESS', () => {
    const action = {
      type: GET_SEARCH_SUGGEST_SUCCESS,
      payload: ['Suggestion 1', 'Suggestion 2'],
    };
    const expectedState = {
      ...initialState,
      searchSuggests: action.payload,
      isGetSearchSuggestLoading: false,
      isGetSearchSuggestFail: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_SUGGEST_FAIL', () => {
    const action = {type: GET_SEARCH_SUGGEST_FAIL};
    const expectedState = {
      ...initialState,
      searchSuggests: [],
      isGetSearchSuggestLoading: false,
      isGetSearchSuggestFail: true,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_RESULT', () => {
    const action = {type: GET_SEARCH_RESULT};
    const expectedState = {...initialState, isGetSearchResultLoading: true};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_RESULT_SUCCESS', () => {
    const action = {
      type: GET_SEARCH_RESULT_SUCCESS,
      payload: {products: ['Product 1', 'Product 2'], total: 2},
    };
    const expectedState = {
      ...initialState,
      searchResults: action.payload.products,
      totalResult: action.payload.total,
      isGetSearchResultLoading: false,
      isGetSearchResultFail: false,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_SEARCH_RESULT_FAIL', () => {
    const action = {type: GET_SEARCH_RESULT_FAIL};
    const expectedState = {
      ...initialState,
      searchResults: [],
      isGetSearchResultLoading: false,
      isGetSearchResultFail: true,
      totalResult: 0,
    };
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SEARCH_RESULT', () => {
    const action = {type: RESET_SEARCH_RESULT};
    const expectedState = {...initialState, searchResults: [], totalResult: 0};
    expect(productReducer(initialState, action)).toEqual(expectedState);
  });
});

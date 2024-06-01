import userReducer from '../userReducer';
import {
  ADD_SEARCH_CONTENT,
  ADD_SEARCH_CONTENT_SUCCESS,
  ADD_SEARCH_CONTENT_FAIL,
  RESET_SEARCH_SUGGEST_HISTORY,
} from '../../actions/types';

describe('userReducer', () => {
  const initialState = {
    isFail: false,
    isAddingLoading: false,
    searchValueHistory: [],
  };

  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_SEARCH_CONTENT', () => {
    const action = {type: ADD_SEARCH_CONTENT};
    const expectedState = {
      ...initialState,
      isAddingLoading: true,
      isSuccess: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_SEARCH_CONTENT_SUCCESS with new content', () => {
    const action = {
      type: ADD_SEARCH_CONTENT_SUCCESS,
      payload: {content: 'new search'},
    };
    const expectedState = {
      ...initialState,
      searchValueHistory: [action.payload, ...initialState.searchValueHistory],
      isAddingLoading: false,
      isFail: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_SEARCH_CONTENT_SUCCESS with existing content', () => {
    const initialStateWithContent = {
      ...initialState,
      searchValueHistory: [{content: 'existing search'}],
    };
    const action = {
      type: ADD_SEARCH_CONTENT_SUCCESS,
      payload: {content: 'existing search'},
    };
    const expectedState = {
      ...initialStateWithContent,
      isAddingLoading: false,
      isFail: false,
    };
    expect(userReducer(initialStateWithContent, action)).toEqual(expectedState);
  });

  it('should handle ADD_SEARCH_CONTENT_FAIL', () => {
    const action = {type: ADD_SEARCH_CONTENT_FAIL};
    const expectedState = {
      ...initialState,
      isAddingLoading: false,
      isFail: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_SEARCH_SUGGEST_HISTORY', () => {
    const initialStateWithHistory = {
      ...initialState,
      searchValueHistory: [{content: 'some search'}],
    };
    const action = {type: RESET_SEARCH_SUGGEST_HISTORY};
    const expectedState = {...initialStateWithHistory, searchValueHistory: []};
    expect(userReducer(initialStateWithHistory, action)).toEqual(expectedState);
  });
});

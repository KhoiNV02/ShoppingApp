import {
  ADD_SEARCH_CONTENT,
  ADD_SEARCH_CONTENT_SUCCESS,
  ADD_SEARCH_CONTENT_FAIL,
  RESET_SEARCH_SUGGEST_HISTORY,
} from '../actions/types';
const initData = {
  isFail: false,
  isAddingLoading: false,
  searchValueHistory: [],
};
export default userReducer = (state = initData, action) => {
  switch (action.type) {
    case ADD_SEARCH_CONTENT:
      return {
        ...state,
        isAddingLoading: true,
        isSuccess: false,
      };
    case ADD_SEARCH_CONTENT_SUCCESS:
      return {
        ...state,
        searchValueHistory: state.searchValueHistory.some(
          item => item.content === action.payload.content,
        )
          ? state.searchValueHistory
          : [action.payload, ...state.searchValueHistory],
        isAddingLoading: false,
        isFail: false,
      };
    case ADD_SEARCH_CONTENT_FAIL:
      return {
        ...state,
        isAddingLoading: false,
        isFail: true,
      };
    case RESET_SEARCH_SUGGEST_HISTORY:
      return {
        ...state,
        searchValueHistory: [],
      };
    default:
      return state;
  }
};

import {
CHANGE_LANGUAGES

} from '../actions/types';
const initData = {
  language:'en'
};
export default languageReducer = (state = initData, action) => {
  switch (action.type) {
      case CHANGE_LANGUAGES:
        return {
        language:action.payload
        };
    default:
      return state;
  }
};

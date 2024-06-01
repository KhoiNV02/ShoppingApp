import {
  LOGIN,
  LOGINFAIL,
  LOGINSUCCESS,
  LOGOUT,
  RELOGIN,
  SIGNUP,
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isLoggingLoading:false,
  user: null,
  _id: null,
};

export default authReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggingLoading:true,
      };
    case LOGINSUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingLoading:false,
        user: action.payload.username,
        _id: action.payload._id,
      };
    case LOGINFAIL:
      return {
        ...state,
        isLoggingLoading:false,
        isLoggedIn: false,
        user: null,
        _id: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        _id: null,
      };
    case RELOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.username,
        _id: action.payload._id,
      };
    case SIGNUP:
      return {
        ...state,
        isLoggingLoading:true,
      };
    default:
      return state;
  }
};

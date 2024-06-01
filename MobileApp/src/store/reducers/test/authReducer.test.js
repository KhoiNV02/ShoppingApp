import authReducer from '../authReducer';
import {
  LOGIN,
  LOGINFAIL,
  LOGINSUCCESS,
  LOGOUT,
  RELOGIN,
  SIGNUP,
} from '../../actions/types';

describe('authReducer', () => {
  const initialState = {
    isLoggedIn: false,
    isLoggingLoading: false,
    user: null,
    _id: null,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGIN', () => {
    const action = { type: LOGIN };
    const expectedState = { ...initialState, isLoggingLoading: true };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGINSUCCESS', () => {
    const action = { type: LOGINSUCCESS, payload: { username: 'testUser', _id: '123' } };
    const expectedState = {
      ...initialState,
      isLoggedIn: true,
      isLoggingLoading: false,
      user: action.payload.username,
      _id: action.payload._id,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGINFAIL', () => {
    const action = { type: LOGINFAIL };
    const expectedState = {
      ...initialState,
      isLoggingLoading: false,
      isLoggedIn: false,
      user: null,
      _id: null,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT', () => {
    const initialStateWithUser = {
      isLoggedIn: true,
      isLoggingLoading: false,
      user: 'testUser',
      _id: '123',
    };
    const action = { type: LOGOUT };
    const expectedState = {
      ...initialStateWithUser,
      isLoggedIn: false,
      user: null,
      _id: null,
    };
    expect(authReducer(initialStateWithUser, action)).toEqual(expectedState);
  });

  it('should handle RELOGIN', () => {
    const action = { type: RELOGIN, payload: { username: 'testUser', _id: '123' } };
    const expectedState = {
      ...initialState,
      isLoggedIn: true,
      user: action.payload.username,
      _id: action.payload._id,
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SIGNUP', () => {
    const action = { type: SIGNUP };
    const expectedState = { ...initialState, isLoggingLoading: true };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});

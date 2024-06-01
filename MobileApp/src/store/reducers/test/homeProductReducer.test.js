import homeProductReducer from '../homeProductReducer';
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
} from '../../actions/types';

describe('homeProductReducer', () => {
  const initialState = {
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

  it('should return the initial state', () => {
    expect(homeProductReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_HOMEPRODUCT', () => {
    const action = { type: GET_HOMEPRODUCT };
    const expectedState = { ...initialState };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_BESTSELLERS_SUCCESS', () => {
    const action = { type: GET_BESTSELLERS_SUCCESS, payload: ['product1', 'product2'] };
    const expectedState = { ...initialState, bestsellers: action.payload };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_MOSTVIEWED_SUCCESS', () => {
    const action = { type: GET_MOSTVIEWED_SUCCESS, payload: ['product3', 'product4'] };
    const expectedState = { ...initialState, mostviewed: action.payload };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_RECENTLYADDED_SUCCESS', () => {
    const action = { type: GET_RECENTLYADDED_SUCCESS, payload: ['product5', 'product6'] };
    const expectedState = { ...initialState, recentlyadded: action.payload };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_MOSTEXPENSIVE_SUCCESS', () => {
    const action = { type: GET_MOSTEXPENSIVE_SUCCESS, payload: ['product7', 'product8'] };
    const expectedState = { ...initialState, mostexpensive: action.payload };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_BESTSELLERS_SUCCESS', () => {
    const action = { type: GET_ALL_BESTSELLERS_SUCCESS, payload: { totalProduct: 10, data: ['product9', 'product10'] } };
    const expectedState = {
      ...initialState,
      totalProduct: action.payload.totalProduct,
      allbestsellers: [...initialState.allbestsellers, ...action.payload.data],
    };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_MOSTVIEWED_SUCCESS', () => {
    const action = { type: GET_ALL_MOSTVIEWED_SUCCESS, payload: { totalProduct: 20, data: ['product11', 'product12'] } };
    const expectedState = {
      ...initialState,
      totalProduct: action.payload.totalProduct,
      allmostviewed: [...initialState.allmostviewed, ...action.payload.data],
    };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_RECENTLYADDED_SUCCESS', () => {
    const action = { type: GET_ALL_RECENTLYADDED_SUCCESS, payload: { totalProduct: 30, data: ['product13', 'product14'] } };
    const expectedState = {
      ...initialState,
      totalProduct: action.payload.totalProduct,
      allrecentlyadded: [...initialState.allrecentlyadded, ...action.payload.data],
    };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALL_MOSTEXPENSIVE_SUCCESS', () => {
    const action = { type: GET_ALL_MOSTEXPENSIVE_SUCCESS, payload: { totalProduct: 40, data: ['product15', 'product16'] } };
    const expectedState = {
      ...initialState,
      totalProduct: action.payload.totalProduct,
      allmostexpensive: [...initialState.allmostexpensive, ...action.payload.data],
    };
    expect(homeProductReducer(initialState, action)).toEqual(expectedState);
  });
});

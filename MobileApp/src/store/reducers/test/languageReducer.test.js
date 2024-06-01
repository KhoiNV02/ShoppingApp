import languageReducer from '../languageReducer';
import {CHANGE_LANGUAGES} from '../../actions/types';
describe('languageReducer', () => {
  it('should return the initial state', () => {
    const initialState = {language: 'en'};
    expect(languageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_LANGUAGES', () => {
    const action = {
      type: CHANGE_LANGUAGES,
      payload: 'fr',
    };
    const expectedState = {
      language: 'fr',
    };
    expect(languageReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_LANGUAGES with a different payload', () => {
    const action = {
      type: CHANGE_LANGUAGES,
      payload: 'es',
    };
    const expectedState = {
      language: 'es',
    };
    expect(languageReducer(undefined, action)).toEqual(expectedState);
  });

  it('should return the current state if action type is unknown', () => {
    const initialState = {language: 'en'};
    const action = {
      type: 'UNKNOWN_ACTION',
    };
    expect(languageReducer(initialState, action)).toEqual(initialState);
  });
});

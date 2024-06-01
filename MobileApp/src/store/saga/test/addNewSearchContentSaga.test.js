import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import addNewSearchContentSaga from '../addNewSearchContentSaga.js';
import {
  ADD_SEARCH_CONTENT,
  ADD_SEARCH_CONTENT_SUCCESS,
  ADD_SEARCH_CONTENT_FAIL,
} from '../../actions/types.js';
import {makeRequest} from '../../../common/utils/httpRequestAPI.js';

describe('add new search content saga test', () => {
  const config = {
    url: `searchContents`,
    method: 'POST',
    data: {
      content:'Giay',
    },
  };
  it('should call add new search content saga success', () => {
    const res={content:'Giay'};
    testSaga(addNewSearchContentSaga, {
      type: ADD_SEARCH_CONTENT,
      payload: {config},
    })
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: ADD_SEARCH_CONTENT_SUCCESS, payload: res.content})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add new search content saga fail', () => {

    res = {message: 'Thêm mới thất bại'};
    testSaga(addNewSearchContentSaga, {type: ADD_SEARCH_CONTENT, payload: {config}})
      .next()
      .call(makeRequest, config)
      .throw(new Error())
      .put({type: ADD_SEARCH_CONTENT_FAIL, payload:'Thêm mới thất bại'})
      .next()
      .isDone();
  });
});

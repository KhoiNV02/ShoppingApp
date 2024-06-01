import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import deleteProductSaga from '../deleteProductSaga.js';
import {
  DELELE_PRODUCT,
  DELETE_SUCCESS,
  DELETE_FAIL,
} from '../../actions/types.js';
import {makeRequest} from '../../../common/utils/httpRequestAPI.js';

describe('delete product saga test', () => {
  const config = {
    url: `products/4b8z9x78asg899a8`,
    method: 'DELETE',
  };
  it('should call delete product saga success', () => {
    res = {message: 'Xóa thành công'};
    testSaga(deleteProductSaga, {type: DELELE_PRODUCT, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(res)
      .put({type: DELETE_SUCCESS, payload: res.message})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call delete product saga fail', () => {
    res = {message: 'Xóa thất bại'};
    testSaga(deleteProductSaga, {type: DELELE_PRODUCT, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next(res)
      .throw(new Error())
      .put({type: DELETE_FAIL, payload: 'Xóa thất bại'})
      .next()
      .isDone();
  });
});

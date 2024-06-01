import '../../../../__mock__/react-native-toast-message.js';

import {testSaga} from 'redux-saga-test-plan';
import addFeedbackSaga from '../addFeedbackSaga';
import {
  ADD_NEW_FEEDBACK,
  ADD_NEW_FEEDBACK_FAIL,
  ADD_NEW_FEEDBACK_SUCCESS,
  RESET_RATING_DONE,
} from '../../actions/types';
import {makeRequest} from '../../../common/utils/httpRequestAPI';

describe('add feedback saga test', () => {
  it('should call add feedback saga success', () => {
    const config = {
      url: `feedbacks`,
      method: 'POST',
      data: {
        orderId: '31ds1g15d631',
        data: [
          {
            rating: 4,
            description: 'san pham rat tot',
          },
        ],
      },
    };

    testSaga(addFeedbackSaga, {type: ADD_NEW_FEEDBACK, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next()
      .put({type: ADD_NEW_FEEDBACK_SUCCESS})
      .next()
      .put({type: RESET_RATING_DONE})
      .next()
      .next()
      .next()
      .isDone();
  });

  it('should call add feedback saga fail', () => {
    const config = {
      url: `feedbacks`,
      method: 'POST',
      data: {
        orderId: '31ds1g15d631',
        data: [
          {
            rating: 4,
            description: 'san pham rat tot',
          },
        ],
      },
    };

    testSaga(addFeedbackSaga, {type: ADD_NEW_FEEDBACK, payload: {config}})
      .next()
      .call(makeRequest, config)
      .next()
      .throw(new Error())
      .put({type: ADD_NEW_FEEDBACK_FAIL})
      .next()
      .put({type: RESET_RATING_DONE})
      .next()
      .isDone();
  });
});

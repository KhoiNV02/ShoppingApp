import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  GET_HOMEPRODUCT,
  GET_ALL_SUCCESS,
  GET_BESTSELLERS_SUCCESS,
  GET_MOSTEXPENSIVE_SUCCESS,
  GET_MOSTVIEWED_SUCCESS,
  GET_RECENTLYADDED_SUCCESS,
  GET_ALL_BESTSELLERS_SUCCESS,
  GET_ALL_MOSTVIEWED_SUCCESS,
  GET_ALL_RECENTLYADDED_SUCCESS,
  GET_ALL_MOSTEXPENSIVE_SUCCESS,
} from '../actions/types';
export function* getHomeProductSaga(action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    switch (action.category) {
      case GET_BESTSELLERS_SUCCESS: {
        yield put({type: GET_BESTSELLERS_SUCCESS, payload: res.data});
        break;
      }
      case GET_MOSTVIEWED_SUCCESS: {
        yield put({type: GET_MOSTVIEWED_SUCCESS, payload: res.data});
        break;
      }
      case GET_RECENTLYADDED_SUCCESS: {
        yield put({type: GET_RECENTLYADDED_SUCCESS, payload: res.data});
        break;
      }
      case GET_MOSTEXPENSIVE_SUCCESS: {
        yield put({type: GET_MOSTEXPENSIVE_SUCCESS, payload: res.data});
        break;
      }
      case GET_ALL_BESTSELLERS_SUCCESS: {
        yield put({type: GET_ALL_BESTSELLERS_SUCCESS, payload: res});
        break;
      }

      case GET_ALL_MOSTVIEWED_SUCCESS: {
        yield put({type: GET_ALL_MOSTVIEWED_SUCCESS, payload: res});
        break;
      }
      case GET_ALL_RECENTLYADDED_SUCCESS: {
        yield put({type: GET_ALL_RECENTLYADDED_SUCCESS, payload: res});
        break;
      }
      case GET_ALL_MOSTEXPENSIVE_SUCCESS: {
        yield put({type: GET_ALL_MOSTEXPENSIVE_SUCCESS, payload: res});
        break;
      }
      default:
        break;
    }
  } catch (error) {}
}

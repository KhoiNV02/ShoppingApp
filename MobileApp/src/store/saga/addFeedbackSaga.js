import {call, put} from 'redux-saga/effects';
import {makeRequest} from '../../common/utils/httpRequestAPI';
import {
  ADD_NEW_FEEDBACK,
  ADD_NEW_FEEDBACK_FAIL,
  ADD_NEW_FEEDBACK_SUCCESS,
  RESET_RATING_DONE,
} from '../actions/types';
import ToastMessage from '../../components/Toast/Toast';
import i18n from '../../common/utils/multiLanguages/multilanguages';
export default function* (action) {
  try {
    const res = yield call(makeRequest, action.payload.config);
    yield put({type: ADD_NEW_FEEDBACK_SUCCESS});
    ToastMessage({message: i18n.t('Add feedback success')});
    yield put({type: RESET_RATING_DONE});
  } catch (error) {
    yield put({type: ADD_NEW_FEEDBACK_FAIL});
    ToastMessage({message: i18n.t('Add feedback fail')});
    yield put({type: RESET_RATING_DONE});

  }
}

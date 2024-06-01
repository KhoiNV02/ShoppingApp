import AsyncStorage from '@react-native-async-storage/async-storage';
import {relogin, changeLanguage} from './actions/actions';
export const init = async dispatch => {
  const user = await AsyncStorage.getItem('user');
  const _id = await AsyncStorage.getItem('_id');
  // const lang= await AsyncStorage.getItem('Lang');
  // dispatch(changeLanguage(lang?lang:'vi'));
  if (user) {
    const res = {_id: _id, username: user};
    try {
      dispatch(relogin(res));
    } catch (error) {
      console.log('loi laaaaaaaa', error);
    }
  } else {
    console.log('chua dang nhap');
  }
};

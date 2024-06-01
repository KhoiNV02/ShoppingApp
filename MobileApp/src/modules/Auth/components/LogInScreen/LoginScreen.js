import {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import ToastMessage from '../../../../components/Toast/Toast';
import {loginConfig} from '../../../../services/api/loginServices';
import {login} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import LoginScreenUI from './LoginScreenUI';
import {Keyboard} from 'react-native';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.language);
  const isLoggingLoading = useSelector(state => state.login.isLoggingLoading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = async () => {
    Keyboard.dismiss();
    setTimeout(() => {
      if (username && password) {
        const config = loginConfig(username, password);
        dispatch(login(config));
      } else {
        ToastMessage({message: i18n.t('Complete Form'), type: 'error'});
      }
    }, 500);
  };

  const onPressSignup = async () => {
    navigation.navigate('signup');
  };

  return (
    <LoginScreenUI
      isLoggingLoading={isLoggingLoading}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      HandleLogin={HandleLogin}
      onPressSignup={onPressSignup}
    />
  );
}

import {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import ToastMessage from '../../../../components/Toast/Toast';
import {signupConfig} from '../../../../services/api/signupServices';
import {signup} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import SignupScreenUI from './SignupScreenUI';
export default function SignupScreen({navigation}) {
  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.language);
  const isLoggingLoading = useSelector(state => state.login.isLoggingLoading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cofirmPassword, setConfirmPassword] = useState('');

  function hasUpperCase(str) {
    return str !== str.toLowerCase();
  }

  var hasNumber = /\d/;
  const HandleSignup = async => {
    if (username && password && cofirmPassword) {
      if (password == cofirmPassword && password.length >= 8) {
        const config = signupConfig(username, password);
        dispatch(signup(config));
      } else {
        ToastMessage({message: i18n.t('Check Password'), type: 'error'});
      }
    } else {
      ToastMessage({message: i18n.t('Complete Form'), type: 'error'});
    }
  };

  function CheckPassword() {
    return (
      password.length >= 8 && hasUpperCase(password) && hasNumber.test(password)
    );
  }

  function onPressLogin() {
    navigation.navigate('login');
  }
  return (
    <SignupScreenUI
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      cofirmPassword={cofirmPassword}
      setConfirmPassword={setConfirmPassword}
      CheckPassword={CheckPassword}
      HandleSignup={HandleSignup}
      onPressLogin={onPressLogin}
      isLoggingLoading={isLoggingLoading}
    />
  );
}

import {View} from 'react-native';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import TextInputCustom from '../../../../components/TextInput/TextInput';
import PasswordTextInputCustom from '../../../../components/PasswordTextInput/PasswordTextInput';
import Title from '../../../../components/Title/Title';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import LoginScreenStyle from './LoginScreenStyle';
export default function LoginScreenUI({
  isLoggingLoading,
  username,
  setUsername,
  password,
  setPassword,
  HandleLogin,
  onPressSignup,
}) {
  i18n.locale = useSelector(state => state.language.language);
  return (
    <>
      <View style={LoginScreenStyle.inner}>
        <View style={LoginScreenStyle.viewTitle}>
          <Title>{i18n.t('Login')}</Title>
        </View>
        <TextInputCustom
          value={username}
          onChangeText={setUsername}
          title={i18n.t('Username')}
          placeholder={i18n.t('Your username')}
        />
        <PasswordTextInputCustom
          title={i18n.t('Password')}
          placeholder={i18n.t('Your password')}
          value={password}
          onChangeText={setPassword}
        />
        <CustomButton
          onPress={() => {
            HandleLogin();
          }}>
          {i18n.t('LOGIN')}
        </CustomButton>
        <CustomButton
          lightButton={true}
          onPress={() => {
            onPressSignup();
          }}>
          {i18n.t('SIGNUP')}
        </CustomButton>
      </View>
      {isLoggingLoading && <Loading />}
    </>
  );
}

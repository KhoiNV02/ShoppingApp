import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

import TextInputCustom from '../../../../components/TextInput/TextInput';
import PasswordTextInputCustom from '../../../../components/PasswordTextInput/PasswordTextInput';
import Title from '../../../../components/Title/Title';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import SignupScreenStyle from './SignupScreenStyle';
export default function SignupScreenUI({
  username,
  setUsername,
  password,
  setPassword,
  cofirmPassword,
  setConfirmPassword,
  CheckPassword,
  HandleSignup,
  onPressLogin,
  isLoggingLoading
}) {
  i18n.locale = useSelector(state => state.language.language);
    
  return (
    <>
      <View style={SignupScreenStyle.inner}>
        <View style={SignupScreenStyle.viewTitle}>
          <Title>{i18n.t('Signup')}</Title>
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
        <View style={SignupScreenStyle.viewTooltips}>
          {password.length < 1 ? (
            <></>
          ) : CheckPassword() ? (
            <Text style={SignupScreenStyle.textTooltipsPass}>
              ✔ {i18n.t('Strong password')}
            </Text>
          ) : (
            <Text style={SignupScreenStyle.textTooltipsRefer}>
              ✖ {i18n.t('Weak password')} .
            </Text>
          )}
        </View>
        <PasswordTextInputCustom
          title={i18n.t('Confirm Password')}
          placeholder={i18n.t('Confirm Your password')}
          value={cofirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={SignupScreenStyle.viewTooltips}>
          {cofirmPassword.length < 1 ? (
            <></>
          ) : password != cofirmPassword ? (
            <Text style={SignupScreenStyle.textTooltipsRefer}>
              ✖ {i18n.t('Check Match Fail')}
            </Text>
          ) : (
            <Text style={SignupScreenStyle.textTooltipsPass}>
              ✔{i18n.t('Check Match Success')}
            </Text>
          )}
        </View>
        <CustomButton
          onPress={() => {
            HandleSignup();
          }}>
          {i18n.t('SIGNUP')}
        </CustomButton>
        <CustomButton
          lightButton={true}
          onPress={() => {
            onPressLogin();
          }}>
          {i18n.t('LOGIN')}
        </CustomButton>
      </View>
      {isLoggingLoading && <Loading />}
    </>
  );
}

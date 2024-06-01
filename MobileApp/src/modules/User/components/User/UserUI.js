import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import ChangeLanguagePopUp from '../../../../components/ChangeLanguagePopUp/ChangeLaguagePopUp';
import UserStyle from './UserStyle';
export default function UserUI({
  user,
  onPressPurchaseHistory,
  setActive,
  active,
  HandleLogout,
}) {
  i18n.locale = useSelector(state => state.language.language);

  return (
    <SafeAreaView style={UserStyle.viewContainer}>
      <View style={UserStyle.viewProfile}>
        <View style={UserStyle.viewInfo}>
          <View style={UserStyle.viewAvatar}>
            <Image
              style={UserStyle.viewIconImage}
              source={require('../../../../assets/Icon/user.png')}></Image>
          </View>
          <Text style={UserStyle.textName}>{user}</Text>
        </View>
      </View>
      <View style={UserStyle.viewOption}>
        <View>
          <TouchableOpacity onPress={onPressPurchaseHistory}>
            <View style={UserStyle.viewBtn}>
              <View style={UserStyle.viewLablebtn}>
                <Image
                  style={UserStyle.viewIconBtn}
                  source={require('../../../../assets/Icon/history.png')}></Image>
                <View>
                  <Text style={UserStyle.viewTitleBtn}>
                    {i18n.t('Purchase History')}
                  </Text>
                </View>
              </View>

              <Image
                style={UserStyle.viewIconAngle}
                source={require('../../../../assets/Icon/angleright.png')}></Image>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActive(true);
            }}>
            <View style={UserStyle.viewBtn}>
              <View style={UserStyle.viewLablebtn}>
                <Image
                  style={UserStyle.viewIconBtn}
                  source={require('../../../../assets/Icon/globe.png')}></Image>
                <View>
                  <Text style={UserStyle.viewTitleBtn}>
                    {i18n.t('Language')}
                  </Text>
                  <Text>{i18n.t(i18n.locale)}</Text>
                </View>
              </View>

              <Image
                style={UserStyle.viewIconAngle}
                source={require('../../../../assets/Icon/angleright.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={HandleLogout}>
          <View style={UserStyle.viewBtn}>
            <View style={UserStyle.viewLablebtn}>
              <Image
                style={UserStyle.viewIconBtn}
                source={require('../../../../assets/Icon/signout.png')}></Image>
              <Text style={UserStyle.viewTitleBtn}>{i18n.t('Logout')}</Text>
            </View>

            <Image
              style={UserStyle.viewIconAngle}
              source={require('../../../../assets/Icon/angleright.png')}></Image>
          </View>
        </TouchableOpacity>
      </View>
      {active && <ChangeLanguagePopUp setActive={setActive} />}
    </SafeAreaView>
  );
}

import {View, Text} from 'react-native';
import {Pressable} from 'react-native';

import i18n from '../../common/utils/multiLanguages/multilanguages';

import CustomButton from '../CustomButton/CustomButton';
import LanguageItem from './components/LanguageItem';
import ChangeLaguagePopUpStyles from './ChangeLaguagePopUpStyles';

function ChangeLanguagePopUpUI({
  closePopUp,
  Languages,
  selectedLanguageId,
  setSelectedLanguageId,
  handleChangeLanguage,
}) {
  return (
    <View style={ChangeLaguagePopUpStyles.outer}>
      <Pressable
        onPress={closePopUp}
        style={ChangeLaguagePopUpStyles.pressArea}
      />
      <View style={ChangeLaguagePopUpStyles.inner}>
        <Text style={ChangeLaguagePopUpStyles.title}>
          {i18n.t('Select Language')}
        </Text>
        <View style={ChangeLaguagePopUpStyles.line} />

        {Languages.map(item => {
          return (
            <LanguageItem
              key={item.id}
              id={item.id}
              language={item.text}
              check={item.id === selectedLanguageId}
              setSelectedLanguageId={setSelectedLanguageId}
            />
          );
        })}

        <View style={ChangeLaguagePopUpStyles.buttonActions}>
          <View style={ChangeLaguagePopUpStyles.btn}>
            <CustomButton lightButton={true} onPress={closePopUp}>
              {i18n.t('Cancel')}
            </CustomButton>
          </View>

          <View style={ChangeLaguagePopUpStyles.btn}>
            <CustomButton onPress={handleChangeLanguage}>
              {i18n.t('Apply')}
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ChangeLanguagePopUpUI;

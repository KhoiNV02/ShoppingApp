import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import i18n from '../../../common/utils/multiLanguages/multilanguages';
import LanguageItemStyles from './LanguageItemStyles';
function LanguageItem({id, language, check, setSelectedLanguageId}) {
  i18n.locale = useSelector(state => state.language.language);

  const handleChangeChoiceStatus = () => {
    setSelectedLanguageId(id);
  };

  return (
    <TouchableWithoutFeedback onPress={handleChangeChoiceStatus}>
      <View style={LanguageItemStyles.languageBox}>
        <Text style={LanguageItemStyles.language}>{language}</Text>
        <View style={LanguageItemStyles.radioButton}>
          {check === true ? (
            <View style={LanguageItemStyles.selectedRadio} />
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default LanguageItem;

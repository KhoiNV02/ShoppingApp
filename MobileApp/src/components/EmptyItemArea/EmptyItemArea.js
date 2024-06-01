import {Text, View, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';

import i18n from '../../common/utils/multiLanguages/multilanguages';
import EmptyItemAreaStyles from './EmptyItemAreaStyles';

const image = require('../../assets/Icon/shopping-cart-for-Empty-Screen.png');

function EmptyItemArea() {
  const navigation = useNavigation();
  i18n.locale = useSelector(state => state.language.language);
  const handleNavigate = () => {
    navigation.navigate('home');
  };
  return (
    <View style={EmptyItemAreaStyles.container}>
      <View style={EmptyItemAreaStyles.mainContent}>
        <View style={EmptyItemAreaStyles.imgBox}>
          <View style={EmptyItemAreaStyles.decorateItems}>
            <View
              style={[
                EmptyItemAreaStyles.decorateItem,
                EmptyItemAreaStyles.decorateItem1,
                {transform: [{rotate: '-25deg'}]},
              ]}></View>
            <View
              style={[
                EmptyItemAreaStyles.decorateItem,
                EmptyItemAreaStyles.decorateItem2,
                {transform: [{rotate: '-25deg'}]},
              ]}></View>
            <View
              style={[
                EmptyItemAreaStyles.decorateItem,
                EmptyItemAreaStyles.decorateItem3,
                {transform: [{rotate: '-25deg'}]},
              ]}></View>
          </View>
          <Image
            style={[EmptyItemAreaStyles.img, {transform: [{rotate: '-13deg'}]}]}
            source={image}
          />
        </View>

        <View style={EmptyItemAreaStyles.contentBox}>
          <Text
            style={[
              EmptyItemAreaStyles.contentText,
              EmptyItemAreaStyles.contentTextAbove,
            ]}>
            {i18n.t('Empty Cart Content')}
          </Text>

          <Text style={EmptyItemAreaStyles.contentText}>
            {i18n.t('Empty Cart Content2')}
          </Text>
        </View>

        <View style={EmptyItemAreaStyles.actionBox}>
          <CustomButton onPress={handleNavigate}>
            {i18n.t('Let Buy Something')}
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

export default EmptyItemArea;

import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

import i18n from '../../common/utils/multiLanguages/multilanguages';
import ImageFormStyles from './ImageFormStyles';
function ImageFormUI({
  img,
  imageDescriptInput,
  handleTurnOnCamera,
  handleInputAndSaveDescript,
  handleDeleteImageForm,
}) {
  return (
    <View style={ImageFormStyles.container}>
      <View style={ImageFormStyles.imgBox}>
        <TouchableOpacity onPress={handleTurnOnCamera}>
          <Image
            style={ImageFormStyles.image}
            source={
              img && img !== ''
                ? {uri: img}
                : require('../../assets/img/NewPhoto.png')
            }
          />
        </TouchableOpacity>
      </View>

      <View style={ImageFormStyles.descriptionBox}>
        <Text style={ImageFormStyles.descriptTitle}>
          {i18n.t('Photo description')}
        </Text>

        <TextInput
          value={imageDescriptInput}
          placeholder={i18n.t('Fill image description')}
          style={ImageFormStyles.descriptInput}
          multiline={true}
          onChangeText={text => {
            handleInputAndSaveDescript(text);
          }}
        />
      </View>

      <View>
        <Text onPress={handleDeleteImageForm}>✖</Text>
      </View>
    </View>
  );
}

export default ImageFormUI;

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import GetRatingItemStyle from './GetRatingItemStyle';

export default GetRatingItemUI = ({
  cartItem,
  onPressStar,
  onChangeText,
  ratingDes,
  defaultDescription,
  rating,
  i18n,
  temp
}) => {
    
  const Item = ({value}) => (
    <TouchableOpacity
      onPress={() => {
        onPressStar(value);
      }}>
      <Image
        style={GetRatingItemStyle.iconStar}
        source={
          value < rating
            ? require('../../assets/Icon/star.png')
            : require('../../assets/Icon/star_grey.png')
        }></Image>
    </TouchableOpacity>
  );

  return (
    <View style={GetRatingItemStyle.viewContainer}>
      <View style={GetRatingItemStyle.viewItem}>
        <View style={GetRatingItemStyle.viewImageAndName}>
          <Image
            style={GetRatingItemStyle.imageProduct}
            source={{uri: cartItem.product.images[0].imageUrl}}></Image>
          <Text numberOfLines={2} style={GetRatingItemStyle.textName}>
            {cartItem.product.productName}
          </Text>
        </View>
        <Text style={GetRatingItemStyle.title}>
          {i18n.t('Product quality')}
        </Text>
        <FlatList
          contentContainerStyle={GetRatingItemStyle.listStar}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({item, index}) => <Item value={index} />}
          keyExtractor={item => item}
        />
        <Text style={GetRatingItemStyle.descriptionLevelStar}>
          {i18n.t(ratingDes[rating - 1])}
        </Text>
        <Text style={GetRatingItemStyle.title}>{i18n.t('Feedback')}</Text>
        <View>
          <TextInput
            placeholder={i18n.t('Tell something')}
            textAlignVertical="top"
            numberOfLines={4}
            multiline={true}
            maxLength={200}
            defaultValue={defaultDescription}
            onChangeText={value => {
              onChangeText(value);
            }}
            style={GetRatingItemStyle.descriptionInput}></TextInput>
          <Text style={GetRatingItemStyle.textLimitCharacter}>
            {temp.length + '/200'}
          </Text>
        </View>
      </View>
    </View>
  );
};

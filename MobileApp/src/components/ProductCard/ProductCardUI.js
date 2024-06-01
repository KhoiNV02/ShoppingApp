import {View, TouchableHighlight, Text, Image, Dimensions} from 'react-native';

import VNDFormat from '../../common/utils/formatCurrency/VNDFormat';
import ProductCardStyle from './ProductCardStyle';

const windowWidth = Dimensions.get('window').width;

export default ProductCardUI = ({data, flexD, onPressCard}) => {
  return (
    <TouchableHighlight
      onPress={onPressCard}
      style={ProductCardStyle.containerTouchable}>
      <View
        style={[
          ProductCardStyle.viewCard,
          {
            flexDirection: flexD,
          },
        ]}>
        <View
          style={[
            ProductCardStyle.viewImage,
            {width: flexD == 'row' ? windowWidth * 0.21 : windowWidth * 0.35},
          ]}>
          <Image
            style={
              flexD == 'row'
                ? [ProductCardStyle.horizontalImage]
                : [ProductCardStyle.verticalImage]
            }
            source={{
              uri: data.imageURL,
            }}></Image>
        </View>
        <View
          style={
            flexD == 'row'
              ? ProductCardStyle.viewInfoCardRow
              : [
                  ProductCardStyle.viewInfoCardColumn,
                  {maxWidth: windowWidth * 0.4},
                ]
          }>
          <View>
            <Text
              numberOfLines={flexD == 'row' ? 2 : 1}
              style={[
                ProductCardStyle.textNameProduct,
                {
                  width:
                    flexD == 'row' ? windowWidth * 0.50 : windowWidth * 0.32,
                },
              ]}>
              {data.productName}
            </Text>
            <Text style={[ProductCardStyle.textPriceProduct]}>
              {VNDFormat(data.price)}
            </Text>
          </View>
          <View
            style={[
              ProductCardStyle.viewListItemInfo,
              {flexDirection: flexD == 'row' ? 'column' : 'row'},
            ]}>
            <View style={ProductCardStyle.viewItemInfo}>
              <Text style={ProductCardStyle.textItemInfo}>
                {data.avgRating.toFixed(1)}
              </Text>
              <Image
                style={ProductCardStyle.iconItemInfo}
                source={require('../../assets/Icon/star.png')}></Image>
            </View>
            <View style={ProductCardStyle.viewItemInfo}>
              <Text style={ProductCardStyle.textItemInfo}>
                {data.sold > 9999
                  ? (data.sold / 1000).toFixed(1) + 'K'
                  : data.sold}
              </Text>
              <Image
                style={ProductCardStyle.iconItemInfo}
                source={require('../../assets/Icon/sold.png')}></Image>
            </View>
            <View style={ProductCardStyle.viewItemInfo}>
              <Text style={ProductCardStyle.textItemInfo}>
                {data.viewed > 9999
                  ? (data.viewed / 1000).toFixed(1) + 'K'
                  : data.viewed}
              </Text>
              <Image
                style={ProductCardStyle.iconItemInfo}
                source={require('../../assets/Icon/eyee.png')}></Image>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

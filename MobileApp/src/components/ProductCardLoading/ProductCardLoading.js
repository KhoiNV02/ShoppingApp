import {View, Image} from 'react-native';

import ProductCardLoadingStyles from './ProductCardLoadingStyles';
const urlShoppingCardImg =
    'data:image/png;base64,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';
function ProductCardLoading({isLandscape}) {

  return (
    <>
      <View
        style={[
          ProductCardLoadingStyles.container,
          isLandscape && ProductCardLoadingStyles.lanscapeContainer,
        ]}>
        <View
          style={[
            ProductCardLoadingStyles.imageBox,
            isLandscape && ProductCardLoadingStyles.landscapeImageBox,
          ]}>
          <Image
            style={ProductCardLoadingStyles.img}
            source={{uri: urlShoppingCardImg}}
          />
        </View>

        <View
          style={[
            ProductCardLoadingStyles.productInformation,
            isLandscape && ProductCardLoadingStyles.landscapeProductInformation,
          ]}>
          <View
            style={[
              ProductCardLoadingStyles.bodyOfProductInformation,
              isLandscape && ProductCardLoadingStyles.landscapeBody,
            ]}>
            <View style={ProductCardLoadingStyles.productName}></View>
            <View style={ProductCardLoadingStyles.productView}></View>
            <View style={ProductCardLoadingStyles.productSold}></View>
          </View>
          <View style={ProductCardLoadingStyles.footerOfProductInformation}>
            <View style={ProductCardLoadingStyles.productPrice}></View>
          </View>
        </View>
      </View>
    </>
  );
}

export default ProductCardLoading;

import {View, Image, Text} from 'react-native';
import {memo} from 'react';

import VNDFormat from '../../common/utils/formatCurrency/VNDFormat';

import CartItemInforStyles from './CartItemInforStyles';

const CartItemInfor = ({imgUri, productName, OrderQuantity, productPrice}) => {
  return (
    <View style={CartItemInforStyles.ProductInfor}>
      <View style={CartItemInforStyles.leftSide}>
        <View style={CartItemInforStyles.ProductImg}>
          <Image
            style={CartItemInforStyles.img}
            source={{
              uri: imgUri,
            }}
          />
        </View>
      </View>

      <View style={CartItemInforStyles.rightSide}>
        <View style={CartItemInforStyles.ProductName}>
          <Text style={CartItemInforStyles.ProductNameText} numberOfLines={1}>
            {productName}
          </Text>
        </View>

        <View style={CartItemInforStyles.ProductQuantity}>
          <Text style={CartItemInforStyles.ProductQuantityText}>
            x{OrderQuantity}
          </Text>
        </View>

        <View style={CartItemInforStyles.ProductPrice}>
          <Text style={CartItemInforStyles.priceStyleText}>
            {VNDFormat(productPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(CartItemInfor);

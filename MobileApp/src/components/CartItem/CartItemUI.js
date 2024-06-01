import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';

import {Colors} from '../GlobalStyle';
import CartItemStyle from './CartItemStyle';

export default CartItemUI = ({
  cartItem,
  quantity,
  selected,
  minus,
  plus,
  onPressImage,
  onPressSelect,
  onPressPlus,
  onPressMinus,
  handleSubmitQuantity,
  handleSubmitInputQuantity,
  i18n,
}) => {
  return (
    <View>
      <View
        style={
          cartItem.product.isDeleted
            ? CartItemStyle.viewItemProductDeleted
            : CartItemStyle.viewItemProductAvailable
        }>
        <Text style={CartItemStyle.textProductOwner}>
          {cartItem.product.user.username}
        </Text>
        <View style={CartItemStyle.line}></View>
        <View style={CartItemStyle.viewBottomCartItem}>
          <TouchableOpacity
            style={[
              CartItemStyle.checkBox,
              {
                backgroundColor: selected ? Colors.PrimaryColor : 'white',
              },
            ]}
            onPress={onPressSelect}>
            {selected ? (
              <Image
                style={CartItemStyle.iconCheckBox}
                source={require('../../assets/Icon/check_white.png')}></Image>
            ) : (
              <></>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressImage}
            style={CartItemStyle.viewImage}>
            <Image
              style={CartItemStyle.image}
              source={{
                uri: cartItem.product.images[0].imageUrl,
              }}></Image>
          </TouchableOpacity>
          <View style={CartItemStyle.viewCartItemInfo}>
            <Text numberOfLines={2} style={CartItemStyle.textProductName}>
              {cartItem.product.productName}
            </Text>
            <View style={CartItemStyle.viewBottomInfo}>
              <View style={CartItemStyle.viewQuantityHandle}>
                <TouchableOpacity
                  style={{opacity: minus ? 1 : 0.4}}
                  disabled={!minus}
                  onPress={onPressMinus}>
                  <View style={CartItemStyle.viewIcon}>
                    <Image
                      style={CartItemStyle.iconMinus}
                      source={require('../../assets/Icon/minus.png')}></Image>
                  </View>
                </TouchableOpacity>
                <TextInput
                  keyboardType="number-pad"
                  textAlign="center"
                  value={quantity.toString()}
                  onChangeText={value => {
                    handleSubmitInputQuantity(value);
                  }}
                  maxLength={3}
                  onEndEditing={handleSubmitQuantity}
                  style={[
                    CartItemStyle.textInputQuantity,
                    {
                      width: quantity.toString().length == 3 ? 32 : 'auto',
                    },
                  ]}></TextInput>
                <TouchableOpacity
                  style={{opacity: plus ? 1 : 0.4}}
                  disabled={!plus}
                  onPress={onPressPlus}>
                  <View style={CartItemStyle.viewIcon}>
                    <Image
                      style={CartItemStyle.iconPlus}
                      source={require('../../assets/Icon/plus.png')}></Image>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={CartItemStyle.priceText}>
                  {VNDFormat(cartItem.product.price)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {cartItem.product.isDeleted ? (
        <Text style={CartItemStyle.textUnavailableProduct}>
          {i18n.t('Product is not available')}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

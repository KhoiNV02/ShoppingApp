import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';

import VNDFormat from '../../common/utils/formatCurrency/VNDFormat';

import i18n from '../../common/utils/multiLanguages/multilanguages';

import CustomButton from '../CustomButton/CustomButton';
import PurchaseConfirmationPopupStyles from './PurchaseConfirmationPopupStyles';

function PurchaseConfirmationPopupUI({
  productName,
  productImage,
  productPrice,
  minus,
  plus,
  quantityPurchase,
  handleInputQuantityPurchase,
  closePopUp,
  handleSubmitQuantity,
  handleBuyProduct,
  handleDecreaseQuatityPurchase,
  handleIncreaseQuatityPurchase,
}) {
  return (
    <>
      <View style={PurchaseConfirmationPopupStyles.outerContainer}>
        <Pressable
          onPress={closePopUp}
          style={PurchaseConfirmationPopupStyles.outerPressable}
        />

        <View style={PurchaseConfirmationPopupStyles.innerContainer}>
          <Text style={PurchaseConfirmationPopupStyles.title}>
            {i18n.t('Add to cart')}
          </Text>

          <View style={PurchaseConfirmationPopupStyles.line} />

          <View style={PurchaseConfirmationPopupStyles.productInfor}>
            <View style={PurchaseConfirmationPopupStyles.productInforBox}>
              <View style={PurchaseConfirmationPopupStyles.productImgBox}>
                <Image
                  style={PurchaseConfirmationPopupStyles.productImg}
                  source={{
                    uri: productImage,
                  }}
                />
              </View>

              <View style={PurchaseConfirmationPopupStyles.productDetailInfor}>
                <Text
                  numberOfLines={2}
                  style={PurchaseConfirmationPopupStyles.productName}>
                  {productName}
                </Text>
                <Text style={PurchaseConfirmationPopupStyles.productPrice}>
                  {VNDFormat(productPrice)}
                </Text>
                <View style={PurchaseConfirmationPopupStyles.shortLine} />
                <View style={PurchaseConfirmationPopupStyles.action}>
                  <View
                    style={PurchaseConfirmationPopupStyles.actionChangeAmount}>
                    <TouchableOpacity
                      style={{opacity: minus ? 1 : 0.4}}
                      disabled={!minus}
                      onPress={handleDecreaseQuatityPurchase}>
                      <View
                        style={PurchaseConfirmationPopupStyles.minusIconBox}>
                        <Image
                          style={PurchaseConfirmationPopupStyles.minusIcon}
                          source={require('../../assets/Icon/minus.png')}
                        />
                      </View>
                    </TouchableOpacity>
                    <TextInput
                      maxLength={3}
                      onEndEditing={handleSubmitQuantity}
                      keyboardType="number-pad"
                      textAlign="center"
                      onChangeText={handleInputQuantityPurchase}
                      value={quantityPurchase.toString()}
                      style={
                        PurchaseConfirmationPopupStyles.actionChangeAmountInput
                      }
                    />
                    <TouchableOpacity
                      style={{opacity: plus ? 1 : 0.4}}
                      disabled={!plus}
                      onPress={handleIncreaseQuatityPurchase}>
                      <View style={PurchaseConfirmationPopupStyles.plusIconBox}>
                        <Image
                          style={PurchaseConfirmationPopupStyles.plusIcon}
                          source={require('../../assets/Icon/plus.png')}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={PurchaseConfirmationPopupStyles.priceBox}>
                    <Text style={PurchaseConfirmationPopupStyles.price}>
                      {VNDFormat(parseInt(productPrice * quantityPurchase))}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={PurchaseConfirmationPopupStyles.buttons}>
            <View style={PurchaseConfirmationPopupStyles.btn}>
              <CustomButton lightButton={true} onPress={closePopUp}>
                {i18n.t('Cancel')}
              </CustomButton>
            </View>

            <View style={PurchaseConfirmationPopupStyles.btn}>
              <CustomButton onPress={handleBuyProduct}>
                {i18n.t('Confirm')}
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default PurchaseConfirmationPopupUI;

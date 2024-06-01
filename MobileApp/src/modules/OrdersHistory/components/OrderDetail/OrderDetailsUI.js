import {View, Text, ScrollView} from 'react-native';

import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import VNDFormat from '../../../../common/utils/formatCurrency/VNDFormat';

import CartItemInfor from '../../../../components/CartItemInfor/CartItemInfor';
import OrderDetailsStyles from './OrderDetailsStyles';
function OrderDetailsUI({
  renderStatus,
  cartItems,
  totalMoneyOfTheOrder,
  orderId,
  orderTimeObject,
  handleBuyAgain,
  handleNavigateToRatingScreen,
}) {
  return (
    <View style={OrderDetailsStyles.container}>
      <View style={OrderDetailsStyles.mainContent}>
        <ScrollView>
          <View style={OrderDetailsStyles.orderStatus}>
            <Text style={OrderDetailsStyles.orderStatusText}>
              {i18n.t('Order')} {renderStatus}
            </Text>
            <Text style={OrderDetailsStyles.gratitudeText}>
              {i18n.t('Thank you for Shopping')}!
            </Text>
          </View>
          {cartItems.map((item, index) => (
            <View
              key={index}
              style={{backgroundColor: 'white', padding: 10, mt: 5}}>
              <CartItemInfor
                imgUri={item.product.images[0].imageUrl}
                productName={item.product.productName}
                OrderQuantity={item.quantity}
                productPrice={item.product.price}
                key={item._id}
              />
            </View>
          ))}
          <View
            style={[
              OrderDetailsStyles.totalOrder,
              OrderDetailsStyles.formatColumnOrderInfor,
            ]}>
            <Text style={OrderDetailsStyles.totalTextFormat}>
              {i18n.t('Order Total')}
            </Text>
            <Text style={OrderDetailsStyles.totalPrice}>
              {VNDFormat(totalMoneyOfTheOrder)}
            </Text>
          </View>
          <View style={OrderDetailsStyles.orderInfor}>
            <View
              style={[
                OrderDetailsStyles.orderId,
                OrderDetailsStyles.formatColumnOrderInfor,
              ]}>
              <Text style={OrderDetailsStyles.labelFooter}>
                {i18n.t('Order ID')}
              </Text>
              <Text style={OrderDetailsStyles.labelFooter}>{orderId}</Text>
            </View>
            <View
              style={[
                OrderDetailsStyles.orderTime,
                OrderDetailsStyles.formatColumnOrderInfor,
              ]}>
              <Text style={OrderDetailsStyles.labelFooter}>
                {i18n.t('Order Time')}
              </Text>
              <Text style={OrderDetailsStyles.labelFooter}>
                {orderTimeObject.toLocaleDateString('vi-VN')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={OrderDetailsStyles.footer}>
        {renderStatus !== i18n.t('Completed') && (
          <View style={OrderDetailsStyles.buttonRate}>
            <CustomButton lightButton onPress={handleNavigateToRatingScreen}>
              {i18n.t('Rate')}
            </CustomButton>
          </View>
        )}

        <View style={OrderDetailsStyles.buttonBuyAgain}>
          <CustomButton onPress={handleBuyAgain}>
            {i18n.t('Buy Again')}
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

export default OrderDetailsUI;

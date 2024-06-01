import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useSelector} from 'react-redux';

import {Colors} from '../GlobalStyle';
import i18n from '../../common/utils/multiLanguages/multilanguages';
import VNDFormat from '../../common/utils/formatCurrency/VNDFormat';

import CartItemInfor from '../CartItemInfor/CartItemInfor';
import CustomButton from '../CustomButton/CustomButton';
import OrderItemStyles from './OrderItemStyles';

function OrderItemUI({
  orderItemDetail,
  handleOpenOrderDetail,
  handleBuyAgain,
  handleOpenRating,
}) {
  i18n.locale = useSelector(state => state.language.language);
  return (
    <>
      <View style={OrderItemStyles.container}>
        <TouchableOpacity
          style={{width: '100%', height: '100%'}}
          onPress={handleOpenOrderDetail}>
          <View style={OrderItemStyles.header}>
            <View style={OrderItemStyles.headerLeftSide}>
              <View style={OrderItemStyles.icon}>
                <Image
                  style={OrderItemStyles.iconImg}
                  source={require('../../assets/Icon/shop.png')}></Image>
              </View>
              <View style={OrderItemStyles.shopName}>
                <Text style={OrderItemStyles.shopNameText} numberOfLines={1}>
                  {orderItemDetail.owner}
                </Text>
              </View>
            </View>
            <View style={OrderItemStyles.headerRightSide}>
              <View style={OrderItemStyles.statusOrder}>
                <Text style={OrderItemStyles.statusOrderText}>
                  {orderItemDetail.status}
                </Text>
              </View>
            </View>
          </View>
          <View style={OrderItemStyles.body}>
            <CartItemInfor
              imgUri={orderItemDetail.imgUri}
              productName={orderItemDetail.productName}
              OrderQuantity={orderItemDetail.OrderQuantity}
              productPrice={orderItemDetail.productPrice}
            />
            <View style={OrderItemStyles.viewMoreDetail}>
              <Text style={OrderItemStyles.viewMoreDetailText}>
                {i18n.t('View More Detail')}
              </Text>
            </View>
            <View style={OrderItemStyles.orderInformation}>
              <View style={OrderItemStyles.numberProduct}>
                <Text style={OrderItemStyles.numberProductText}>
                  {orderItemDetail.numberOfItemsInOrder == 1
                    ? orderItemDetail.numberOfItemsInOrder +
                      ' ' +
                      i18n.t('Item')
                    : orderItemDetail.numberOfItemsInOrder +
                      ' ' +
                      i18n.t('Items')}
                </Text>
              </View>
              <View style={OrderItemStyles.total}>
                <Text style={OrderItemStyles.totalText}>
                  {i18n.t('Order Total')}: <Text></Text>
                  <Text style={OrderItemStyles.priceStyleText}>
                    {VNDFormat(orderItemDetail.totalMoneyOfTheOrder)}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={OrderItemStyles.footer}>
            <Text style={OrderItemStyles.timeText}>
              {new Date(orderItemDetail.orderTime).toLocaleDateString('vi-VN')}
            </Text>
            <View style={OrderItemStyles.action}>
              {orderItemDetail.status !== i18n.t('Completed') ? (
                <View style={OrderItemStyles.buttonRate}>
                  <CustomButton onPress={handleOpenRating}>
                    {i18n.t('Rate')}
                  </CustomButton>
                </View>
              ) : (
                <View style={OrderItemStyles.buttonBuyAgain}>
                  <CustomButton onPress={handleBuyAgain}>
                    {i18n.t('Buy Again')}
                  </CustomButton>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default OrderItemUI;

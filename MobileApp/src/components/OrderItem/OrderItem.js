import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { memo } from 'react';

import {buyAgain, setRatingStatus} from '../../store/actions/actions';

import {buyAgainConfig} from '../../services/api/cartItemServices';
import OrderItemUI from './OrderItemUI';

function OrderItem({orderItemDetail}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleBuyAgain = () => {
    const config = buyAgainConfig(orderItemDetail.orderId);
    dispatch(buyAgain(config));
    navigation.navigate('Cart');
  };

  const handleOpenOrderDetail = () => {
    dispatch(setRatingStatus(orderItemDetail.status));
    navigation.navigate('OrderDetails', {
      status: orderItemDetail.status,
      orderTime: orderItemDetail.orderTime,
      cartItems: orderItemDetail.cartItems,
      totalMoneyOfTheOrder: orderItemDetail.totalMoneyOfTheOrder,
      orderId: orderItemDetail.orderId,
    });
  };
  const handleOpenRating = () => {
    navigation.navigate('Rating', {
      cartItems: orderItemDetail.cartItems,
      orderId: orderItemDetail.orderId,
    });
  };
  return (
    <OrderItemUI
      orderItemDetail={orderItemDetail}
      handleOpenOrderDetail={handleOpenOrderDetail}
      handleBuyAgain={handleBuyAgain}
      handleOpenRating={handleOpenRating}
    />
  );
}

export default memo(OrderItem);

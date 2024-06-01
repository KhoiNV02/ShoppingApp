
import {useDispatch, useSelector} from 'react-redux';

import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import {buyAgainConfig} from '../../../../services/api/cartItemServices';
import {buyAgain} from '../../../../store/actions/actions';
import OrderDetailsUI from './OrderDetailsUI';

function OrderDetails({navigation, route}) {
  const {status, orderTime, cartItems, totalMoneyOfTheOrder, orderId} =
    route.params;
  const orderTimeObject = new Date(orderTime);
  i18n.locale = useSelector(state => state.language.language);
  const renderStatus = useSelector(state => state.product.ratingStatus);
  const dispatch = useDispatch();

  const handleBuyAgain = () => {
    const config = buyAgainConfig(orderId);
    dispatch(buyAgain(config));
    navigation.navigate('Cart');
  };

  const handleNavigateToRatingScreen = () => {
    navigation.navigate('Rating', {
      cartItems: cartItems,
      orderId: orderId,
    });
  };
  return (
    <OrderDetailsUI
      renderStatus={renderStatus}
      cartItems={cartItems}
      totalMoneyOfTheOrder={totalMoneyOfTheOrder}
      orderId={orderId}
      orderTimeObject={orderTimeObject}
      handleBuyAgain={handleBuyAgain}
      handleNavigateToRatingScreen={handleNavigateToRatingScreen}
    />
  );
}

export default OrderDetails;


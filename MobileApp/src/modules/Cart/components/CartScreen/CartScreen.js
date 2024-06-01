import {Alert} from 'react-native';
import {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {getCartItemByUserIdConfig} from '../../../../services/api/cartItemServices';
import {getCartItemByUserId} from '../../../../store/actions/actions';
import {addNewOrder} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import {addNewOrderConfig} from '../../../../services/api/purchaseHistoryServices';
import CartScreenUI from './CartScreenUI';
export default function CartScreen() {
  i18n.locale = useSelector(state => state.language.language);
  const userId = useSelector(state => state.login._id);
  const cartItems = useSelector(state => state.cartItem.cartItems);
  const [total, setTotal] = useState(0);
  const [totalSelect, setTotalSelect] = useState(0);

  const dispatch = useDispatch();

  function fetchData(userId) {
    const config = getCartItemByUserIdConfig(userId);
    dispatch(getCartItemByUserId(config));
  }

  function purchaseItem(cartItemId, cartItems) {
    const NewOrderConfig = addNewOrderConfig(cartItemId, userId);
    dispatch(addNewOrder(NewOrderConfig, cartItems));
  }
  useEffect(() => {
    var totalMoney = 0;
    var totalSelected = 0;
    cartItems.forEach(element => {
      if (element.isSelected) {
        totalMoney = totalMoney + element.product.price * element.quantity;
        totalSelected = totalSelected + 1;
      }
    });
    setTotal(totalMoney);
    setTotalSelect(totalSelected);
  }, [cartItems]);

  function handlePurchaseCartItem() {
    const newitemlist = [...cartItems];
    var cartItemId = [];
    var cartItemSelect = 0;

    for (var i = cartItems.length - 1; i >= 0; i--) {
      if (cartItems[i]?.isSelected == true) {
        cartItemSelect++;
        if (cartItems[i].product.isDeleted) {
          Alert.alert(
            '',
            i18n.t('Alert cartItem'),
            [
              {
                text: i18n.t('OK'),
              },
            ],
            {cancelable: false},
          );
          break;
        } else {
          cartItemId.push(cartItems[i]._id);
          newitemlist.splice(i, 1);
        }
      }
    }
    if (cartItemSelect == 0) {
      Alert.alert(
        '',
        i18n.t('Alert cartItem select'),
        [
          {
            text: i18n.t('OK'),
          },
        ],
        {cancelable: false},
      );
    } else if (cartItemSelect == cartItemId.length) {
      purchaseItem(cartItemId, newitemlist);
    }
  }
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      fetchData(userId);
    }
  }, [isFocused]);

  return (
    <CartScreenUI
      cartItems={cartItems}
      handlePurchaseCartItem={handlePurchaseCartItem}
      total={total}
      totalSelect={totalSelect}
    />
  );
}

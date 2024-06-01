import React from 'react';
import {Alert} from 'react-native';
import {useState} from 'react';
import { memo } from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {deleteCartItemConfig} from '../../services/api/cartItemServices';
import {deleteCartItem} from '../../store/actions/actions';
import {updateCartItem} from '../../store/actions/actions';
import {updateCartItemConfig} from '../../services/api/cartItemServices';
import i18n from '../../common/utils/multiLanguages/multilanguages';
import CartItemUI from './CartItemUI';

function CartItem({cartItem}) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [selected, setSelected] = useState(cartItem.isSelected);
  i18n.locale = useSelector(state => state.language.language);
  const [minus, setMinus] = useState(() => {
    if (quantity == 1) {
      return false;
    } else {
      return true;
    }
  });
  const [plus, setPlus] = useState(() => {
    if (quantity == 999) {
      return false;
    } else {
      return true;
    }
  });
  const data = useSelector(state => state.cartItem.cartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function handleUpdateCartItem(userId, cartItem, isSelected, newQuantity) {
    const config = updateCartItemConfig(userId, isSelected, newQuantity);
    dispatch(updateCartItem(config, cartItem));
  }

  function deleteItem(_id, cartItem) {
    const config = deleteCartItemConfig(_id);
    dispatch(deleteCartItem(config, cartItem));
  }

  function handleUpdateQuantity(newQuantity) {
    const newitem = data.filter(function (item) {
      return item._id == cartItem._id;
    });
    newitem[0].quantity = newQuantity;
    const index = data.findIndex(x => x._id == cartItem._id);
    const newitemlist = [...data];
    newitemlist.splice(index, 1, newitem[0]);
    const isSelected = cartItem.isSelected;
    handleUpdateCartItem(cartItem._id, newitemlist, isSelected, newQuantity);
  }

  function handleUpdateSelected(newselected) {
    const newitem = data.filter(function (item) {
      return item._id == cartItem._id;
    });
    newitem[0].isSelected = newselected;
    const index = data.findIndex(x => x._id == cartItem._id);
    const newitemlist = [...data];
    newitemlist.splice(index, 1, newitem[0]);
    const isSelected = newselected;
    handleUpdateCartItem(cartItem._id, newitemlist, isSelected, quantity);
  }

  function handleSubmitQuantity() {
    if (quantity == 0 || quantity == '') {
      Alert.alert(
        i18n.t('Delete confirm'),
        i18n.t('Delete Text'),
        [
          {
            text: i18n.t('Cancel'),
            onPress: () => setQuantity(cartItem.quantity),
          },
          {
            text: i18n.t('OK'),
            onPress: () => {
              const newitemlist = [...data];
              const index = data.findIndex(x => x._id == cartItem._id);
              newitemlist.splice(index, 1);
              deleteItem(cartItem._id, newitemlist);
            },
          },
        ],
        {cancelable: false},
      );
    } else if (quantity != cartItem.quantity) {
      handleUpdateQuantity(quantity);
    }
  }
  const handlePressImage = () => {
    navigation.navigate('ProductDetail', {
      productInforFromProductCard: cartItem.product,
    });
  };

  const handleSelect = () => {
    setSelected(!selected);
    handleUpdateSelected(!selected);
  };

  const handlePressPlus = () => {
    setQuantity(parseInt(quantity, 10) + 1);
    if (quantity == 999) {
      setPlus(false);
    } else {
      setPlus(true);
    }
    handleUpdateQuantity(parseInt(quantity, 10) + 1);
  };

  const handlePressMinus = () => {
    setMinus(false);
    setQuantity(parseInt(quantity, 10) - 1);
    if (quantity == 1) {
      setMinus(false);
    } else {
      setMinus(true);
    }
    handleUpdateQuantity(parseInt(quantity, 10) - 1);
  };

  const handleSubmitInputQuantity = value => {
    const result = value.replace(/\D/g, '');
    setQuantity(result);
  };
  return (
    <CartItemUI
      cartItem={cartItem}
      quantity={quantity}
      selected={selected}
      minus={minus}
      plus={plus}
      onPressImage={handlePressImage}
      onPressMinus={handlePressMinus}
      onPressPlus={handlePressPlus}
      onPressSelect={handleSelect}
      handleSubmitQuantity={handleSubmitQuantity}
      handleSubmitInputQuantity={handleSubmitInputQuantity}
      i18n={i18n}></CartItemUI>
  );
}

export default memo(CartItem);

import React from 'react';
import { Alert } from 'react-native';
import { memo } from 'react';

import {useSelector, useDispatch} from 'react-redux';

import i18n from '../../common/utils/multiLanguages/multilanguages';
import {deleteCartItemConfig} from '../../services/api/cartItemServices';
import {deleteCartItem} from '../../store/actions/actions';
import CartListUI from './CartListUI';

const CartList = ({data}) => {
  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.language);
  let row = [];
  let prevOpenedRow;

  function closeRow(index) {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  }

  function deleteItem(_id, cartItem) {
    const config = deleteCartItemConfig(_id);
    dispatch(deleteCartItem(config, cartItem));
  }

  function handleDeleteItem(_id, index) {
    Alert.alert(
      i18n.t('Delete confirm'),
      i18n.t('Delete Text'),
      [
        {
          text: i18n.t('Cancel'),
        },
        {
          text: i18n.t('OK'),
          onPress: () => {
            const newitemlist = [...data];
            newitemlist.splice(index, 1);
            deleteItem(_id, newitemlist);
          },
        },
      ],
      {cancelable: false},
    );
    prevOpenedRow.close();
  }

  return (
    <CartListUI
      data={data}
      i18n={i18n}
      row={row}
      closeRow={closeRow}
      onPressDelete={handleDeleteItem}></CartListUI>
  );
};
export default memo(CartList);

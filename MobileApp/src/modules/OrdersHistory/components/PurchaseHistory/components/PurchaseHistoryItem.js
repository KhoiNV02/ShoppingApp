import {View, StyleSheet} from 'react-native';
import {memo} from 'react';
import OrderItem from '../../../../../components/OrderItem/OrderItem';
import PurchaseHistoryItemStyles from './PurchaseHistoryItemStyles';
function PurchaseHistoryItem({item}) {
  return (
    <View style={[PurchaseHistoryItemStyles.itemContainer, {marginTop: 5}]}>
      <OrderItem orderItemDetail={item} />
    </View>
  );
}

export default memo(PurchaseHistoryItem);

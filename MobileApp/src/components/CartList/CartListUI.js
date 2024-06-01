import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import CartListStyle from './CartListStyle';
import CartItem from '../CartItem/CartItem';

export default CartListUI = ({data, i18n, row, closeRow, onPressDelete}) => {
  const RightSwipeActions = (_id, index) => {
    return (
      <View style={CartListStyle.viewDeleteOption}>
        <TouchableOpacity
          style={CartListStyle.viewTouchable}
          onPress={() => {
            onPressDelete(_id, index);
          }}>
          <Text style={CartListStyle.textDeleteOption}>{i18n.t('Delete')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Item = ({cartItem, index}) => (
    <View
      style={{
        marginTop: index == 0 ? 10 : 0,
      }}>
      <Swipeable
        ref={ref => (row[index] = ref)}
        renderRightActions={() => {
          return RightSwipeActions(cartItem._id, index);
        }}
        onSwipeableWillOpen={() => {
          closeRow(index);
        }}>
        <CartItem cartItem={cartItem}></CartItem>
      </Swipeable>
    </View>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => <Item cartItem={item} index={index} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

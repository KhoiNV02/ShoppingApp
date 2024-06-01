import {StyleSheet} from 'react-native';

const CartItemInforStyles = StyleSheet.create({
  ProductInfor: {
    flexDirection: 'row',
    flex: 1,
  },
  leftSide: {
    flex: 1,
  },
  ProductImg: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 1.2,
    borderRadius: 8,
    borderColor: 'grey',
  },
  img: {
    flex: 1,
    borderRadius: 8,
  },
  rightSide: {
    marginLeft: 10,
    flex: 5,
  },
  ProductName: {
    flex: 1,
  },
  ProductNameText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  ProductQuantity: {
    flex: 1,
    alignItems: 'flex-end',
  },
  ProductQuantityText: {
    fontSize: 14,
    color: 'black',
  },
  ProductPrice: {
    flex: 1,
    alignItems: 'flex-end',
  },
  priceStyleText: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default CartItemInforStyles;

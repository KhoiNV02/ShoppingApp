import {StyleSheet} from 'react-native';

import {Colors} from '../GlobalStyle';

const PurchaseConfirmationPopupStyles = StyleSheet.create({
  buttons: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  outerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
  },

  outerPressable: {
    width: '100%',
    height: '100%',
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
  },

  innerContainer: {
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    width: '95%',
  },

  productInfor: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 110,
    marginVertical: 10,
  },

  productInforBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productImgBox: {
    width: '30%',
    aspectRatio: 1,
    margin: 5,
    marginRight: 10,
    marginBottom: 0,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#adb5bd',
  },

  productImg: {
    width: '99%',
    aspectRatio: 1,
    borderRadius: 10,
  },

  title: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    marginVertical: 5,
  },

  productDetailInfor: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '65%',
  },

  productName: {
    flexWrap: 'wrap',
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },

  productPrice: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
  },

  shortLine: {
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 5,
    marginTop: 10,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  actionChangeAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.3,
    borderColor: Colors.PrimaryColor,
    height: 22,
  },

  minusIconBox: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  minusIcon: {
    width: 14,
    height: 14,
  },

  actionChangeAmountInput: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    padding: 0,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: Colors.PrimaryColor,
  },

  plusIconBox: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusIcon: {
    width: 16,
    height: 16,
  },

  actionConfirm: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  actionConfirmButton: {
    width: '85%',
    height: '56%',
    justifyContent: 'center',
  },

  priceBox: {
    flexDirection: 'row',
  },

  price: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
  },

  btn: {
    width: '46%',
  },
});

export default PurchaseConfirmationPopupStyles;

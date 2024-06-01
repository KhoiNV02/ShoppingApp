import { StyleSheet,Dimensions } from "react-native";

import { Colors } from "../../../../components/GlobalStyle";

const windowWidth = Dimensions.get('window').width;
const widthImage = windowWidth * 0.28;

export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bodyProductDetail: {
      flex: 1,
    },
    productName: {
      maxHeight: '9%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    mainImage: {
      width: '100%',
      aspectRatio: 1,
      marginTop: 5,
      borderRadius: 10,
    },
    imgSlider: {
      marginTop: 10,
      width: '100%',
      height: 120,
      justifyContent: 'space-around',
    },
    imgSliderUnit: {
      width: widthImage,
      height: widthImage,
      marginRight: 12.7,
      borderRadius: 10,
    },
    productPrice: {
      marginLeft: 2,
    },
    productDescriptBox: {
      marginLeft: 2,
      marginVertical: 5,
    },
    productPriceText: {
      color: '#fb5607',
      fontSize: 20,
      fontWeight: '500',
      marginRight: 15,
    },
    productDescriptText: {
      color: 'grey',
      fontSize: 16,
      fontWeight: '400',
    },
    productDescriptDisplayButton: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 10,
    },
    action: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3%',
      width: '100%',
      borderWidth: 0.5,
    },
    buttonBuy: {
      minWidth: '40%',
    },
    activeImg: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'red',
    },
    activeImgDescript: {
      position: 'absolute',
      bottom: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: 'auto',
      textAlign: 'center',
      alignSelf: 'center',
      color: 'white',
      height: 'auto',
      textAlignVertical: 'center',
      borderRadius: 15,
      padding: 10,
      marginHorizontal: 10,
    },
    viewNameProduct: {
      backgroundColor: 'white',
      padding: 15,
      paddingVertical: 10,
      marginTop: 5,
    },
    viewIconAndNumber: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textAvgRating: {
      color: 'black',
      fontSize: 14,
      fontWeight: '500',
      marginRight: 1,
    },
    iconAvgRating: {
      width: 16,
      height: 16,
    },
    viewShopOwner: {
      backgroundColor: 'white',
      padding: 15,
      paddingVertical: 10,
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textNameOwner: {
      color: 'black',
      fontSize: 18,
      fontWeight: '500',
      marginHorizontal: 15,
    },
    viewDescription: {
      backgroundColor: 'white',
      padding: 15,
      paddingVertical: 10,
      marginTop: 5,
    },
    textDescription: {
      color: 'black',
      fontSize: 18,
      fontWeight: '500',
    },
    textShowmore: {
      fontWeight: '500',
      color: Colors.PrimaryColor,
      fontSize: 16,
    },
    iconShowmore: {
      width: 18,
      height: 18,
      marginLeft: 5,
    },
    viewRating: {
      backgroundColor: 'white',
      marginTop: 5,
    },
    titleRating: {
      color: 'black',
      fontSize: 18,
      fontWeight: '500',
      width: '100%',
      borderBottomWidth: 0.5,
      borderColor: 'grey',
      paddingBottom: 10,
      padding: 15,
    },
    viewRatingList: {
      paddingHorizontal: 15,
    },
    viewIconFooter: {
      width: 16,
      height: 16,
      marginRight: 2,
    },
    numberFooter: {
      color: 'black',
      fontSize: 15,
      fontWeight: '500',
    },
    viewPricePurchase: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
  
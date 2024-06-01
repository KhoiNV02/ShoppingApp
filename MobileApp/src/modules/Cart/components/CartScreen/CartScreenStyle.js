import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
    },
    viewFooter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 60,
      width: '100%',
      paddingHorizontal: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
    },
    viewSelected: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 14,
      height: 14,
    },
    titleSelected: {
      fontWeight: '500',
    },
    textSelected: {
      color: 'black',
      fontWeight: '500',
    },
    viewPurchase: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    textTotal: {
      color: 'black',
      fontSize: 16,
      fontWeight: '500',
    },
    textMoney: {
      color: '#fb5607',
      fontSize: 18,
      fontWeight: '500',
    },
    viewBtnPurchase: {
      width: '40%',
      marginLeft: 15,
    },
  });
  
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    viewContainer: {
      flexDirection: 'row',
      height: 60,
      shadowOffset: 9,
      shadowColor: 'grey',
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
    },
    viewItem: {
      flex: 1,
    },
    viewIndicator: {
      flexDirection: 'row',
    },
    viewSideIndicator: {
      flex: 0.5,
    },
    indicator: {
      height: 4,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      flex: 1,
    },
    viewIconAndTitle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewBadgeNumber: {
      width: 17,
      height: 17,
      backgroundColor: '#fb5607',
      borderRadius: 10,
      position: 'absolute',
      marginLeft: 12,
      top: -8,
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textBadgeNumber: {
      fontSize: 11,
      color: 'white',
    },
    titleFocused: {
      color: '#00a6fb',
      fontWeight: '600',
      fontSize: 12,
    },
    titleUnFocused: {
      color: 'grey',
      fontWeight: 'normal',
      fontSize: 12,
    },
  });
  
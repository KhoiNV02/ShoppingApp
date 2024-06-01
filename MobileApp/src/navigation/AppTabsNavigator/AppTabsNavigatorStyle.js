import { StyleSheet } from 'react-native';

import {Colors} from '../../components/GlobalStyle';

export default styles = StyleSheet.create({
    title: {
      fontSize: 23,
    },
    icon: {
      width: 22,
      height: 22,
    },
    badgeNumberRight: {
      marginRight: 15,
      width: 28,
      height: 28,
      backgroundColor: Colors.PrimaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    textBadgeNumber: {
      color: 'white',
      fontSize: 17,
      fontWeight: '500',
    },
  });
  
import { StyleSheet } from "react-native";

import { Colors } from "../../../../components/GlobalStyle";

export default styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      backgroundColor: Colors.PrimaryColor,
    },
    viewProfile: {
      height: '30%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: '5%',
      backgroundColor: Colors.PrimaryColor,
    },
    viewInfo: {
      height: '65%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    viewAvatar: {
      height: '100%',
      borderRadius: 100,
      aspectRatio: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewIconImage: {
      height: '60%',
      aspectRatio: 1,
    },
    textName: {
      marginLeft: 20,
      fontSize: 22,
      fontWeight: '700',
      color: 'white',
    },
    viewOption: {
      backgroundColor: 'white',
      flex: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 10,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    viewBtn: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomColor: Colors.PrimaryColor,
      alignItems: 'center',
      borderBottomWidth: 1,
      paddingVertical: 10,
    },
    viewLablebtn: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    viewIconBtn: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    viewTitleBtn: {
      fontWeight: '500',
      color: Colors.PrimaryColor,
      fontSize: 18,
      marginBottom: 2,
    },
    viewIconAngle: {
      width: 18,
      height: 18,
    },
  });
  
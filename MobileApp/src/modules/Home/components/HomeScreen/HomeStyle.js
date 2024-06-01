import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    horizontalListContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingHorizontal: 10,
      marginBottom: 5,
    },
    textTitle: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
      marginBottom: 5,
    },
    imgBG: {
      position: 'relative',
      padding: 10,
    },
    viewSearchBar: {
      borderRadius: 18,
      marginBottom: 10,
      height: 'auto',
      marginHorizontal: 20,
      backgroundColor: 'white',
      padding: 8,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    searchBar: {
      height: 40,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#ededed',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    iconSearch: {
      width: 24,
      height: 24,
    },
    viewListShortcut: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
  
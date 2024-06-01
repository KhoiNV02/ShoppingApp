import {
  StyleSheet,
} from 'react-native';
import {Colors} from '../../../../components/GlobalStyle';



const MyShopScreenStyles = StyleSheet.create({
  safeViewContainer: {
    marginBottom: 60,
  },
  title:{
    marginLeft: 5,
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
  },
  addProductBtn:{
    fontSize: 14,
    color: Colors.PrimaryColor,
    fontWeight: '600',
    marginRight: 5,
  },
  btnIcon:{
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewHeader: {
    padding: 12,
    marginBottom: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});


export default MyShopScreenStyles;
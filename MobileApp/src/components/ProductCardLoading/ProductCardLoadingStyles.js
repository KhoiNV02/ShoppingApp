import {StyleSheet} from 'react-native';

const ProductCardLoadingStyles = StyleSheet.create({
  container: {
    marginLeft: '1%',
    marginRight: 20,
    marginBottom: 5,
    width: 160,
    height: 210,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 8,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  lanscapeContainer: {
    marginTop: 5,
    width: '98%',
    height: 120,
    flexDirection: 'row',
  },

  productInformation: {
    flex: 1,
  },

  landscapeProductInformation: {
    marginLeft: 7,
  },

  imageBox: {
    aspectRatio: 1,
    borderWidth: 1.2,
    borderRadius: 8,
    borderColor: 'grey',
    flex: 2.5,
    alignSelf: 'center',
  },
  
  landscapeImageBox: {
    flex: 0,
    alignSelf: 'none',
  },

  img: {
    flex: 1,
    borderRadius: 10,
  },

  bodyOfProductInformation: {
    marginTop: 5,
    flex: 1,
  },

  landscapeBody: {
    flex: 2,
  },

  productName: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius: 8,
    opacity: 0.5,
  },

  productView: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
    width: '50%',
    opacity: 0.5,
  },

  productSold: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
    width: '50%',
    opacity: 0.5,
  },

  footerOfProductInformation: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  productPrice: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'grey',
    borderRadius: 8,
    width: '50%',
    opacity: 0.5,
  },
});

export default ProductCardLoadingStyles;

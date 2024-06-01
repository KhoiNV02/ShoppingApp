import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  containerTouchable: {
    borderRadius: 10,
    margin: 5,
    marginTop: 2,
    marginBottom: 0,
  },
  viewCard: {
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
  viewInfoCardRow: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  viewInfoCardColumn: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  textNameProduct: {
    color: 'black',
    fontSize: 16,
    fontWeight: 600,
  },
  textPriceProduct: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 4,
  },
  horizontalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  verticalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  viewImage: {
    aspectRatio: 1,
    borderWidth: 1.2,
    borderRadius: 8,
    borderColor: 'grey',
  },
  viewListItemInfo: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  viewItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItemInfo: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
    marginRight: 1,
  },
  iconItemInfo: {
    width: 14,
    height: 14,
  },
});

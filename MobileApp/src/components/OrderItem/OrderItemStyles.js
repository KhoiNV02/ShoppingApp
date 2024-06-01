import {StyleSheet} from 'react-native';

import {Colors} from '../GlobalStyle';

const OrderItemStyles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    pressArea: {
      width: '100%',
      height: '100%',
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    paddingBottom: 4,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 4,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  headerLeftSide: {
    alignItems: 'bottom',
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
  iconImg: {
    width: 20,
    height: 20,
  },
  shopName: {},
  shopNameText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  headerRightSide: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  statusOrder: {},
  statusOrderText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.PrimaryColor,
    fontStyle: 'italic',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  body: {
    flex: 2,
  },
  priceStyleText: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
  },
  viewMoreDetail: {
    marginTop: 10,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMoreDetailText: {
    fontSize: 14,
    fontWeight: '500',
  },
  orderInformation: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  numberProduct: {
    alignItems: 'flex-start',
    flex: 1,
  },
  total: {
    flex: 1,
    alignItems: 'flex-end',
  },
  footer: {
    flex: 0.5,
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    width: '30%',
  },
});

export default OrderItemStyles;

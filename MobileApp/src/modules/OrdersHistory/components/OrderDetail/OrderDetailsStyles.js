import {StyleSheet} from 'react-native';
import {Colors} from '../../../../components/GlobalStyle';

const OrderDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 10,
  },
  orderStatus: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderStatusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  gratitudeText: {
    color: 'white',
  },
  formatColumnOrderInfor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  totalOrder: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'white',
  },
  totalTextFormat: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  labelFooter: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
  },
  totalPrice: {
    color: '#fb5607',
    fontSize: 15,
    fontWeight: '500',
  },
  orderInfor: {
    marginTop: 5,
    backgroundColor: 'white',
    elevation: 6,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  buttonRate: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 5,
  },
  buttonBuyAgain: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
});

export default OrderDetailsStyles;

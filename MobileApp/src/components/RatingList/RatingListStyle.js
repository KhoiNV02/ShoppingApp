import {StyleSheet} from 'react-native';

import {Colors} from '../GlobalStyle';

export default styles = StyleSheet.create({
  touchableShowMore: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  textShowMore: {
    fontWeight: '500',
    color: Colors.PrimaryColor,
    fontSize: 16,
  },
  iconShowmore: {
    width: 18,
    height: 18,
    transform: [{rotate: '90deg'}],
    marginLeft: 5,
  },
  viewNoFeedback: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  textNoFeedBack: {
    textAlign:'center',
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
  },
  iconFeedBack: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

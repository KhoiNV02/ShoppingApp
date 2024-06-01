import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  viewShortcut: {
    backgroundColor: 'white',
    width: '60%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  viewTouchable: {
    width: '20%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '70%',
    height: '70%',
  },
  title: {
    fontSize: 11,
    marginTop: 5,
    color: 'black',
  },
});

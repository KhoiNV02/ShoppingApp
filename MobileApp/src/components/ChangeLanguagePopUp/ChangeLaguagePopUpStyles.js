import {StyleSheet} from 'react-native';

const ChangeLaguagePopUpStyles = StyleSheet.create({
  outer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressArea: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  inner: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    padding: 10,
  },
  header: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
    marginVertical: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 10,
  },
  buttonActions: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '46%',
  },
});

export default ChangeLaguagePopUpStyles;

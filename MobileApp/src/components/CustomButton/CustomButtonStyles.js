import {StyleSheet} from 'react-native';
import {Colors} from '../GlobalStyle';

const CustomButtonStyles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    marginVertical: '2%',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.PrimaryColor,
    paddingVertical: '3%',
    width: '100%',
    borderWidth: 3,
    borderColor: Colors.PrimaryColor,
    justifyContent: 'center',
    borderRadius: 5,
  },
  lightButton: {
    backgroundColor: 'white',
  },
  noBackgroundButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  nonActive: {
    opacity: 0.3,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default CustomButtonStyles;

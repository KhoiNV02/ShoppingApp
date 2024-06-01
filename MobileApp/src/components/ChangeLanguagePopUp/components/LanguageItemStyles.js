import {StyleSheet} from 'react-native';

const LanguageItemStyles = StyleSheet.create({
  languageBox: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  language: {
    fontSize: 14,
    color: 'black',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#00a6fb',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedRadio: {
    backgroundColor: '#00a6fb',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});

export default LanguageItemStyles;

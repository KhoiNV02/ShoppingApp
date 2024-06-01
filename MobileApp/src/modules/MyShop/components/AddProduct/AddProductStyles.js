import {StyleSheet} from 'react-native';

import {Colors} from '../../../../components/GlobalStyle';

const NewProductStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    flex: 1,
  },
  buttonBack: {
    width: '25%',
  },
  titleScreen: {
    marginBottom: 15,
  },
  form: {},
  addingImageForm: {
    flex: 1,
  },
  addMoreButtonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  addMoreButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    marginRight: 3,
  },
  addMoreButtonTitle: {
    fontSize: 14,
    color: Colors.PrimaryColor,
    fontWeight: '600',
    marginRight: 5,
  },
  addMoreButtonIcon: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSubmit: {},
});

export default NewProductStyles;

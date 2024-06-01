import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  iconStar: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  viewContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  viewItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
  },
  viewImageAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProduct: {
    width: '15%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    marginRight: 10,
  },
  textName: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
  },
  listStar: {
    justifyContent: 'space-evenly',
    flex: 1,
    marginBottom: 10,
  },
  descriptionLevelStar: {
    alignSelf: 'center',
    fontStyle: 'italic',
  },
  descriptionInput: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  textLimitCharacter: {
    fontStyle: 'italic',
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

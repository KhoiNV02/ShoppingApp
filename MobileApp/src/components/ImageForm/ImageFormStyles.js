import {StyleSheet} from 'react-native';

const ImageFormStyles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  imgBox: {
    flex: 1,
    marginRight: '5%',
  },
  image: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  descriptionBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
  },
  descriptInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    flex: 1,
    fontSize: 14,
    width: '100%',
    textAlignVertical: 'bottom',
    flex: 1,
    maxWidth: '100%',
  },
  descriptTitle: {
    color: 'black',
    marginRight: 10,
    fontSize: 17,
  },
});

export default ImageFormStyles;

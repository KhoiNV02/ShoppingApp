import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  iconStar: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  viewContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    flex: 1,
  },
  viewNameAndDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  textName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  textDate: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  textDescription: {
    color: 'black',
    marginTop: 5,
    fontSize: 16,
  },
});

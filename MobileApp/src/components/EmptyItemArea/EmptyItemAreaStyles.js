import {StyleSheet} from 'react-native';

import {Colors} from '../GlobalStyle';

const EmptyItemAreaStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    height: '40%',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  imgBox: {
    flex: 2,
    aspectRatio: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  decorateItems: {
    position: 'absolute',
    width: '40%',
    height: 90,
    left: 0,
  },
  decorateItem: {
    position: 'absolute',
    height: 3.5,
    opacity: 0.4,
    borderRadius: 8,
    backgroundColor: Colors.PrimaryColor,
  },
  decorateItem1: {
    right: 10,
    bottom: 35,
    width: 33,
  },
  decorateItem2: {
    right: 3,
    bottom: 34,
    width: 20,
  },
  decorateItem3: {
    right: -2,
    bottom: 24,
    width: 35,
  },
  img: {
    width: '60%',
    height: '60%',
  },
  contentBox: {
    marginTop: 5,
    justifyContent: 'flex-end',
  },
  contentText: {
    textAlign: 'center',
  },
  contentTextAbove: {
    fontWeight: '600',
    color: 'black',
  },
  actionBox: {
    marginTop: 5,
    justifyContent: 'flex-start',
    width: '35%',
  },
});

export default EmptyItemAreaStyles;

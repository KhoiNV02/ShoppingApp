import {Dimensions} from 'react-native';
import {memo} from 'react';

import TitleUI from './TitleUI';

const {width, height} = Dimensions.get('window');

const Title = ({children, small}) => {
  let fontSize = Math.min(width, height) * 0.06;

  if (small) {
    fontSize *= 0.06 / 0.08;
  }

  return <TitleUI fontSize={fontSize}>{children}</TitleUI>;
};

export default memo(Title);

import {Text} from 'react-native';

import TitleStyles from './TitleStyles';

function TitleUI({children, fontSize}) {
  return (
    <Text numberOfLines={2} style={[TitleStyles.title, {fontSize}]}>
      {children}
    </Text>
  );
}

export default TitleUI;

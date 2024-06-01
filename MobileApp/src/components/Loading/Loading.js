import {View, ActivityIndicator} from 'react-native';

import LoadingStyles from './LoadingStyles';

function Loading() {

  return (
    <View style={LoadingStyles.loading}>
      <ActivityIndicator size="large" color={'#ffffff'} />
    </View>
  );
}

export default Loading;

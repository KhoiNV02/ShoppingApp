import {Text, View, Image, TouchableOpacity} from 'react-native';

import HomeShortcutButtonStyle from './HomeShortcutButtonStyle';

export default HomeShortcutButtonUI = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={HomeShortcutButtonStyle.viewTouchable}>
      <View style={HomeShortcutButtonStyle.viewShortcut}>
        <Image style={HomeShortcutButtonStyle.icon} source={icon}></Image>
      </View>
      <Text style={HomeShortcutButtonStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};

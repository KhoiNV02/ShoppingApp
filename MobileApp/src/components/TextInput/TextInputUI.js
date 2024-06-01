import {Text, View, TextInput,} from 'react-native';

import TextInputStyle from './TextInputStyle';

export default TextInputUI = ({title, placeholder,props}) => {

  return (
    <View
      style={TextInputStyle.viewInput}>
      <Text style={TextInputStyle.title}>{title}</Text>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={[TextInputStyle.textInput]}></TextInput>
    </View>
  );
};

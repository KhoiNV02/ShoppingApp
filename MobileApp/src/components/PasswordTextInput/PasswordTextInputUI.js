import {Text, View, Image, TextInput,Pressable} from 'react-native';
import {useState} from 'react';

import PasswordTextInputStyle from './PasswordTextInputStyle';

export default PasswordTextInputUI = ({title, placeholder,props}) => {
  const [show, setShow] = useState(true);

  return (
    <View style={PasswordTextInputStyle.viewInput}>
      <Text style={PasswordTextInputStyle.title}>{title}</Text>
      <View style={[PasswordTextInputStyle.viewTextInput]}>
        <TextInput
          {...props}
          keyboardType="ascii-capable"
          secureTextEntry={show}
          placeholder={placeholder}
          style={PasswordTextInputStyle.textInput}></TextInput>
        <Pressable
          onPress={() => {
            setShow(!show);
          }}>
          {show ? (
            <Image
              style={PasswordTextInputStyle.icon}
              source={require('../../assets/Icon/eye-crossed.png')}></Image>
          ) : (
            <Image
              style={PasswordTextInputStyle.icon}
              source={require('../../assets/Icon/eye.png')}></Image>
          )}
        </Pressable>
      </View>
    </View>
  );
};

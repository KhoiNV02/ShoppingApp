import {View, Text, Pressable, Dimensions} from 'react-native';
import {memo} from 'react';

import {Colors} from '../GlobalStyle';
import CustomButtonStyles from './CustomButtonStyles';

function CustomButton({
  children,
  lightButton,
  noBackgroundButton,
  nonActive,
  onPress,
}) {
  const pressHandler = () => {
    if (onPress && !nonActive && !noBackgroundButton) onPress();
    else () => {};
  };

  const {width, height} = Dimensions.get('window');
  let fontSize = Math.min(width, height) * 0.05;

  const buttonInnerContainerStyle = [
    CustomButtonStyles.buttonInnerContainer,
    lightButton && CustomButtonStyles.lightButton,
    noBackgroundButton && CustomButtonStyles.noBackgroundButton,
    nonActive && CustomButtonStyles.nonActive,
  ];

  return (
    <View style={CustomButtonStyles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed && !nonActive && !noBackgroundButton
            ? [buttonInnerContainerStyle, CustomButtonStyles.pressed]
            : buttonInnerContainerStyle
        }
        onPress={pressHandler}>
        <Text
          onPress={noBackgroundButton ? onPress : null}
          style={[
            CustomButtonStyles.buttonText,
            fontSize,
            lightButton && {color: Colors.PrimaryColor},
            noBackgroundButton && {
              color: 'grey',
              textAlign: 'left',
              alignSelf: 'flex-start',
            },
          ]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default memo(CustomButton);

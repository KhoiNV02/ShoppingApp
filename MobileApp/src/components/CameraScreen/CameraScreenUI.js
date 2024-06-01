import {View, Text, TouchableOpacity} from 'react-native';

import {Camera} from 'react-native-vision-camera';

import Loading from '../Loading/Loading';
import CameraScreenStyles from './CameraScreenStyles';

function CameraScreenUI({
  camera,
  device,
  isTakePhotoLoading,
  handleTurnOffCamera,
  handleTakePhoto,
}) {
  return (
    <View style={CameraScreenStyles.container}>
      <Camera
        ref={camera}
        style={CameraScreenStyles.camera}
        device={device}
        isActive={true}
        photo={true}
      />

      <View style={CameraScreenStyles.closeButton}>
        <Text
          style={CameraScreenStyles.closeButtonTitle}
          onPress={handleTurnOffCamera}>
          ✖
        </Text>
      </View>
      {isTakePhotoLoading ? (
        <Loading />
      ) : (
        <TouchableOpacity
          style={CameraScreenStyles.captureButton}
          onPress={handleTakePhoto}
        />
      )}
    </View>
  );
}

export default CameraScreenUI;

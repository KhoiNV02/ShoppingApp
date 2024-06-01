import {StyleSheet} from 'react-native';

const CameraScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  camera: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonTitle: {
    fontSize: 25,
    color: 'white',
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default CameraScreenStyles;

import React, {useState, useRef} from 'react';

import {useCameraDevice} from 'react-native-vision-camera';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import CameraScreenUI from './CameraScreenUI';

function CameraScreen({setCameraActive, setImage}) {
  const [isTakePhotoLoading, setTakePhotoLoading] = useState(false);

  const device = useCameraDevice('back');
  const camera = useRef();

  const handleTurnOffCamera = () => {
    setCameraActive(false);
  };
  const handleTakePhoto = async () => {
    try {
      setTakePhotoLoading(true);
      const photo = await camera.current.takePhoto();
      await CameraRoll.save(`file://${photo.path}`, {
        type: 'photo',
      });
     
      setImage(`file://${photo.path}`);
    } catch (error) {
      console.error('Error capturing or saving photo to Camera Roll:', error);
    } finally {
      setTakePhotoLoading(false);
      setCameraActive(false);
    }
  };
  return (
    <CameraScreenUI
      camera={camera}
      device={device}
      isTakePhotoLoading={isTakePhotoLoading}
      handleTurnOffCamera={handleTurnOffCamera}
      handleTakePhoto={handleTakePhoto}
    />
  );
}

export default CameraScreen;

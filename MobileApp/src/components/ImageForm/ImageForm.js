import React, {useState, useEffect, memo} from 'react';

import {useSelector} from 'react-redux';
import {Camera} from 'react-native-vision-camera';

import i18n from '../../common/utils/multiLanguages/multilanguages';
import ImageFormUI from './ImageFormUI';

function ImageForm({
  setCameraActive,
  img,
  imgDescription,
  onImageDescriptionChange,
  onDeleteImageForm,
  formIndex,
}) {
  const [imageDescriptInput, setImageDescriptInput] = useState(imgDescription);
  i18n.locale = useSelector(state => state.language.language);
  useEffect(() => {
    setImageDescriptInput(imgDescription);
  }, [imgDescription]);

  const handleTurnOnCamera = async () => {
    await Camera.requestCameraPermission();
    setCameraActive(formIndex);
  };

  const handleInputAndSaveDescript = text => {
    setImageDescriptInput(text);
    onImageDescriptionChange(formIndex, text);
  };

  const handleDeleteImageForm = () => {
   onDeleteImageForm(formIndex);
  };
  return (
    <ImageFormUI
      img={img}
      imageDescriptInput={imageDescriptInput}
      handleTurnOnCamera={handleTurnOnCamera}
      handleInputAndSaveDescript={handleInputAndSaveDescript}
      handleDeleteImageForm={handleDeleteImageForm}
    />
  );
}

export default memo(ImageForm);

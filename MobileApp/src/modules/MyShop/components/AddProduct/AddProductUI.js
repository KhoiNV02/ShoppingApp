import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import CustomButton from '../../../../components/CustomButton/CustomButton';
import TextInputCustom from '../../../../components/TextInput/TextInput';
import ImageForm from '../../../../components/ImageForm/ImageForm';
import CameraScreen from '../../../../components/CameraScreen/CameraScreen';

import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import NewProductStyles from './AddProductStyles';
function NewProductUI({
  isAddingLoading,
  productName,
  setProductName,
  productDescript,
  setProductDescript,
  productPrice,
  handlePriceChange,
  imgForms,
  setCameraActive,
  handleDeleteImage,
  handleDescriptionChange,
  handleSaveImageForm,
  handleAddNewProduct,
  handleSetImage,
  cameraActive,
}) {
  return (
    <>
      {isAddingLoading && <Loading />}
      <SafeAreaView style={NewProductStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={NewProductStyles.form}>
            <TextInputCustom
              title={i18n.t('Product name')}
              value={productName}
              onChangeText={setProductName}
              placeholder={i18n.t('Your product name')}
            />
            <TextInputCustom
              title={i18n.t('Product description')}
              value={productDescript}
              onChangeText={setProductDescript}
              placeholder={i18n.t('Your product description')}
            />
            <TextInputCustom
              title={i18n.t('Product Price')}
              value={productPrice}
              keyboardType="numeric"
              onChangeText={handlePriceChange}
              placeholder={i18n.t('Your product price')}
            />
          </View>
          <View style={NewProductStyles.addingImageForm}>
            {imgForms.map((item, index) => {
              return (
                <ImageForm
                  key={index}
                  formIndex={index}
                  setCameraActive={setCameraActive}
                  img={item.image}
                  onDeleteImageForm={handleDeleteImage}
                  imgDescription={item.description}
                  onImageDescriptionChange={handleDescriptionChange}
                />
              );
            })}

            <View style={NewProductStyles.addMoreButtonBox}>
              <TouchableOpacity onPress={handleSaveImageForm}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={NewProductStyles.addMoreButtonTitle}>
                    {i18n.t('Add new photo')}
                  </Text>
                  <View style={NewProductStyles.addMoreButtonIcon}>
                    <Image
                      style={{width: 12, height: 12}}
                      source={require('../../../../assets/Icon/plus.png')}></Image>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={NewProductStyles.buttonSubmit}>
          <CustomButton onPress={handleAddNewProduct}>
            {i18n.t('Submit')}
          </CustomButton>
        </View>
      </SafeAreaView>
      {typeof cameraActive === 'number' && (
        <CameraScreen
          setCameraActive={setCameraActive}
          setImage={handleSetImage}
        />
      )}
    </>
  );
}

export default NewProductUI;

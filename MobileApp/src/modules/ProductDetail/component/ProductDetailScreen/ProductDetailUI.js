import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

import ProductDetailStyle from './ProductDetailStyle';
import Title from '../../../../components/Title/Title';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import VNDFormat from '../../../../common/utils/formatCurrency/VNDFormat';
import PurchaseConfirmationPopup from '../../../../components/PurchaseConfirmationPopup/PurchaseConfirmationPopup';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import RatingList from '../../../../components/RatingList/RatingList';

function ProductDetailUI({
  productInfor,
  refreshing,
  onRefresh,
  setActivePopUp,
  activePopUp,
  activeImg,
  setActiveImg,
  shoes,
  fullDescriptDisplay,
  setFullDescriptDisplay,
}) {
  const renderItem = ({item, index}) => (
    <View style={ProductDetailStyle.bodyProductDetail}>
      <View style={ProductDetailStyle.viewNameProduct}>
        <View style={ProductDetailStyle.productName}>
          <Title small={true}>{item.productName}</Title>
          <View style={ProductDetailStyle.viewIconAndNumber}>
            <Text style={ProductDetailStyle.textAvgRating}>
              {item.avgRating.toFixed(1)}
            </Text>
            <Image
              style={ProductDetailStyle.iconAvgRating}
              source={require('../../../../assets/Icon/star.png')}></Image>
          </View>
        </View>

        <View>
          <Image
            style={ProductDetailStyle.mainImage}
            source={{
              uri: activeImg.url,
            }}
          />
          <Text style={ProductDetailStyle.activeImgDescript}>
            {activeImg.descript}
          </Text>
        </View>

        <View style={ProductDetailStyle.imgSlider}>
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal
            data={shoes}
            renderItem={({item, index}) => (
              <Pressable
                key={index}
                onPress={() => {
                  setActiveImg({
                    id: index,
                    url: item.imageUrl,
                    descript: item.imageDescription,
                  });
                }}>
                <Image
                  key={index}
                  style={[
                    ProductDetailStyle.imgSliderUnit,
                    activeImg.id === index && ProductDetailStyle.activeImg,
                  ]}
                  source={{uri: item.imageUrl}}
                />
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={ProductDetailStyle.viewShopOwner}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../../../../assets/Icon/store.png')}></Image>
        <Text style={ProductDetailStyle.textNameOwner}>{item.username}</Text>
      </View>
      <View style={ProductDetailStyle.viewDescription}>
        <Text style={ProductDetailStyle.textDescription}>
          {i18n.t('Description')}
        </Text>
        <View style={ProductDetailStyle.productDescriptBox}>
          <Text
            numberOfLines={fullDescriptDisplay ? undefined : 5}
            style={ProductDetailStyle.productDescriptText}>
            {item.description}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setFullDescriptDisplay(!fullDescriptDisplay);
            }}
            style={ProductDetailStyle.productDescriptDisplayButton}>
            <Text style={ProductDetailStyle.textShowmore}>
              {fullDescriptDisplay
                ? `${i18n.t('Show less')} `
                : `${i18n.t('Show more')} `}
            </Text>
            <Image
              style={[
                ProductDetailStyle.iconShowmore,
                {
                  transform: [
                    {rotate: fullDescriptDisplay ? '-90deg' : '90deg'},
                  ],
                },
              ]}
              source={require('../../../../assets/Icon/angleright.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={ProductDetailStyle.viewRating}>
        <Text style={ProductDetailStyle.titleRating}>{i18n.t('Rating')}</Text>
        <View style={ProductDetailStyle.viewRatingList}>
          <RatingList productId={item._id} />
        </View>
      </View>
    </View>
  );
  return (
    <>
      <SafeAreaView style={ProductDetailStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[productInfor]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        <View style={ProductDetailStyle.action}>
          <View style={ProductDetailStyle.productPerformance}>
            <View style={ProductDetailStyle.viewIconAndNumber}>
              <Image
                style={ProductDetailStyle.viewIconFooter}
                source={require('../../../../assets/Icon/eyee.png')}></Image>
              <Text style={ProductDetailStyle.numberFooter}>
                {productInfor.viewed}
              </Text>
            </View>
            <View style={ProductDetailStyle.viewIconAndNumber}>
              <Image
                style={ProductDetailStyle.viewIconFooter}
                source={require('../../../../assets/Icon/sold.png')}></Image>
              <Text style={ProductDetailStyle.numberFooter}>
                {productInfor.sold}
              </Text>
            </View>
          </View>
          <View style={ProductDetailStyle.viewPricePurchase}>
            <Text style={ProductDetailStyle.productPriceText}>
              {VNDFormat(productInfor.price)}
            </Text>
            <View style={ProductDetailStyle.buttonBuy}>
              <CustomButton
                onPress={() => {
                  setActivePopUp(true);
                }}>
                {i18n.t('Add to cart')}
              </CustomButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {activePopUp && (
        <PurchaseConfirmationPopup
          productName={productInfor.productName}
          productImage={
            productInfor.imageURL
              ? productInfor.imageURL
              : productInfor.images[0].imageUrl
          }
          setActivePopUp={setActivePopUp}
          productPrice={productInfor.price}
          idProduct={productInfor._id}
          viewed={productInfor.viewed}
          sold={productInfor.sold}
        />
      )}
    </>
  );
}

export default ProductDetailUI;

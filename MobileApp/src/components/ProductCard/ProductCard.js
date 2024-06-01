import {memo} from 'react';

import ProductCardUI from './ProductCardUI';

import {useNavigation} from '@react-navigation/native';

function ProductCard({
  _id,
  flexD,
  productName,
  viewed,
  sold,
  price,
  imageURL,
  description,
  images,
  username,
  avgRating,
}) {
  const navigation = useNavigation();

  const data = {
    _id,
    flexD,
    productName,
    viewed,
    sold,
    price,
    imageURL,
    description,
    images,
    username,
    avgRating,
  };

  const handlePressCard = () => {
    navigation.navigate('ProductDetail', {
      productInforFromProductCard: data,
    });
  };
  return (
    <ProductCardUI
      data={data}
      flexD={flexD}
      onPressCard={handlePressCard}></ProductCardUI>
  );
}

export default memo(ProductCard);

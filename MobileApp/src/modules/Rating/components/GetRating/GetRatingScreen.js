import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import GetRatingItem from '../../../../components/GetRatingItem/GetRatingItem';
import {useEffect, useState} from 'react';
import React from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addNewFeedbackConfig} from '../../../../services/api/ratingService';
import {
  addNewFeedback,
  setRatingStatus,
} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import GetRatingItemStyle from '../../../../components/GetRatingItem/GetRatingItemStyle';
import GetRatingScreenUI from './GetRatingScreenUI';
function GetRatingScreen({navigation, route}) {
  i18n.locale = useSelector(state => state.language.language);
  const ratingDone = useSelector(state => state.product.ratingDone);
  const cartItems = route.params.cartItems;
  const orderId = route.params.orderId;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState(
    Array.from({length: cartItems.length}, () => ({
      rating: 5,
      description: '',
    })),
  );

  function onChangeDesCription(num, value) {
    setData(prev => {
      prev[num].description = value;
      return prev;
    });
  }

  function onChangeRating(num, value) {
    setData(prev => {
      prev[num].rating = value + 1;
      return prev;
    });
  }

  function addFeedBack(orderId, data) {
    setIsLoading;
    const config = addNewFeedbackConfig(orderId, data);
    dispatch(addNewFeedback(config));
  }
  useEffect(() => {
    if (ratingDone) {
      navigation.goBack();
    }
  }, [ratingDone]);
  function handleAddFeedback() {
    setIsLoading(true);
    dispatch(setRatingStatus(i18n.t('Completed')));
    addFeedBack(orderId, data);
  }

  return (
    <GetRatingScreenUI
      data={data}
      cartItems={cartItems}
      handleAddFeedback={handleAddFeedback}
      isLoading={isLoading}
      onChangeDesCription={onChangeDesCription}
      onChangeRating={onChangeRating}
    />
  );
}

export default GetRatingScreen;

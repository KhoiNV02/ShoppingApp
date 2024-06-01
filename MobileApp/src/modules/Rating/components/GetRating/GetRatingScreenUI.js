import {FlatList, SafeAreaView, View} from 'react-native';

import { useSelector} from 'react-redux';

import GetRatingItem from '../../../../components/GetRatingItem/GetRatingItem';
import React from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import GetRatingScreenStyle from './GetRatingScreenStyle';
function GetRatingScreenUI({data,cartItems,handleAddFeedback,isLoading,onChangeDesCription,onChangeRating}) {
  i18n.locale = useSelector(state => state.language.language);
  

  const Item = ({item, index, cartItem}) => (
    <GetRatingItem
      order={item}
      num={index}
      onChangeText={onChangeDesCription}
      onChangeRating={onChangeRating}
      cartItem={cartItem}
    />
  );

  return (
    <>
      <SafeAreaView style={GetRatingScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <Item cartItem={cartItems[index]} item={item} index={index} />
          )}
          keyExtractor={item => {
            return new Date().getTime().toString() + Math.random().toString();
          }}
        />
        <View style={GetRatingScreenStyle.viewButton}>
          <CustomButton
            onPress={() => {
              handleAddFeedback();
            }}>
            {i18n.t('Submit')}
          </CustomButton>
        </View>
      </SafeAreaView>
      {isLoading && <Loading />}
    </>
  );
}

export default GetRatingScreenUI;

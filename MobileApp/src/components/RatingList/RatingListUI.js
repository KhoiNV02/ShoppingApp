import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { useSelector} from 'react-redux';

import RatingItem from '../RatingItem/RatingItem';
import RatingListStyle from './RatingListStyle';
import i18n from '../../common/utils/multiLanguages/multilanguages';

export default RatingListUI = ({
  feedbacks,
  isLoading,
  getData,
  totalFeedback,
}) => {
  i18n.locale = useSelector(state => state.language.language);

  const Item = ({item, index}) => <RatingItem rating={item}></RatingItem>;

  return (
    <>
      {feedbacks.length != 0 ? (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={feedbacks}
            renderItem={({item, index}) => <Item item={item} index={index} />}
            keyExtractor={item => item._id}
          />
          {feedbacks.length != totalFeedback ? (
            isLoading ? (
              <ActivityIndicator style={{marginVertical: 20}} />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  getData();
                }}
                style={RatingListStyle.touchableShowMore}>
                <Text style={RatingListStyle.textShowMore}>
                  {i18n.t('Show more')}
                </Text>
                <Image
                  style={RatingListStyle.iconShowmore}
                  source={require('../../assets/Icon/angleright.png')}></Image>
              </TouchableOpacity>
            )
          ) : (
            <View style={RatingListStyle.viewNoFeedback}>
              <Text style={RatingListStyle.textNoFeedBack}>
                {i18n.t('No more reviews available')}
              </Text>
              <Image
                style={RatingListStyle.iconFeedBack}
                source={require('../../assets/Icon/feedback.png')}></Image>
            </View>
          )}
        </View>
      ) : (
        <View style={{alignItems: 'center', paddingVertical: 20}}>
          <Text style={RatingListStyle.textNoFeedBack}>
            {i18n.t('Empty rating')}
          </Text>
          <Image
            style={RatingListStyle.iconFeedBack}
            source={require('../../assets/Icon/feedback.png')}></Image>
        </View>
      )}
    </>
  );
};

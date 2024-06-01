import {Text, View, Image,FlatList} from 'react-native';

import RatingItemStyle from './RatingItemStyle';

export default RatingItemUI = ({rating}) => {
  
    const Item = ({index}) => (
    <View>
      <Image
        style={RatingItemStyle.iconStar}
        source={
          index < rating.rating
            ? require('../../assets/Icon/star.png')
            : require('../../assets/Icon/star_grey.png')
        }></Image>
    </View>
  );

  return (
    <View style={RatingItemStyle.viewContainer}>
      <View style={RatingItemStyle.viewNameAndDate}>
        <Text style={RatingItemStyle.textName}>{rating.user.username}</Text>
        <Text style={RatingItemStyle.textDate}>
          {new Date(rating.dateCreate).toLocaleDateString('vi-VN')}
        </Text>
      </View>
      <FlatList
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => <Item index={index} />}
        keyExtractor={item => item}
      />
      {rating.description != '' ? (
        <Text style={RatingItemStyle.textDescription}>{rating.description}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

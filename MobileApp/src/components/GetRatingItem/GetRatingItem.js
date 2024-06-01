import {useState} from 'react';
import { memo } from 'react';

import {useSelector} from 'react-redux';

import i18n from '../../common/utils/multiLanguages/multilanguages';
import GetRatingItemUI from './GetRatingItemUI';

function GetRatingItem({cartItem, order, num, onChangeText, onChangeRating}) {
  i18n.locale = useSelector(state => state.language.language);
  const ratingDes = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];
  const [description, setDescription] = useState(order.description);
  const [rating, setRating] = useState(order.rating);
  const [temp, setTemp] = useState(order.description);

  function handlePressStar(value) {
    setRating(value + 1);
    onChangeRating(num, value);
  }

  function handleChangeText(value) {
    setTemp(value);
    onChangeText(num, value);
  }
  return (
    <GetRatingItemUI
      cartItem={cartItem}
      onPressStar={handlePressStar}
      onChangeText={handleChangeText}
      ratingDes={ratingDes}
      defaultDescription={description}
      rating={rating}
      i18n={i18n}
      temp={temp}></GetRatingItemUI>
  );
}

export default memo(GetRatingItem);


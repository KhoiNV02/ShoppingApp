import {useEffect, useState} from 'react';
import {memo} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {
  getFeedbacksByProductId,
  resetFeedBacks,
} from '../../store/actions/actions';
import {getFeedbacksByProductIdConfig} from '../../services/api/ratingService';
import RatingListUI from './RatingListUI';

function RatingList({productId}) {
  const feedbacks = useSelector(state => state.product.Feedbacks);
  const totalFeedback = useSelector(state => state.product.totalFeedback);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  function fetchData(skip, limit) {
    const config = getFeedbacksByProductIdConfig(productId, skip, limit);
    dispatch(getFeedbacksByProductId(config));
  }

  async function getData() {
    setIsLoading(true);
    if (feedbacks.length < totalFeedback || totalFeedback == 0) {
      await fetchData(feedbacks.length, 5);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if (feedbacks.length == 0) {
      getData();
    }
    return () => {
      dispatch(resetFeedBacks());
    };
  }, []);

  return (
    <RatingListUI
      feedbacks={feedbacks}
      getData={getData}
      isLoading={isLoading}
      totalFeedback={totalFeedback}></RatingListUI>
  );
}

export default memo(RatingList);

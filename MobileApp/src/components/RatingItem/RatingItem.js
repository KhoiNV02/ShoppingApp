import {memo} from 'react';

import RatingItemUI from './RatingItemUI';

function RatingItem({rating}) {
  return <RatingItemUI rating={rating}></RatingItemUI>;
}

export default memo(RatingItem);

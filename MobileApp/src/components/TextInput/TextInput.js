import { memo } from 'react';

import TextInputUI from './TextInputUI';

function  TextInputCustom({title, placeholder, ...props}) {
  return (
    <TextInputUI
      title={title}
      placeholder={placeholder}
      props={props}></TextInputUI>
  );
}

export default memo(TextInputCustom);

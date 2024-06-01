import { memo } from 'react';

import PasswordTextInputUI from './PasswordTextInputUI';

function PasswordTextInputCustom({
  title,
  placeholder,
  ...props
}) {
  return (
    <PasswordTextInputUI
      title={title}
      placeholder={placeholder}
      props={props}></PasswordTextInputUI>
  );
}

export default memo(PasswordTextInputCustom);

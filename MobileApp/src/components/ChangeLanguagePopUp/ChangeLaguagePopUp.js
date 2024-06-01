import {useState} from 'react';

import {useDispatch} from 'react-redux';
import i18n from '../../common/utils/multiLanguages/multilanguages';

import ToastMessage from '../Toast/Toast';
import {changeLanguage} from '../../store/actions/actions';
import ChangeLanguagePopUpUI from './ChangeLaguagePopUpUI';

function ChangeLanguagePopUp({setActive}) {
  const Languages = [
    {id: 'vi', text: 'Tiếng Việt'},
    {id: 'en', text: 'English'},
  ];
  const [isChangeLoading, setIsChangeLoading] = useState(false);
  const [selectedLanguageId, setSelectedId] = useState(i18n.locale);
  const dispatch = useDispatch();
  const closePopUp = () => {
    setActive(false);
  };
  const handleChangeLanguage = () => {
    closePopUp();
    dispatch(changeLanguage(selectedLanguageId));
    i18n.locale = selectedLanguageId;
    ToastMessage({message: i18n.t('Change Language Success')});
  };
  return (
      <ChangeLanguagePopUpUI
        closePopUp={closePopUp}
        Languages={Languages}
        selectedLanguageId={selectedLanguageId}
        setSelectedLanguageId={setSelectedId}
        handleChangeLanguage={handleChangeLanguage}
      />
  );
}

export default ChangeLanguagePopUp;

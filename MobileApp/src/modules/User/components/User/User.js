import {
  Alert,
} from 'react-native';
import {useState} from 'react';

import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import UserUI from './UserUI';

export default function UserScreen() {
  i18n.locale = useSelector(state => state.language.language);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  const user = useSelector(state => state.login.user);
  const HandleLogout = async () => {
    Alert.alert(
      i18n.t('Logout confirm'),
      i18n.t('Logout confirm text'),
      [
        {text: i18n.t('Cancel')},
        {
          text: i18n.t('OK'),
          onPress: () => {
            dispatch(logout());
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onPressPurchaseHistory = () => {
    navigation.navigate('purchaseHistory');
  };
  return (
    <UserUI
      user={user}
      onPressPurchaseHistory={onPressPurchaseHistory}
      setActive={setActive}
      active={active}
      HandleLogout={HandleLogout}
    />
  );
}

import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  RefreshControl,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import ProductList from '../../../../components/ProductList/ProductList';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from '../../../../components/Title/Title';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {getHomeProductConfig} from '../../../../services/api/homeProductServices';
import {getHomeProduct, getProductByUserId} from '../../../../store/actions/actions';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import {
  GET_ALL_BESTSELLERS_SUCCESS,
  GET_ALL_MOSTEXPENSIVE_SUCCESS,
  GET_ALL_MOSTVIEWED_SUCCESS,
  GET_ALL_RECENTLYADDED_SUCCESS,
  GET_BESTSELLERS_SUCCESS,
  GET_MOSTEXPENSIVE_SUCCESS,
  GET_MOSTVIEWED_SUCCESS,
  GET_RECENTLYADDED_SUCCESS,
} from '../../../../store/actions/types';
import {useIsFocused} from '@react-navigation/native';
import {Colors} from '../../../../components/GlobalStyle';
import HomeShortcutButton from '../../../../components/HomeShortcutButton/HomeShortcutButton';
import {getCartItemByUserId} from '../../../../store/actions/actions';
import {getCartItemByUserIdConfig} from '../../../../services/api/cartItemServices';
import HomeStyle from './HomeStyle';
import HomeScreenUI from './HomeUI';
import { getProductByUserIdConfig } from '../../../../services/api/productServices';

function HomeScreen({navigation}) {
  i18n.locale = useSelector(state => state.language.language);
  const [stateTime, setStateTime] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const bestsellersData = useSelector(state => state.homeProduct.bestsellers);
  const mostviewedData = useSelector(state => state.homeProduct.mostviewed);
  const recentlyaddedData = useSelector(
    state => state.homeProduct.recentlyadded,
  );
  const mostexpensiveData = useSelector(
    state => state.homeProduct.mostexpensive,
  );
  const userId = useSelector(state => state.login._id);
  const [refreshing, setRefreshing] = useState(false);

  var today = new Date();
  const getStateTime = () => {
    var curHr = today.getHours();
    if (curHr >= 5 && curHr < 12) {
      setStateTime(i18n.t('Good morning'));
    } else if (curHr >= 12 && curHr < 17) {
      setStateTime(i18n.t('Good afternoon'));
    } else {
      setStateTime(i18n.t('Good evening'));
    }
  };
  useEffect(() => {
    getStateTime();
  }, [today]);
  useEffect(() => {
    async function fetchData() {
      const user = await AsyncStorage.getItem('user');
      setUsername(user);
    }
    fetchData();
  }, []);

  function fetchData(sorting, skip, limit, category) {
    const config = getHomeProductConfig(sorting, skip, limit);
    dispatch(getHomeProduct(config, category));
  }

  function fetchCartData(userId) {
    const config = getCartItemByUserIdConfig(userId);
    dispatch(getCartItemByUserId(config));
  }

  useEffect(() => {
    fetchData('sold:desc', 0, 5, GET_BESTSELLERS_SUCCESS);
    fetchData('viewed:desc', 0, 5, GET_MOSTVIEWED_SUCCESS);
    fetchData('createDate:desc', 0, 5, GET_RECENTLYADDED_SUCCESS);
    fetchData('price:desc', 0, 5, GET_MOSTEXPENSIVE_SUCCESS);
    fetchCartData(userId);
  }, []);

  const reFresh = () => {
    fetchData('sold:desc', 0, 5, GET_BESTSELLERS_SUCCESS);
    fetchData('viewed:desc', 0, 5, GET_MOSTVIEWED_SUCCESS);
    fetchData('createDate:desc', 0, 5, GET_RECENTLYADDED_SUCCESS);
    fetchData('price:desc', 0, 5, GET_MOSTEXPENSIVE_SUCCESS);
    fetchCartData(userId);
    setRefreshing(false);
  };

  const onRefresh = () => {
    setRefreshing(true);
    reFresh();
  };
  const pressBestSeller = () => {
    navigation.navigate('bestSellerProduct', {
      title: i18n.t('Best sellers'),
      data: GET_ALL_BESTSELLERS_SUCCESS,
    });
  };

  const pressMostView = () => {
    navigation.navigate('mostViewedProduct', {
      title: i18n.t('Most viewed'),
      data: GET_ALL_MOSTVIEWED_SUCCESS,
    });
  };

  const pressRecentlyAdded = () => {
    navigation.navigate('recentlyAddedProduct', {
      title: i18n.t('Recently added'),
      data: GET_ALL_RECENTLYADDED_SUCCESS,
    });
  };

  const pressMostExpensive = () => {
    navigation.navigate('mostExpensiveProduct', {
      title: i18n.t('Most expensive'),
      data: GET_ALL_MOSTEXPENSIVE_SUCCESS,
    });
  };

  const pressSearch = () => {
    navigation.navigate('searchScreen');
  };
  return (
    <HomeScreenUI
      stateTime={stateTime}
      username={username}
      refreshing={refreshing}
      onRefresh={onRefresh}
      pressSearch={pressSearch}
      pressBestSeller={pressBestSeller}
      pressMostExpensive={pressMostExpensive}
      pressMostView={pressMostView}
      pressRecentlyAdded={pressRecentlyAdded}
      bestsellersData={bestsellersData}
      mostexpensiveData={mostexpensiveData}
      mostviewedData={mostviewedData}
      recentlyaddedData={recentlyaddedData}
    />
  );
}
export default HomeScreen;

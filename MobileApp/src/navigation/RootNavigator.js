import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import AppTabsNavigator from './AppTabsNavigator/AppTabsNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import LoginScreen from '../modules/Auth/components/LogInScreen/LoginScreen';
import SignupScreen from '../modules/Auth/components/SignUpScreen/SignupScreen';
import {View, Text, TextInput} from 'react-native';
import {init as initFunc} from '../store/utils';
import BestSellerProduct from '../modules/Home/components/ListProduct/BestSellerProduct';
import i18n from '../common/utils/multiLanguages/multilanguages';
import ProductDetail from '../modules/ProductDetail/component/ProductDetailScreen/ProductDetail';
import AddProduct from '../modules/MyShop/components/AddProduct/AddProduct';
import MostExpensiveProduct from '../modules/Home/components/ListProduct/MostExpensiveProduct';
import MostViewedProduct from '../modules/Home/components/ListProduct/MostViewedProduct';
import RecentlyAddedProduct from '../modules/Home/components/ListProduct/RecentlyAddedProduct';
import PurchaseHistory from '../modules/OrdersHistory/components/PurchaseHistory/PurchaseHistory';
import OrderDetails from '../modules/OrdersHistory/components/OrderDetail/OrderDetails';
import GetRatingScreen from '../modules/Rating/components/GetRating/GetRatingScreen';
import SearchScreen from '../modules/Search/components/SearchScreen';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  i18n.locale = useSelector(state => state.language.language);
  const user = useSelector(state => state.login.user);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const init = async () => {
    try {
      await initFunc(dispatch);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen
          name={'auth'}
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name={'apptabs'}
            component={AppTabsNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Best sellers'),
              gestureEnabled: true,
            }}
            name="bestSellerProduct"
            component={BestSellerProduct}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Most expensive'),
              gestureEnabled: true,
            }}
            name="mostExpensiveProduct"
            component={MostExpensiveProduct}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Most viewed'),
              gestureEnabled: true,
            }}
            name="mostViewedProduct"
            component={MostViewedProduct}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Recently added'),
              gestureEnabled: true,
            }}
            name="recentlyAddedProduct"
            component={RecentlyAddedProduct}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Product detail'),
              gestureEnabled: true,
            }}
            name="ProductDetail"
            component={ProductDetail}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Add product'),
              gestureEnabled: true,
            }}
            name="addProduct"
            component={AddProduct}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Purchase History'),
              gestureEnabled: true,
            }}
            name="purchaseHistory"
            component={PurchaseHistory}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Order Details'),
              gestureEnabled: true,
            }}
            name="OrderDetails"
            component={OrderDetails}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              title: i18n.t('Rating'),
              gestureEnabled: true,
            }}
            name="Rating"
            component={GetRatingScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              // title: i18n.t('Sea'),
              gestureEnabled: true,
            }}
            name="searchScreen"
            component={SearchScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

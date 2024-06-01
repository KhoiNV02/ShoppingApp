import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLayoutEffect} from 'react';
import {
  getOrdersHistoryByUserId,
  resetOrdersHistory,
} from '../../../../store/actions/actions';
import {getOrdersHistoryByUserIdConfig} from '../../../../services/api/purchaseHistoryServices';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import {ActivityIndicator} from 'react-native';
import PurchaseHistoryItem from './components/PurchaseHistoryItem';
import PurchaseHistoryUI from './PurchaseHistoryUI';
function PurchaseHistory() {
  const [ordersHistoryList, setOrdersHistoryList] = useState([]);
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.language);
  const userId = useSelector(state => state.login._id);
  const isGetOrderLoading = useSelector(
    state => state.purchaseHistory.isGetOrderLoading,
  );
  const ordersHistory = useSelector(
    state => state.purchaseHistory.ordersHistory,
  );

  const isRating = useSelector(state => state.product.isRating);
  const totalOrder = useSelector(state => state.purchaseHistory.totalOrder);

  useEffect(() => {
    if (!isRating) {
      setOrdersHistoryList([]);
      const ordersHistoryConfig = getOrdersHistoryByUserIdConfig(userId, 0, 4);
      dispatch(getOrdersHistoryByUserId(ordersHistoryConfig));
      return () => {
        dispatch(resetOrdersHistory());
      };
    }
  }, [isRating]);

  useLayoutEffect(() => {
    const dataToOrdersHistoryList = ordersHistory.map((item, index) => ({
      orderId: item._id,
      owner: item.cartItems[0].product.user.username,
      status: item.isFeedback ? i18n.t('Completed') : i18n.t('Not Rated Yet'),
      imgUri: item.cartItems[0].product.images[0].imageUrl,
      productName: item.cartItems[0].product.productName,
      OrderQuantity: item.cartItems[0].quantity,
      productPrice: item.cartItems[0].product.price,
      numberOfItemsInOrder: item.cartItems.length,
      totalMoneyOfTheOrder: item.total,
      cartItems: item.cartItems,
      orderTime: item.dateCreate,
    }));
    setOrdersHistoryList([...ordersHistoryList, ...dataToOrdersHistoryList]);
  }, [ordersHistory]);

  const loadMoreData = () => {
    if (ordersHistoryList.length < totalOrder) {
      setSkip(prevSkip => prevSkip + 4);
      const ordersHistoryConfig = getOrdersHistoryByUserIdConfig(
        userId,
        skip + 4,
        4,
      );
      dispatch(getOrdersHistoryByUserId(ordersHistoryConfig));
    }
  };
  const renderFooter = () => {
    return isGetOrderLoading ? (
      <ActivityIndicator style={{marginVertical: 20}} />
    ) : null;
  };

  return (
    <PurchaseHistoryUI
      ordersHistoryList={ordersHistoryList}
      loadMoreData={loadMoreData}
      renderFooter={renderFooter}
    />
  );
}

export default PurchaseHistory;

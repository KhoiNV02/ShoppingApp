import { useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {getProductByUserId} from '../../../../store/actions/actions';
import {getProductByUserIdConfig} from '../../../../services/api/productServices';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';

import MyShopScreenUI from './MyShopUI';

function MyShopScreen({navigation}) {

  i18n.locale = useSelector(state => state.language.language);
  const products = useSelector(state => state.product.products);
  const isSuccess = useSelector(state => state.product.isSuccess);
  const isDeleteLoading = useSelector(state => state.product.isDeleteLoading);
  const userId = useSelector(state => state.login._id);
  const dispatch = useDispatch();
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [totalProducts, setTotalProducts] = useState(products.totalProduct);
  const [skip, setSkip] = useState(9);
  const limit = 9;
  const [Products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isGettingLoading = useSelector(state=>state.product.isLoading);
  useEffect(() => {
    if (isSuccess === true) {
      const newProducts = Products.filter(item => item._id !== deleteProductId);
      setProducts(newProducts);
    }
  }, [isSuccess]);
  
  useEffect(() => {
    const getProductConfig = getProductByUserIdConfig(userId, 0, 9);
    dispatch(getProductByUserId(getProductConfig));
  }, []);

 
  useEffect(() => {
    if (products.data != undefined) {
      setProducts([...Products, ...products.data]);
    }
  }, [products.data]);

  useEffect(() => {
    setTotalProducts(products.totalProduct);
  }, [products.totalProduct]);

  const reFresh = () => {
    const getProductConfig = getProductByUserIdConfig(userId, 0, 9);
    dispatch(getProductByUserId(getProductConfig));
    setSkip(9), setProducts([]);
    setRefreshing(false);
  };
  const fetchData = () => {
    if (Products.length < totalProducts) {
      setSkip(prevSkip => prevSkip + limit);
      const getProductConfig = getProductByUserIdConfig(userId, skip, limit);
      dispatch(getProductByUserId(getProductConfig));
    }
  };

  const loadMoreData = () => {
    fetchData();
  };
  const onRefresh = () => {
    setRefreshing(true);
    reFresh();
  };
  const handleNavigateToAddProduct = () => {
    navigation.navigate('addProduct', {
      reFresh: reFresh,
      userId: userId,
    });
  };
  return (
    <MyShopScreenUI
      handleNavigateToAddProduct={handleNavigateToAddProduct}
      Products={Products}
      loadMoreData={loadMoreData}
      setDeleteProductId={setDeleteProductId}
      isDeleteLoading={isDeleteLoading}
      refreshing={refreshing}
      onRefresh={onRefresh}
      isGettingLoading={isGettingLoading}
    />
  );
}
export default MyShopScreen;

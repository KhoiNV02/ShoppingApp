import {
    ScrollView,
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView,
  } from 'react-native';
  import ProductList from '../../../../components/ProductList/ProductList';
  import {useDispatch, useSelector} from 'react-redux';
  import {useEffect, useState} from 'react';
  import {
    GET_ALL_RECENTLYADDED_SUCCESS,
  } from '../../../../store/actions/types';
  import {getHomeProductConfig} from '../../../../services/api/homeProductServices';
  import {getHomeProduct} from '../../../../store/actions/actions';

  function RecentlyAddedProduct({route, navigation}) {
    const {title} = route.params;
    const dispatch = useDispatch();
    const product = useSelector(state => state.homeProduct.allrecentlyadded);
    const total = useSelector(state => state.homeProduct.totalProduct);
  
    const [isLoading, setIsLoading] = useState(true);
  
    function fetchData(sorting, skip, limit, category) {
      const config = getHomeProductConfig(sorting, skip, limit);
      dispatch(getHomeProduct(config, category));
    }
  
    async function fetchDataCase() {
      if(product.length < total || total == 0)
      {
        await fetchData('dateCreate:desc', product.length, 10, GET_ALL_RECENTLYADDED_SUCCESS);  
      }
    }
  
    useEffect(() => {
      if( product.length > 0 && product.length == total)
      {
        setIsLoading(false);
      }
    }, [product]);
  
    useEffect(() => {
      if( product.length==0)
      {
        fetchDataCase();
      }
    }, []);
  
    return (
      <SafeAreaView style={styles.safeViewContainer}>
        <ProductList data={product} isLoading={isLoading } loadMoreData={fetchDataCase}  horizontal={false}></ProductList>
      </SafeAreaView>
    );
  }
  export default RecentlyAddedProduct;
  
  const styles = StyleSheet.create({
    safeViewContainer: {
      paddingHorizontal: 10,
    },
  });
  
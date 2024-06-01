import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import ProductList from '../../../../components/ProductList/ProductList';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import Loading from '../../../../components/Loading/Loading';
import MyShopScreenStyles from './MyShopStyles';
function MyShopScreenUI({
  handleNavigateToAddProduct,
  Products,
  loadMoreData,
  setDeleteProductId,
  isDeleteLoading,
  refreshing,
  onRefresh,
  isGettingLoading,
}) {
  return (
    <>
      <SafeAreaView style={MyShopScreenStyles.safeViewContainer}>
        <View style={MyShopScreenStyles.viewHeader}>
          <Text style={MyShopScreenStyles.title}>{i18n.t('MyShop')}</Text>
          <TouchableOpacity onPress={handleNavigateToAddProduct}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={MyShopScreenStyles.addProductBtn}>
                {i18n.t('Add product')}
              </Text>
              <View style={MyShopScreenStyles.btnIcon}>
                <Image
                  style={{width: 12, height: 12}}
                  source={require('../../../../assets/Icon/plus.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={[{key: 'productList'}]}
          renderItem={({item}) => (
            <ProductList
              data={Products}
              horizontal={false}
              option={true}
              loadMoreData={loadMoreData}
              setDeleteProductId={setDeleteProductId}
              isLoading={isGettingLoading}
            />
          )}
          keyExtractor={item => item.key}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
      {isDeleteLoading && <Loading />}
    </>
  );
}
export default MyShopScreenUI;

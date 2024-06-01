import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {useSelector} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ProductListStyle from './ProductListStyle';
import i18n from '../../common/utils/multiLanguages/multilanguages';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLoading from '../ProductCardLoading/ProductCardLoading';

export default ProductListUI = ({
  data,
  horizontal,
  loadMoreData,
  option,
  row,
  closeRow,
  closeDeleteRow,
  isLoading,
}) => {
  i18n.locale = useSelector(state => state.language.language);

  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator style={{marginVertical: 20}} />
    ) : null;
  };

  const RightSwipeActions = id => {
    return (
      <View style={ProductListStyle.viewDeleteOption}>
        <TouchableOpacity
          style={ProductListStyle.touchableDeleteOption}
          onPress={() => {
            closeDeleteRow(id);
          }}>
          <Text style={ProductListStyle.textDeleteOption}>
            {i18n.t('Delete')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemWithOption = ({product, index}) => (
    <Swipeable
      ref={ref => (row[index] = ref)}
      renderRightActions={() => {
        return RightSwipeActions(product._id);
      }}
      onSwipeableWillOpen={() => {
        closeRow(index);
      }}>
      <View style={ProductListStyle.viewItem}>
        <ProductCard
          _id={product._id}
          flexD={horizontal ? 'column' : 'row'}
          price={product.price}
          viewed={product.viewed}
          sold={product.sold}
          productName={product.productName}
          imageURL={product.images[0].imageUrl}
          images={product.images}
          description={product.description}
          username={product.user.username}
          avgRating={product.avgRating}
        />
      </View>
    </Swipeable>
  );

  const Item = ({product, index}) => (
    <View
      style={[
        ProductListStyle.viewItem,
        {marginTop: !horizontal && index == 0 ? 10 : 0},
      ]}>
      <ProductCard
        _id={product._id}
        flexD={horizontal ? 'column' : 'row'}
        price={product.price}
        viewed={product.viewed}
        sold={product.sold}
        productName={product.productName}
        imageURL={product.images[0].imageUrl}
        images={product.images}
        description={product.description}
        username={product.user.username}
        avgRating={product.avgRating}
      />
    </View>
  );

  if (isLoading && data.length == 0) {
    return (
      <View
        style={{
          flexDirection: !horizontal ? 'column' : 'row',
          marginBottom: 2,
        }}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <ProductCardLoading key={index} isLandscape={!horizontal} />;
        })}
      </View>
    );
  }
  return (
    <>
      {data.length != 0 ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}
          horizontal={horizontal}
          data={data}
          onEndReachedThreshold={0.4}
          onEndReached={loadMoreData}
          ListFooterComponent={renderFooter}
          renderItem={({item, index}) =>
            option ? (
              <ItemWithOption Item product={item} index={index} />
            ) : (
              <Item product={item} index={index} />
            )
          }
          keyExtractor={item => item._id}
        />
      ) : (
        <Text style={ProductListStyle.textShopEmpty}>
          {i18n.t('Shop Empty')}
        </Text>
      )}
    </>
  );
};

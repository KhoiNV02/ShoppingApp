import {FlatList, SafeAreaView} from 'react-native';
import PurchaseHistoryItem from './components/PurchaseHistoryItem';
function PurchaseHistoryUI({ordersHistoryList, loadMoreData, renderFooter}) {
  return (
    <SafeAreaView style={{flex: 1, padding: 5}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        data={ordersHistoryList}
        onEndReachedThreshold={0.3}
        onEndReached={loadMoreData}
        ListFooterComponent={renderFooter}
        renderItem={({item}) => <PurchaseHistoryItem item={item} />}
        keyExtractor={item => item.orderId}
      />
    </SafeAreaView>
  );
}

export default PurchaseHistoryUI;

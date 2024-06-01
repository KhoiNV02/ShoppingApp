import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';

import ProductList from '../../../../components/ProductList/ProductList';
import Title from '../../../../components/Title/Title';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import i18n from '../../../../common/utils/multiLanguages/multilanguages';
import HomeShortcutButton from '../../../../components/HomeShortcutButton/HomeShortcutButton';
import HomeStyle from './HomeStyle';

function HomeScreenUI({
  stateTime,
  username,
  refreshing,
  onRefresh,
  pressSearch,
  pressMostExpensive,
  pressRecentlyAdded,
  pressMostView,
  pressBestSeller,
  bestsellersData,
  mostviewedData,
  mostexpensiveData,
  recentlyaddedData,
}) {
  i18n.locale = useSelector(state => state.language.language);

  return (
    <SafeAreaView style={HomeStyle.safeViewContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={HomeStyle.imgBG}
          source={require('../../../../assets/Icon/gradient.png')}>
          {stateTime && username ? (
            <Text style={HomeStyle.textTitle}>
              {stateTime + ', ' + username}
            </Text>
          ) : (
            <></>
          )}

          <TouchableOpacity
            onPress={pressSearch}
            style={HomeStyle.viewSearchBar}>
            <View style={HomeStyle.searchBar}>
              <Text>{i18n.t('Search')}</Text>
              <Image
                style={HomeStyle.iconSearch}
                source={require('../../../../assets/Icon/search.png')}></Image>
            </View>
          </TouchableOpacity>
          <View style={HomeStyle.viewListShortcut}>
            <HomeShortcutButton
              onPress={pressBestSeller}
              icon={require('../../../../assets/Icon/soldlist.png')}
              title={i18n.t('Best sellers')}></HomeShortcutButton>
            <HomeShortcutButton
              onPress={pressMostView}
              icon={require('../../../../assets/Icon/viewlist.png')}
              title={i18n.t('Most viewed')}></HomeShortcutButton>
            <HomeShortcutButton
              onPress={pressRecentlyAdded}
              icon={require('../../../../assets/Icon/datelist.png')}
              title={i18n.t('Recently added')}></HomeShortcutButton>
            <HomeShortcutButton
              onPress={pressMostExpensive}
              icon={require('../../../../assets/Icon/pricelist.png')}
              title={i18n.t('Most expensive')}></HomeShortcutButton>
          </View>
        </ImageBackground>
        <View>
          <View style={[HomeStyle.horizontalListContainer, {marginTop: 7}]}>
            <Title small={true}>{i18n.t('Best sellers')}</Title>
            <CustomButton noBackgroundButton={true} onPress={pressBestSeller}>
              {i18n.t('View all')}
            </CustomButton>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <ProductList
              isLoading={true}
              data={bestsellersData}
              horizontal={true}
            />
          </View>
        </View>
        <View>
          <View style={HomeStyle.horizontalListContainer}>
            <Title small={true}>{i18n.t('Most viewed')}</Title>
            <CustomButton noBackgroundButton={true} onPress={pressMostView}>
              {i18n.t('View all')}
            </CustomButton>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <ProductList
              isLoading={true}
              data={mostviewedData}
              horizontal={true}
            />
          </View>
        </View>

        <View>
          <View style={HomeStyle.horizontalListContainer}>
            <Title small={true}>{i18n.t('Recently added')}</Title>
            <CustomButton
              noBackgroundButton={true}
              onPress={pressRecentlyAdded}>
              {i18n.t('View all')}
            </CustomButton>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <ProductList
              isLoading={true}
              data={recentlyaddedData}
              horizontal={true}
            />
          </View>
        </View>

        <View>
          <View style={HomeStyle.horizontalListContainer}>
            <Title small={true}>{i18n.t('Most expensive')}</Title>
            <CustomButton
              noBackgroundButton={true}
              onPress={pressMostExpensive}>
              {i18n.t('View all')}
            </CustomButton>
          </View>
          <View style={{paddingHorizontal: 5}}>
            <ProductList
              isLoading={true}
              data={mostexpensiveData}
              horizontal={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreenUI;

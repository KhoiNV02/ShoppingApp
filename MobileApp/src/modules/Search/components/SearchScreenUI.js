import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import ProductList from '../../../components/ProductList/ProductList';
import i18n from '../../../common/utils/multiLanguages/multilanguages';
import SearchScreenStyles from './SearchScreenStyles';
function SearchScreenUI({
  handleNavigateToPreviousScreen,
  searchValue,
  setSearchValue,
  handleSearchSubmition,
  handleShowSearchSuggest,
  showSearchSuggest,
  debouncedValue,
  searchSuggestsResult,
  searchValueHistory,
  searchResults,
  handleSearchSubmitionByPressSuggest,
  handleResetSearchSuggest,
  isGetSearchResultLoading,
  loadMoreData
}) {
  i18n.locale = useSelector(state => state.language.language);
  return (
    <View style={SearchScreenStyles.container}>
      <View style={SearchScreenStyles.header}>
        <View style={SearchScreenStyles.buttonBack}>
          <TouchableOpacity onPress={handleNavigateToPreviousScreen}>
            <Image
              style={SearchScreenStyles.iconBack}
              source={require('../../../assets/Icon/left.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={SearchScreenStyles.searchBar}>
          <TextInput
            placeholder={i18n.t('Search')}
            value={searchValue}
            onChangeText={setSearchValue}
            style={SearchScreenStyles.searchBarInput}
            onSubmitEditing={handleSearchSubmition}
            onFocus={handleShowSearchSuggest}
          />
          <TouchableOpacity
            style={SearchScreenStyles.buttonSearch}
            onPress={handleSearchSubmition}>
            <Image
              style={SearchScreenStyles.icon}
              source={require('../../../assets/Icon/search.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={SearchScreenStyles.body}>
        {showSearchSuggest && (
          <View style={SearchScreenStyles.searchSuggestions}>
            {(debouncedValue !== ''
              ? searchSuggestsResult
              : searchValueHistory.slice(0, 8)
            ).map((item, index) => {
              return (
                <Text
                  style={SearchScreenStyles.searchSuggestionItem}
                  key={index}
                  onPress={() => {
                    handleSearchSubmitionByPressSuggest(item.content);
                  }}>
                  {item.content}
                </Text>
              );
            })}
          </View>
        )}
        {searchValueHistory.length !== 0 &&
          searchSuggestsResult.length === 0 &&
          searchResults.length === 0 && (
            <View style={SearchScreenStyles.clearSearchSuggestHistory}>
              <Text
                style={SearchScreenStyles.clearSearchSuggestHistoryText}
                onPress={handleResetSearchSuggest}>
                {i18n.t('Clear Search Suggest')}
              </Text>
            </View>
          )}
        {searchResults.length !== 0 && (
          <ProductList
            data={searchResults}
            horizontal={false}
            option={true}
            isLoading={isGetSearchResultLoading}
            loadMoreData={loadMoreData}
          />
        )}
      </View>
    </View>
  );
}

export default SearchScreenUI;

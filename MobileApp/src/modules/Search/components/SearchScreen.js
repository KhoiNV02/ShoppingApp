import {Keyboard} from 'react-native';
import {useEffect, useState, useLayoutEffect, useCallback} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  getSearchSuggestConfig,
  addSearchContentConfig,
} from '../../../services/api/searchServices';
import {getSearchResultConfig} from '../../../services/api/productServices';
import {
  getSearchSuggest,
  addSearchContent,
  getSearchResult,
  resetSearchResult,
} from '../../../store/actions/actions';
import {resetSearchSuggest} from '../../../store/actions/actions';

import i18n from '../../../common/utils/multiLanguages/multilanguages';
import useDebounce from '../../../common/utils/hook/useDebounce';
import SearchScreenUI from './SearchScreenUI';

function SearchScreen() {
  i18n.locale = useSelector(state => state.language.language);
  const limit = 8;
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const searchSuggestsResult = useSelector(
    state => state.product.searchSuggests,
  );
  const debouncedValue = useDebounce(searchValue, 600);
  const searchValueHistory = useSelector(
    state => state.user.searchValueHistory,
  );
  const searchResults = useSelector(state => state.product.searchResults);
  const totalResult = useSelector(state => state.product.totalResult);
  const isGetSearchResultLoading = useSelector(
    state => state.product.isGetSearchResultLoading,
  );
  const [skip, setSkip] = useState(0);
  const [showSearchSuggest, setShowSearchSuggest] = useState(true);

  useEffect(() => {
    return () => {
      dispatch(resetSearchResult());
    };
  }, []);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (debouncedValue != '') {
      const searchSuggestConfig = getSearchSuggestConfig(debouncedValue);
      dispatch(getSearchSuggest(searchSuggestConfig));
    }
  }, [debouncedValue]);

  const handleSearchSubmition = () => {
    dispatch(resetSearchResult());
    Keyboard.dismiss();
    setShowSearchSuggest(false);
    const addingSearchContentConfig = addSearchContentConfig(debouncedValue);
    dispatch(addSearchContent(addingSearchContentConfig));
    const searchResultsConfig = getSearchResultConfig(debouncedValue, 0, limit);
    dispatch(getSearchResult(searchResultsConfig));
    setSkip(limit);
  };

  const handleSearchSubmitionByPressSuggest = content => {
    setSearchValue(content);
    handleSearchSubmition();
  };

  const loadMoreData = useCallback(() => {
    if (searchResults.length < totalResult) {
      const searchResultsConfig = getSearchResultConfig(
        debouncedValue,
        skip,
        limit,
      );
      dispatch(getSearchResult(searchResultsConfig));
      setSkip(skip + limit);
    }
  }, [searchResults]);

  const handleNavigateToPreviousScreen = () => {
    navigation.goBack();
  };

  const handleShowSearchSuggest = () => {
    setShowSearchSuggest(true);
  };

  const handleResetSearchSuggest = () => {
    dispatch(resetSearchSuggest());
  };
  return (
    <SearchScreenUI
      handleNavigateToPreviousScreen={handleNavigateToPreviousScreen}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      handleSearchSubmition={handleSearchSubmition}
      handleShowSearchSuggest={handleShowSearchSuggest}
      showSearchSuggest={showSearchSuggest}
      debouncedValue={debouncedValue}
      searchSuggestsResult={searchSuggestsResult}
      searchValueHistory={searchValueHistory}
      searchResults={searchResults}
      handleSearchSubmitionByPressSuggest={handleSearchSubmitionByPressSuggest}
      handleResetSearchSuggest={handleResetSearchSuggest}
      isGetSearchResultLoading={isGetSearchResultLoading}
      loadMoreData={loadMoreData}
    />
  );
}

export default SearchScreen;

import {StyleSheet} from 'react-native';
import {Colors} from '../../../components/GlobalStyle';

const SearchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  searchBar: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBarInput: {
    height: 40,
    backgroundColor: '#ededed',
    borderColor: Colors.PrimaryColor,
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 10,
    fontSize: 16,
  },
  buttonSearch: {
    position: 'absolute',
    justifyContent: 'center',
    right: 0,
    borderRadius: 25,
    width: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  body: {
    flex: 10,
  },
  searchSuggestions: {
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchSuggestionItem: {
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    color: 'black',
    fontSize: 18,
    padding: 7,
  },
  clearSearchSuggestHistory: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'grey',
    height: 40,
  },
  clearSearchSuggestHistoryText: {
    fontSize: 16,
  },
});

export default SearchScreenStyles;

import {
  getSearchSuggestConfig,
  addSearchContentConfig,
} from '../searchServices';
describe('Service Configurations', () => {
  describe('getSearchSuggestConfig', () => {
    it('should return correct config for getting search suggestions', () => {
      const keyword = 'example';
      const expectedConfig = {
        url: 'searchContents',
        method: 'GET',
        params: {
          keyword,
        },
      };

      expect(getSearchSuggestConfig(keyword)).toEqual(expectedConfig);
    });
  });

  describe('addSearchContentConfig', () => {
    it('should return correct config for adding search content', () => {
      const content = 'example content';
      const expectedConfig = {
        url: 'searchContents',
        method: 'POST',
        data: {
          content,
        },
      };

      expect(addSearchContentConfig(content)).toEqual(expectedConfig);
    });
  });
});

import {getHomeProductConfig} from '../homeProductServices';

describe('Service Configurations', () => {
  describe('getHomeProductConfig', () => {
    it('should return correct config for getting home products with sorting, skip, and limit', () => {
      const sorting = 'popularity';
      const skip = 0;
      const limit = 10;
      const expectedConfig = {
        url: 'products',
        method: 'GET',
        params: {
          sorting,
          skip,
          limit,
        },
      };

      expect(getHomeProductConfig(sorting, skip, limit)).toEqual(
        expectedConfig,
      );
    });

    it('should return correct config when sorting is undefined', () => {
      const sorting = undefined;
      const skip = 5;
      const limit = 15;
      const expectedConfig = {
        url: 'products',
        method: 'GET',
        params: {
          sorting,
          skip,
          limit,
        },
      };

      expect(getHomeProductConfig(sorting, skip, limit)).toEqual(
        expectedConfig,
      );
    });

    it('should return correct config when skip and limit are undefined', () => {
      const sorting = 'newest';
      const skip = undefined;
      const limit = undefined;
      const expectedConfig = {
        url: 'products',
        method: 'GET',
        params: {
          sorting,
          skip,
          limit,
        },
      };

      expect(getHomeProductConfig(sorting, skip, limit)).toEqual(
        expectedConfig,
      );
    });
  });
});

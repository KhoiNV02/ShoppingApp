import {
  updateProductConfig,
  addNewProductConfig,
  deleteProductConfig,
  getProductByUserIdConfig,
  getProductByProductIdConfig,
  getSearchResultConfig,
} from '../productServices';

describe('Service Configurations', () => {
  describe('updateProductConfig', () => {
    it('should return correct config for updating a product', () => {
      const id = '123';
      const viewed = 10;
      const sold = 5;
      const type = 'electronics';
      const expectedConfig = {
        url: `products/${id}`,
        method: 'PUT',
        data: {
          viewed,
          sold,
          type,
        },
      };

      expect(updateProductConfig(id, viewed, sold, type)).toEqual(
        expectedConfig,
      );
    });
  });

  describe('addNewProductConfig', () => {
    it('should return correct config for adding a new product', () => {
      const data = {name: 'New Product', price: 100};
      const expectedConfig = {
        url: 'products',
        method: 'POST',
        data,
      };

      expect(addNewProductConfig(data)).toEqual(expectedConfig);
    });
  });

  describe('deleteProductConfig', () => {
    it('should return correct config for deleting a product', () => {
      const id = '123';
      const expectedConfig = {
        url: `products/${id}`,
        method: 'DELETE',
      };

      expect(deleteProductConfig(id)).toEqual(expectedConfig);
    });
  });

  describe('getProductByUserIdConfig', () => {
    it('should return correct config for getting products by user ID', () => {
      const userId = 'user123';
      const skip = 0;
      const limit = 10;
      const expectedConfig = {
        url: `products/user/${userId}`,
        method: 'GET',
        params: {
          skip,
          limit,
        },
      };

      expect(getProductByUserIdConfig(userId, skip, limit)).toEqual(
        expectedConfig,
      );
    });
  });

  describe('getProductByProductIdConfig', () => {
    it('should return correct config for getting a product by product ID', () => {
      const productId = 'product123';
      const expectedConfig = {
        url: `products/${productId}`,
        method: 'GET',
      };

      expect(getProductByProductIdConfig(productId)).toEqual(expectedConfig);
    });
  });

  describe('getSearchResultConfig', () => {
    it('should return correct config for getting search results', () => {
      const keyword = 'laptop';
      const skip = 0;
      const limit = 10;
      const expectedConfig = {
        url: 'products/search/searchProduct',
        method: 'GET',
        params: {
          keyword,
          skip,
          limit,
        },
      };

      expect(getSearchResultConfig(keyword, skip, limit)).toEqual(
        expectedConfig,
      );
    });
  });
});

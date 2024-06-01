import {
  addNewOrderConfig,
  getOrdersHistoryByUserIdConfig,
} from '../purchaseHistoryServices';

describe('Service Configurations', () => {
  describe('addNewOrderConfig', () => {
    it('should return correct config for adding a new order', () => {
      const cartItemId = '123';
      const userId = '456';
      const expectedConfig = {
        url: 'orders',
        method: 'POST',
        data: {
          cartItemId: cartItemId,
          user: userId,
        },
      };

      expect(addNewOrderConfig(cartItemId, userId)).toEqual(expectedConfig);
    });
  });

  describe('getOrdersHistoryByUserIdConfig', () => {
    it('should return correct config for getting order history by user ID', () => {
      const userId = '456';
      const skip = 0;
      const limit = 10;
      const expectedConfig = {
        url: `orders/${userId}`,
        method: 'GET',
        params: {
          skip,
          limit,
        },
      };

      expect(getOrdersHistoryByUserIdConfig(userId, skip, limit)).toEqual(
        expectedConfig,
      );
    });

    it('should return correct config with different parameters', () => {
      const userId = '789';
      const skip = 5;
      const limit = 20;
      const expectedConfig = {
        url: `orders/${userId}`,
        method: 'GET',
        params: {
          skip,
          limit,
        },
      };

      expect(getOrdersHistoryByUserIdConfig(userId, skip, limit)).toEqual(
        expectedConfig,
      );
    });
  });
});

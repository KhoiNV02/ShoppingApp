import {
  addNewCartItemConfig,
  deleteCartItemConfig,
  updateCartItemConfig,
  getCartItemByUserIdConfig,
  buyAgainConfig,
  purchaseCartItemConfig,
} from '../cartItemServices';
describe('Service Configurations', () => {
  describe('addNewCartItemConfig', () => {
    it('should return correct config for adding a new cart item', () => {
      const data = {productId: '123', quantity: 2};
      const expectedConfig = {
        url: 'cartItems',
        method: 'POST',
        data,
      };

      expect(addNewCartItemConfig(data)).toEqual(expectedConfig);
    });
  });

  describe('deleteCartItemConfig', () => {
    it('should return correct config for deleting a cart item', () => {
      const id = '123';
      const expectedConfig = {
        url: `cartItems/${id}`,
        method: 'DELETE',
      };

      expect(deleteCartItemConfig(id)).toEqual(expectedConfig);
    });
  });

  describe('updateCartItemConfig', () => {
    it('should return correct config for updating a cart item', () => {
      const id = '123';
      const isSelected = true;
      const newQuantity = 3;
      const expectedConfig = {
        url: `cartItems/${id}`,
        method: 'PUT',
        data: {
          isSelected,
          newQuantity,
        },
      };

      expect(updateCartItemConfig(id, isSelected, newQuantity)).toEqual(
        expectedConfig,
      );
    });
  });

  describe('getCartItemByUserIdConfig', () => {
    it('should return correct config for getting cart items by user ID', () => {
      const userId = '456';
      const expectedConfig = {
        url: `cartItems/${userId}`,
        method: 'GET',
      };

      expect(getCartItemByUserIdConfig(userId)).toEqual(expectedConfig);
    });
  });

  describe('buyAgainConfig', () => {
    it('should return correct config for buying again', () => {
      const orderId = '789';
      const expectedConfig = {
        url: `cartItems/buyagain/${orderId}`,
        method: 'POST',
      };

      expect(buyAgainConfig(orderId)).toEqual(expectedConfig);
    });
  });

  describe('purchaseCartItemConfig', () => {
    it('should return correct config for purchasing cart items', () => {
      const cartItemId = '321';
      const expectedConfig = {
        url: 'cartItems/purchase',
        method: 'PUT',
        data: {
          cartItemId,
        },
      };

      expect(purchaseCartItemConfig(cartItemId)).toEqual(expectedConfig);
    });
  });
});

import {
  addNewFeedbackConfig,
  getFeedbacksByProductIdConfig,
} from '../ratingService';

describe('Service Configurations', () => {
  describe('addNewFeedbackConfig', () => {
    it('should return correct config for adding new feedback', () => {
      const orderId = 'order123';
      const data = {rating: 5, comment: 'Great product!'};
      const expectedConfig = {
        url: 'feedbacks',
        method: 'POST',
        data: {
          orderId,
          data,
        },
      };

      expect(addNewFeedbackConfig(orderId, data)).toEqual(expectedConfig);
    });
  });

  describe('getFeedbacksByProductIdConfig', () => {
    it('should return correct config for getting feedbacks by product ID', () => {
      const productId = 'product123';
      const skip = 0;
      const limit = 10;
      const expectedConfig = {
        url: `feedbacks/${productId}`,
        method: 'GET',
        params: {
          skip,
          limit,
        },
      };

      expect(getFeedbacksByProductIdConfig(productId, skip, limit)).toEqual(
        expectedConfig,
      );
    });
  });
});

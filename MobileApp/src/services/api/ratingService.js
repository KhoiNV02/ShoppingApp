export const addNewFeedbackConfig = (orderId, data) => ({
    url: `feedbacks`,
    method: 'POST',
    data: {
        orderId: orderId,
        data: data,
    },
  });
  export const getFeedbacksByProductIdConfig = (productId, skip, limit) => ({
    url: `feedbacks/${productId}`,
    method: 'GET',
    params: {
      skip,
      limit,
    },
  });
  
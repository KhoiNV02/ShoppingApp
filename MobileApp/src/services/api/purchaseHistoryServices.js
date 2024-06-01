export const addNewOrderConfig = (cartItemId, userId) => ({
  url: `orders`,
  method: 'POST',
  data: {
    cartItemId: cartItemId,
    user: userId,
  },
});
export const getOrdersHistoryByUserIdConfig = (userId, skip, limit) => ({
  url: `orders/${userId}`,
  method: 'GET',
  params: {
    skip,
    limit,
  },
});

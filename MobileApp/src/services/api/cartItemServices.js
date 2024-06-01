export const addNewCartItemConfig = data => ({
  url: `cartItems`,
  method: 'POST',
  data,
});

export const deleteCartItemConfig = id => ({
  url: `cartItems/${id}`,
  method: 'DELETE',
});

export const updateCartItemConfig = (id, isSelected, newQuantity) => ({
  url: `cartItems/${id}`,
  method: 'PUT',
  data: {
    isSelected: isSelected,
    newQuantity: newQuantity,
  },
});

export const getCartItemByUserIdConfig = userId => ({
  url: `cartItems/${userId}`,
  method: 'GET',
});

export const buyAgainConfig = orderId => ({
  url: `cartItems/buyagain/${orderId}`,
  method: 'POST',
});

export const purchaseCartItemConfig = (cartItemId) => ({
  url: `cartItems/purchase`,
  method: 'PUT',
  data: {
    cartItemId: cartItemId,
  },
});

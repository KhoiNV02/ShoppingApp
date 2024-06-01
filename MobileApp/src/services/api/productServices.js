
export const updateProductConfig = (id, viewed, sold, type) => ({
  url: `products/${id}`,
  method: 'PUT',
  data: {
    viewed,
    sold,
    type,
  },
});

export const addNewProductConfig = data => ({
  url: `products`,
  method: 'POST',
  data,
});

export const deleteProductConfig = id => ({
  url: `products/${id}`,
  method: 'DELETE',
});

export const getProductByUserIdConfig = (userId, skip, limit) => ({
  url: `products/user/${userId}`,
  method: 'GET',
  params: {
    skip,
    limit,
  },
});

export const getProductByProductIdConfig = productId => ({
  url: `products/${productId}`,
  method: 'GET',
});

export const getSearchResultConfig = (keyword, skip, limit) => ({
  url: 'products/search/searchProduct',
  method: 'GET',
  params: {
    keyword,
    skip,
    limit,
  },
});

export const getHomeProductConfig = (sorting, skip, limit) => ({
  url: 'products',
  method: 'GET',
  params: {
    sorting: sorting,
    skip: skip,
    limit: limit,
  },
});

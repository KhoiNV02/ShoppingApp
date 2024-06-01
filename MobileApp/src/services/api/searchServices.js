export const getSearchSuggestConfig = keyword => ({
  url: `searchContents`,
  method: 'GET',
  params: {
    keyword,
  },
});

export const addSearchContentConfig = content => ({
  url: `searchContents`,
  method: 'POST',
  data: {
    content,
  },
});

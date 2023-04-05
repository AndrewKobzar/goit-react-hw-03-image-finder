export const BASE_URL = 'https://pixabay.com/api/',
  API_KEY = '16786319-bf43256140adf4f828797693c',
  SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

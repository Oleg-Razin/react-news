import axios from 'axios';

export const BASE_PATH = 'https://newsapi.org/v2/';
export const SORT = 'top-headlines';
export const COUNTRY = 'country=';
export const CATEGORY = 'category=';
export const PAGESIZE = 'pageSize='
export const PAGE = 'page='
export const API_KEY = 'apiKey=7eba08dfd383428b907a75dd79cdc03c';

export const getPostUrl = async(categoryId, countryId, pageSizeId, pageId) => {
	const result = await axios
	.get(`${BASE_PATH}${SORT}?${COUNTRY + countryId}&${CATEGORY + categoryId}&${PAGESIZE + pageSizeId}&${PAGE + pageId}&${API_KEY}`)
	.then( ({data}) => data );

	return result
}
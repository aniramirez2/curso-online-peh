import axios from 'axios';

// Select the DOM-element, so that you can replace it with content
let PROJECT_ID = 'w9w13qo7';
let DATASET = 'production';
let QUERY = encodeURIComponent('*[_type in ["pages"]]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const api = axios.create({
	baseURL: `${URL}`,
});

export default api;

import config from '@config/config';
import axios from 'axios';

const api = axios.create({
  baseURL: config.mlUri, // Replace with your API's base URL
});

export default api;

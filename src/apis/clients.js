import { getAuthToken } from '../data/tokenManager';
import axios from 'axios';

const SERVER_URL = require('../config/dburl.json').server;
console.log("server",SERVER_URL);
const apiClient = axios.create({
  baseURL: SERVER_URL,
});

// apiClient.interceptors.request.use((request) => {
//   const token = getAuthToken();

//   if (token) {
//     request.headers['Authorization'] = token;
//   }
//   return request;
// });

export { apiClient };

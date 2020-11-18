import { getAuthToken } from '../data/tokenManager';
import axios from 'axios';

//const SERVER_URL = process.env.REACT_APP_API_URL;
const SERVER_URL = 'http://localhost:7000/admin/';
console.log('url', SERVER_URL);
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

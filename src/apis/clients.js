import { getAuthToken } from '../data/tokenManager';
import axios from 'axios';
import { local } from 'd3';

//const SERVER_URL = process.env.REACT_APP_API_URL;
const SERVER_URL = 'http://localhost:7000/admin/';
console.log('url', SERVER_URL);



let token = localStorage.getItem("token");
console.log(token,typeof(token))

const apiClient = axios.create({
  baseURL: SERVER_URL,
  headers:{'access-token':token}
});

// apiClient.interceptors.request.use((request) => {
//   const token = getAuthToken();

//   if (token) {
//     request.headers['Authorization'] = token;
//   }
//   return request;
// });

// apiClient.interceptors.request.use((request) => {
 

//   if (token) {
//     request.headers['access-token'] = token;
//    console.log("token here",token);
//   }
//   return request;
// });

export { apiClient };

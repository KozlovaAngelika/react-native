import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

api.interceptors.request.use((request) => {
  console.log('Starting Request', JSON.stringify(request, null, 2));

  return request;
});

export default api;

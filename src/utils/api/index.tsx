import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  headers: {
    contentType: 'application/json',
  },
  baseURL: API_URL,
});

export default api;

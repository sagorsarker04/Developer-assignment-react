import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // তোমার Go API এর বেস URL
  withCredentials: true, // কুকি পাঠাতে হবে
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token'); // কুকি থেকে টোকেন নেবে
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

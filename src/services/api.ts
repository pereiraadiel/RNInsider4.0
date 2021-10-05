import axios from 'axios';
import { API_KEY } from '@env';

export const key = API_KEY as string;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default api;
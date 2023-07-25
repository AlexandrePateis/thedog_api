import axios from 'axios';
import { API_KEY } from '@env';

const baseURL = `https://api.thedogapi.com/v1`;

const config = {
  baseURL:
    'https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_AEgbgO3mSg4wZ7r0zEErUOy0K2pqaOWMznH8sRnNZlLwlXjU3ab8Ojb9lIMBI8ps',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'x-api-key': API_KEY,
  },
};

export const clientApi = axios.create(config);
export const fetcher = (url) => clientApi.get(url).then((res) => res.data);

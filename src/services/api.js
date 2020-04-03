import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const env = 'production';

export const urlApi =
  env === 'development'
    ? 'http://localhost:3333'
    : 'https://knots-whatsapp.herokuapp.com';

const api = axios.create({
  baseURL: urlApi,
  timeout: 30000,
  headers,
});

export default api;

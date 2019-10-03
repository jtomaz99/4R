import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fourr-api.herokuapp.com'
});

export default api;

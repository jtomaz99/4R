import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost3002'
});

export default api;

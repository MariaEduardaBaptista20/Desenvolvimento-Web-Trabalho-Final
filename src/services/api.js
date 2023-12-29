import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8002', 
  timeout: 10000,
});

export default instance;
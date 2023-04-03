import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3333',
  responseType: 'json',
});

const httpClient = () => client;

export default httpClient;

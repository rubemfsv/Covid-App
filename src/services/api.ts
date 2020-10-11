import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-19-data.p.rapidapi.com/',
});

export default api;

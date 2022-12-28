import axios from 'axios';

const url = 'https://poetry-app-service.onrender.com/poem';

export const fetchPoems = () => axios.get(url);

export const fetchSinglePoem = (id) => axios.get(`${url}/${id}`);
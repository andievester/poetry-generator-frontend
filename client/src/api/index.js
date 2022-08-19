import axios from 'axios';

const url = 'https://poetry-app-server.herokuapp.com/poem/61f59268a14dceabb9ca0de7';

export const fetchPoems = () => axios.get(url);

export const fetchSinglePoem = (id) => axios.get(`${url}/${id}`);
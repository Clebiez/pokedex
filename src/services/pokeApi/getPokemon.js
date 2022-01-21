import apiClient from './apiClient';

const getPokemon = (id) => apiClient.get(`/pokemon/${id}`).then((res) => res.data);

export default getPokemon;

import apiClient from './apiClient';

const getPokemon = (id) => apiClient.get(`/pokemon/${id}`);

export default getPokemon;

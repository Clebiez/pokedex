import apiClient from './apiClient';

const getListPokemon = () => apiClient.get('/pokemon');

export default getListPokemon;

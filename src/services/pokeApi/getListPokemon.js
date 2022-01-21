import apiClient from './apiClient';

const getListPokemon = (url = '/pokemon') => apiClient.get(url);

export default getListPokemon;

import { isLogged } from './login';

import getFavoritePokemons from './getFavoritePokemons';
import saveFavoritePokemons from './saveFavoritePokemons';

const addFavoritePokemon = async (pokemon) => {
    if (!isLogged) {
        return Promise.reject({
            status: 401,
            message: 'User is not logged',
        });
    }
    const pokemons = await getFavoritePokemons();
    pokemons.data.results.push(pokemon);
    await saveFavoritePokemons(pokemons.data.results);
    return Promise.resolve({
        status: 204,
    });
};

export default addFavoritePokemon;

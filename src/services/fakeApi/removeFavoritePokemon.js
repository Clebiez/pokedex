import { isLogged } from './login';

import getFavoritePokemons from './getFavoritePokemons';
import saveFavoritePokemons from './saveFavoritePokemons';

const removeFavoritePokemon = async (pokemonToRemove) => {
    if (!isLogged) {
        return Promise.reject({
            status: 401,
            message: 'User is not logged',
        });
    }
    const pokemons = await getFavoritePokemons();
    const newPokemonsList = pokemons.data.results.filter(
        (pokemon) => pokemon.name !== pokemonToRemove.name
    );
    await saveFavoritePokemons(newPokemonsList);
    return Promise.resolve({
        status: 204,
    });
};

export default removeFavoritePokemon;

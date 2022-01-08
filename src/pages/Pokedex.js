import getListPokemon from '../services/api/getListPokemon';

import PokemonList from '../components/pokemons/PokemonList';
import getFavoritePokemons from '../services/fakeApi/getFavoritePokemons';
import removeFavoritePokemon from '../services/fakeApi/removeFavoritePokemon';

const Pokedex = () => {
    let pokemons = [];
    getListPokemon().then((res) => {
        pokemons = res.data;
        console.log(pokemons);
    });

    getFavoritePokemons().then(async (res) => {
        console.log('FAVORITE', res.data);
        await removeFavoritePokemon({ name: 'bulbasaur' });
        const pokemons = await getFavoritePokemons();
        console.log('FAVORITE 2', pokemons);
    });

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center">Pokedex</h1>
            <PokemonList pokemons={pokemons.result} />
        </div>
    );
};

export default Pokedex;

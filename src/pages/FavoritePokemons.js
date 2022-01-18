import { useState, useEffect, useCallback } from 'react';
import getFavoritePokemons from '../services/fakeApi/getFavoritePokemons';
import removeFavoritePokemon from '../services/fakeApi/removeFavoritePokemon';

import PokemonList from '../components/Pokemon/PokemonList';
import PokemonCard from '../components/Pokemon/PokemonCard';

function FavoritePokemons(props) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavoritePokemons();
    }, []);

    const onRemoveFavorite = async (pokemon) => {
        await removeFavoritePokemon(pokemon);
        fetchFavoritePokemons();
        // console.log(res);
    };

    const fetchFavoritePokemons = useCallback(async () => {
        const res = await getFavoritePokemons();

        setFavorites(res.data.results);
    }, []);

    return (
        <PokemonList pokemons={favorites}>
            {(pokemon) => (
                <PokemonCard
                    pokemon={pokemon}
                    isFavorite={true}
                    onRemoveFavorite={onRemoveFavorite}
                />
            )}
        </PokemonList>
    );
}

export default FavoritePokemons;

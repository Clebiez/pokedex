import { useState, useEffect } from 'react';
import getFavoritePokemons from '../services/fakeApi/getFavoritePokemons';
import PokemonList from '../components/Pokemon/PokemonList';

function FavoritePokemons(props) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchFavoritePokemons = async () => {
            const res = await getFavoritePokemons();
            setFavorites(res.data.results);
        };
        fetchFavoritePokemons();
    }, []);

    return <PokemonList pokemons={favorites} />;
}

export default FavoritePokemons;

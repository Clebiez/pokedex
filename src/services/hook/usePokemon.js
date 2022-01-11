import getPokemon from '../api/getPokemon';
import { useEffect, useState } from 'react';

function usePokemon(id) {
    const [pokemon, setPokemon] = useState();
    useEffect(() => {
        const getData = async () => {
            const res = await getPokemon(id);
            setPokemon(res.data);
        };
        getData();
    }, []);
    return { pokemon, isLoading: !pokemon };
}

export default usePokemon;

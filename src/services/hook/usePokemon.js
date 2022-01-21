import getPokemon from '../pokeApi/getPokemon';
import { useQuery } from 'react-query';

function usePokemon(id) {
    const { data, isLoading } = useQuery(['pokemons', id], () => getPokemon(id), {
        staleTime: Infinity,
    });

    return { pokemon: data, isLoading };
}

export default usePokemon;

import { useQuery } from 'react-query';
import getFavoritePokemons from '../fakeApi/getFavoritePokemons';
import removeFavoritePokemon from '../fakeApi/removeFavoritePokemon';
import addFavoritePokemon from '../fakeApi/addFavoritePokemon';

function useFavorites() {
    const { data, isLoading, refetch } = useQuery(
        'favorites',
        () => getFavoritePokemons().then((res) => res.data),
        {
            staleTime: Infinity,
        }
    );

    const onRemoveFavorite = async (pokemon) => {
        await removeFavoritePokemon(pokemon);
        refetch();
    };

    const onAddFavorite = async (pokemon) => {
        await addFavoritePokemon(pokemon);
        refetch();
    };

    const favorites = data?.results || [];
    return { favorites, isLoading, onRemoveFavorite, onAddFavorite };
}

export default useFavorites;

import PokemonList from '../components/Pokemon/PokemonList';
import PokemonCard from '../components/Pokemon/PokemonCard';
import useFavorites from '../services/hook/useFavorites';

function FavoritePokemons(props) {
    const { favorites, onRemoveFavorite } = useFavorites();

    return (
        <PokemonList pokemons={favorites}>
            {(pokemon) => (
                <PokemonCard
                    pokemon={pokemon}
                    isFavorite
                    onRemoveFavorite={onRemoveFavorite}
                    isLogged
                />
            )}
        </PokemonList>
    );
}

export default FavoritePokemons;

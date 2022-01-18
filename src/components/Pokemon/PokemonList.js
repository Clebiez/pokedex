import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';

function PokemonList({
    pokemons,
    onAddFavorite,
    onRemoveFavorite,
    searchValue = '',
    favPokemons,
}) {
    const isPokemonFavorite = (pokemon) => {
        return !!favPokemons?.find((favPokemon) => {
            return favPokemon.name === pokemon.name;
        });
    };
    return (
        <ul className="w-full flex flex-wrap gap-2 justify-center my-4">
            {pokemons?.map((pokemon) => {
                const isFavorite = isPokemonFavorite(pokemon);
                return (
                    pokemon.name.includes(searchValue) && (
                        <li className="w-1/4" key={pokemon.name}>
                            <PokemonCard
                                isFavorite={isFavorite}
                                onRemoveFavorite={onRemoveFavorite}
                                onAddFavorite={onAddFavorite}
                                pokemon={pokemon}
                            />
                        </li>
                    )
                );
            })}
        </ul>
    );
}

const pokemonsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
    })
);

PokemonList.propTypes = {
    pokemons: pokemonsPropTypes.isRequired,
    onAddFavorite: PropTypes.func,
    onRemoveFavorite: PropTypes.func,
    favPokemons: pokemonsPropTypes,
    searchValue: PropTypes.string,
};
export default PokemonList;

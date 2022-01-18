// import PokemonCard from './PokemonCard';
import PropTypes from 'prop-types';

function PokemonList({ pokemons, searchValue = '', children }) {
    return (
        <ul className="w-full flex flex-wrap gap-2 justify-center my-4">
            {pokemons?.map((pokemon) => {
                return (
                    pokemon.name.includes(searchValue) && (
                        <li className="w-1/4" key={pokemon.name}>
                            {children(pokemon)}
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
    searchValue: PropTypes.string,
    children: PropTypes.func,
};
export default PokemonList;

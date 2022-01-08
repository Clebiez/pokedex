import PropTypes from 'proptypes';

const PokemonList = ({ pokemons }) => {
    return (
        <div>
            <ul>
                {pokemons?.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
            <div className="flex items-center justify-center btn-group mt-6 m-auto">
                <button className="btn btn-outline btn-wide">Page précédente</button>
                <button className="btn btn-outline btn-wide">Page suivante</button>
            </div>
        </div>
    );
};

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;

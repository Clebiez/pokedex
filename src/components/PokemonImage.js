import ReactPropTypes from 'prop-types';

function PokemonImage({ id }) {
    return (
        <img
            className="h-24 m-auto p-2"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
    );
}

PokemonImage.propTypes = {
    id: ReactPropTypes.string,
};

export default PokemonImage;

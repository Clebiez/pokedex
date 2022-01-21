import PropTypes from 'prop-types';

function PokemonTypes({ types }) {
    return (
        <ul className="w-full flex justify-center gap-2">
            {types?.map(({ type }) => {
                return (
                    <li
                        className="text-black bg-pink-200 py-1 px-2 rounded-lg"
                        key={type.name}
                    >
                        {type.name}
                    </li>
                );
            })}
        </ul>
    );
}

PokemonTypes.propTypes = {
    types: PropTypes.arrayOf({
        name: PropTypes.string,
    }),
};

export default PokemonTypes;

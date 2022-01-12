import ReactPropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonImage from './PokemonImage';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/|\//g;

function PokemonCard({ pokemon, isFavorite, onAddFavorite, onRemoveFavorite }) {
    const id = pokemon.url.replace(regex, '');

    return (
        <Link to={`/pokemon/${id}`}>
            <div className="relative w-full rounded-md bg-pink-400">
                <h2 className="w-full text-center">{pokemon.name}</h2>
                {isFavorite === true ? (
                    <button
                        onClick={(e) => {
                            e.nativeEvent.stopPropagation();
                            e.preventDefault();
                            onRemoveFavorite(pokemon);
                        }}
                    >
                        <AiFillHeart className="absolute top-1 right-1" />
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.nativeEvent.stopPropagation();
                            e.preventDefault();
                            onAddFavorite(pokemon);
                        }}
                    >
                        <AiOutlineHeart className="absolute top-1 right-1" />
                    </button>
                )}

                <PokemonImage id={id} />
            </div>
        </Link>
    );
}

PokemonCard.propTypes = {
    pokemon: ReactPropTypes.shape({
        name: ReactPropTypes.string,
        url: ReactPropTypes.string,
    }),
    isFavorite: ReactPropTypes.bool,
    onAddFavorite: ReactPropTypes.func,
    onRemoveFavorite: ReactPropTypes.func,
};
PokemonCard.defaultProps = {
    isFavorite: false,
};

export default PokemonCard;

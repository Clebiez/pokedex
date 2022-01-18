import ReactPropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonImage from './PokemonImage';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useAuth } from '../../services/provider/AuthProvider';
import propTypes from 'prop-types';

const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/|\//g;

const renderFavoriteButton = ({
    isFavorite,
    onRemoveFavorite,
    onAddFavorite,
    pokemon,
    isMaxFav,
}) => {
    return isFavorite === true ? (
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
            disabled={isMaxFav}
            onClick={(e) => {
                e.nativeEvent.stopPropagation();
                e.preventDefault();
                onAddFavorite(pokemon);
            }}
        >
            <AiOutlineHeart className="absolute top-1 right-1" />
        </button>
    );
};

function PokemonCard({ pokemon, isFavorite, onAddFavorite, onRemoveFavorite, isMaxFav }) {
    const id = pokemon.url.replace(regex, '');
    const { isLogged } = useAuth();

    return (
        <Link to={`/pokemon/${id}`}>
            <div className="relative w-full rounded-md bg-pink-400">
                <h2 className="w-full text-center">{pokemon.name}</h2>
                {isLogged &&
                    renderFavoriteButton({
                        isFavorite,
                        onAddFavorite,
                        onRemoveFavorite,
                        pokemon,
                        isMaxFav,
                    })}
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
    onAddFavorite: ReactPropTypes.func,
    onRemoveFavorite: ReactPropTypes.func,
    isFavorite: ReactPropTypes.bool,
    isMaxFav: propTypes.bool,
};
PokemonCard.defaultProps = {
    isFavorite: false,
};

export default PokemonCard;

import ReactPropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import usePokemon from '../../services/hook/usePokemon';
import PokemonImage from './PokemonImage';
import PokemonTypes from './PokemonTypes';

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
            data-testid={'full'}
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
            data-testid={'empty'}
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

function PokemonCard({
    pokemon,
    isFavorite,
    onAddFavorite,
    onRemoveFavorite,
    isMaxFav,
    isLogged,
}) {
    const id = pokemon.url.replace(regex, '');
    const { pokemon: pokemonDetails } = usePokemon(id);

    return (
        <Link to={`/pokemon/${id}`}>
            <div className="relative w-full rounded-md bg-pink-400 p-4">
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
                <PokemonTypes types={pokemonDetails?.types} />
            </div>
        </Link>
    );
}

PokemonCard.propTypes = {
    pokemon: ReactPropTypes.shape({
        name: ReactPropTypes.string,
        url: ReactPropTypes.string,
        types: ReactPropTypes.arrayOf({
            name: ReactPropTypes.string,
        }),
    }),
    onAddFavorite: ReactPropTypes.func,
    onRemoveFavorite: ReactPropTypes.func,
    isFavorite: ReactPropTypes.bool,
    isMaxFav: ReactPropTypes.bool,
    isLogged: ReactPropTypes.bool,
};
PokemonCard.defaultProps = {
    isFavorite: false,
};

export default PokemonCard;

import { Link, useParams } from 'react-router-dom';

import Loader from '../components/common/Loader';
import PokemonImage from '../components/Pokemon/PokemonImage';
import PokemonTypes from '../components/Pokemon/PokemonTypes';
import usePokemon from '../services/hook/usePokemon';

function PokemonDetails() {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemon(id);
    return (
        <>
            <Link to="/">
                <button className="btn btn-secondary ml-4">Retour</button>
            </Link>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h1 className="text-4xl font-extrabold text-center">
                        {pokemon?.name}
                    </h1>
                    <PokemonImage id={id} />
                    <PokemonTypes types={pokemon.types} />
                </>
            )}
        </>
    );
}

export default PokemonDetails;

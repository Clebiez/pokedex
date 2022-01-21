import { useState } from 'react';
import PropTypes from 'prop-types';

import getListPokemon from '../../services/pokeApi/getListPokemon';

import PokemonList from './PokemonList';
import PokemonCard from './PokemonCard';
import Loader from '../common/Loader';
import { useAuth } from '../../services/provider/AuthProvider';
import { useQuery } from 'react-query';
import useFavorites from '../../services/hook/useFavorites';

const Pokedex = ({ searchParams, setSearchParams, pokemonCardFooter }) => {
    const { isLogged } = useAuth();

    const { favorites: favPokemons, onAddFavorite, onRemoveFavorite } = useFavorites();
    const { data, isLoading } = useQuery(
        ['pokemons', searchParams],
        () => getListPokemon(`/pokemon?${searchParams}`),
        { keepPreviousData: true }
    );
    const pokemons = data?.data?.results;
    const nextPage = data?.data?.next;
    const previousPage = data?.data?.previous;

    const [searchValue, setSearchValue] = useState('');

    const isPokemonFavorite = (pokemon) => {
        return !!favPokemons?.find((favPokemon) => {
            return favPokemon.name === pokemon.name;
        });
    };

    const handleChangePage = (page) => {
        const url = new URL(page);
        setSearchParams(url.search);
    };

    const handleFilter = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    if (isLoading) return <Loader />;
    return (
        <>
            <div className="mt-6">
                <div className=" m-auto form-control w-44">
                    <input
                        type="text"
                        placeholder="Filter"
                        className="input input-sm input-bordered"
                        onChange={handleFilter}
                    />
                </div>
                <PokemonList pokemons={pokemons} searchValue={searchValue}>
                    {(pokemon) => (
                        <PokemonCard
                            pokemon={pokemon}
                            isFavorite={isPokemonFavorite(pokemon)}
                            onAddFavorite={onAddFavorite}
                            onRemoveFavorite={onRemoveFavorite}
                            isMaxFav={favPokemons.length >= 6}
                            isLogged={isLogged}
                            footer={pokemonCardFooter}
                        />
                    )}
                </PokemonList>

                <div className="flex items-center justify-center btn-group mt-6 m-auto">
                    <button
                        className="btn btn-outline btn-wide"
                        onClick={() => handleChangePage(previousPage)}
                        disabled={!previousPage}
                    >
                        Page précédente
                    </button>
                    <button
                        className="btn btn-outline btn-wide"
                        onClick={() => handleChangePage(nextPage)}
                        disabled={!nextPage}
                    >
                        Page suivante
                    </button>
                </div>
            </div>
        </>
    );
};

Pokedex.propTypes = {
    searchParams: PropTypes.string,
    setSearchParams: PropTypes.func,
    pokemonCardFooter: PropTypes.func,
};

export default Pokedex;

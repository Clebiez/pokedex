import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import getListPokemon from '../services/api/getListPokemon';
import getFavoritePokemons from '../services/fakeApi/getFavoritePokemons';
import removeFavoritePokemon from '../services/fakeApi/removeFavoritePokemon';
import addFavoritePokemon from '../services/fakeApi/addFavoritePokemon';

import PokemonList from '../components/Pokemon/PokemonList';
import PokemonCard from '../components/Pokemon/PokemonCard';
import Loader from '../components/common/Loader';
import { AiOutlineException } from 'react-icons/ai';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [favPokemons, setFavPokemons] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetchListPokemons(`/pokemon?${searchParams.toString()}`),
            fetchFavoritePokemons(),
        ]).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const handleNextClick = () => {
        if (nextPage) fetchListPokemons(nextPage);
    };

    const fetchListPokemons = useCallback(async (page) => {
        const res = await getListPokemon(page);

        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        setPokemons(res.data.results);
        try {
            const url = new URL(page);
            setSearchParams(url.search);
        } catch {
            return null;
        }
    }, []);

    const handlePreviousClick = () => {
        if (previousPage) fetchListPokemons(previousPage);
    };

    const handleFilter = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const onAddFavorite = async (pokemon) => {
        await addFavoritePokemon(pokemon);
        fetchFavoritePokemons();
    };

    const onRemoveFavorite = async (pokemon) => {
        await removeFavoritePokemon(pokemon);
        fetchFavoritePokemons();
        // console.log(res);
    };

    const fetchFavoritePokemons = useCallback(async () => {
        const res = await getFavoritePokemons();

        setFavPokemons(res.data.results);
    }, []);

    const isPokemonFavorite = (pokemon) => {
        return !!favPokemons?.find((favPokemon) => {
            return favPokemon.name === pokemon.name;
        });
    };

    if (isLoading) return <Loader />;
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center">Pokedex</h1>
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
                        />
                    )}
                </PokemonList>

                <div className="flex items-center justify-center btn-group mt-6 m-auto">
                    <button
                        className="btn btn-outline btn-wide"
                        onClick={handlePreviousClick}
                        disabled={!previousPage}
                    >
                        Page précédente
                    </button>
                    <button
                        className="btn btn-outline btn-wide"
                        onClick={handleNextClick}
                        disabled={!nextPage}
                    >
                        Page suivante
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;

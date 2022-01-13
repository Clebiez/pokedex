import getListPokemon from '../services/api/getListPokemon';
import { useCallback, useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { useSearchParams } from 'react-router-dom';
import removeFavoritePokemon from '../services/fakeApi/removeFavoritePokemon';
import addFavoritePokemon from '../services/fakeApi/addFavoritePokemon';

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getData(`/pokemon?${searchParams.toString()}`);
    }, []);

    const handleNextClick = () => {
        if (nextPage) getData(nextPage);
    };

    const getData = useCallback(async (page) => {
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
        if (previousPage) getData(previousPage);
    };

    const handleFilter = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const onAddFavorite = async (pokemon) => {
        const res = await addFavoritePokemon(pokemon);
        console.log(res);
    };

    const onRemoveFavorite = async (pokemon) => {
        const res = await removeFavoritePokemon(pokemon);

        console.log(res);
    };

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
                <ul className="w-full flex flex-wrap gap-2 justify-center my-4">
                    {pokemons?.map((pokemon) =>
                        pokemon.name.includes(searchValue) ? (
                            <li className="w-1/4" key={pokemon.name}>
                                <PokemonCard
                                    pokemon={pokemon}
                                    onAddFavorite={onAddFavorite}
                                    onRemoveFavorite={onRemoveFavorite}
                                />
                            </li>
                        ) : null
                    )}
                </ul>

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

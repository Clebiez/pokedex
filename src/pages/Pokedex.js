import { useSearchParams } from 'react-router-dom';
import Pokedex from '../components/Pokemon/Pokedex';

const PokedexPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <h1 className="text-4xl font-extrabold text-center">Pokedex</h1>
            <Pokedex
                searchParams={searchParams.toString()}
                setSearchParams={setSearchParams}
            />
        </>
    );
};

export default PokedexPage;

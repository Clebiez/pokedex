import getListPokemon from '../services/api/getListPokemon';

const Pokedex = () => {
    let pokemons = [];
    getListPokemon().then((res) => {
        pokemons = res.data;
        console.log(pokemons);
    });

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center">Pokedex</h1>
            <div className="mt-6">
                <div className=" m-auto form-control w-44">
                    <input
                        type="text"
                        placeholder="Filter"
                        className="input input-sm input-bordered"
                    />
                </div>
                <ul>
                    {pokemons?.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ul>
                <div className="flex items-center justify-center btn-group mt-6 m-auto">
                    <button className="btn btn-outline btn-wide">Page précédente</button>
                    <button className="btn btn-outline btn-wide">Page suivante</button>
                </div>
            </div>
        </div>
    );
};

export default Pokedex;

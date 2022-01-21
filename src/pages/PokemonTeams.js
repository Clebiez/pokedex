import { useQuery } from 'react-query';

import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import getTeamList from '../services/api/getTeamList';

import PokemonCard from '../components/Pokemon/PokemonCard';

function PokemonTeams() {
    const { data: teams } = useQuery(
        'teams',
        () => getTeamList().then((res) => res.data),
        {
            staleTime: Infinity,
        }
    );

    return (
        <div className="flex flex-col justify-around items-center max-w-screen-lg mx-auto">
            <h1 className="text-4xl">My teams</h1>
            <Link to="/teams/create" className="self-end">
                <button className="btn btn-primary ">Create new team</button>
            </Link>
            <ul className="w-full">
                {teams?.map((team) => {
                    return (
                        <li
                            key={team.id}
                            className="border-2 border-white rounded-lg my-4 p-4 bg-gray-800"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl">
                                    {team.name} ({team.category})
                                </h2>
                                <p>
                                    Created at:{' '}
                                    {team.createdAt &&
                                        format(new Date(team.createdAt), 'PP')}
                                </p>
                            </div>

                            <ul className="flex gap-2">
                                {team.pokemons?.map((pokemon) => {
                                    return (
                                        <li
                                            key={`${team.id}-${pokemon.name}`}
                                            className="w-1/6 pt-4"
                                        >
                                            <PokemonCard pokemon={pokemon} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PokemonTeams;

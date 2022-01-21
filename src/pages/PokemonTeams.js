import { useMutation, useQuery, useQueryClient } from 'react-query';

import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import getTeamList from '../services/api/getTeamList';

import PokemonCard from '../components/Pokemon/PokemonCard';
import { FaTrash } from 'react-icons/fa';
import { deleteTeam } from '../services/api/deleteTeam';

function PokemonTeams() {
    const queryClient = useQueryClient();
    const { data: teams, refetch } = useQuery(
        'teams',
        () => getTeamList().then((res) => res.data),
        {
            staleTime: Infinity,
        }
    );

    const deletedMutation = useMutation(deleteTeam, {
        onMutate: async (id) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries('teams');

            // Snapshot the previous value
            const previousTeams = queryClient.getQueryData('teams');

            // Optimistically update to the new value
            queryClient.setQueryData('teams', (old) =>
                old.filter((team) => team.id !== id)
            );

            // Return a context object with the snapshotted value
            return { previousTeams };
        },
        onSettled: refetch,
    });

    const onDeleteTeam = (id) => {
        deletedMutation.mutate(id);
    };

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
                                <button
                                    className="bg-gradient-to-l rounded-lg shadow text-white p-5"
                                    onClick={() => onDeleteTeam(team.id)}
                                >
                                    <FaTrash />
                                </button>
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

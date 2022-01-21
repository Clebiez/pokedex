import getTeamList from '../services/api/getTeamList';
import { useEffect, useState } from 'react';

function PokemonTeams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const fetchTeams = async () => {
            const res = await getTeamList();
            setTeams(res.data);
        };
        fetchTeams();
    }, []);
    return (
        <div className="flex flex-col justify-around items-center">
            <h1>My teams</h1>
            <button className="btn btn-primary">Create new team</button>
            <ul>
                {teams?.map((team) => {
                    return (
                        <li key={team.id}>
                            <h2>{team.name}</h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PokemonTeams;

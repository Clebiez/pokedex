import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import Pokedex from '../components/Pokemon/Pokedex';
import ToggleTeamButton from '../components/Pokemon/ToggleTeamButton';
import createTeam from '../services/api/createTeam';

const CreatePokemonTeam = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const createTeamMutation = useMutation(createTeam, {
        onSuccess: () => {
            queryClient.invalidateQueries('teams');
            navigate('/teams');
        },
    });
    const { register, handleSubmit } = useForm();
    const [team, setTeam] = useState([]);
    const onSubmit = async (data) => {
        data.pokemons = team;
        createTeamMutation.mutate(data);
    };

    const onAddToTeam = (pokemon) => {
        setTeam([...team, pokemon]);
    };

    const onRemoveFromTeam = (pokemon) => {
        setTeam(team.filter((pokemonInArr) => pokemon.name !== pokemonInArr.name));
    };

    return (
        <div className="flex flex-col justify-around items-center max-w-screen-lg mx-auto">
            {createTeamMutation.isSuccess && <h2>La team a été sauvegardée</h2>}
            <h1 className="text-4xl">New team !</h1>
            <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control my-4">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="input input-primary"
                        type="text"
                        {...register('name', { required: true })}
                    ></input>
                </div>
                <select
                    className="select select-bordered"
                    {...register('category', { required: true })}
                >
                    <option value="fight">Fight</option>
                    <option value="style-contest">Style Contest</option>
                    <option value="farm">Farm</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Save
                </button>
            </form>
            <Pokedex
                pokemonCardFooter={(pokemon) => {
                    return (
                        <ToggleTeamButton
                            team={team}
                            setTeam={setTeam}
                            pokemon={pokemon}
                            onRemoveFromTeam={onRemoveFromTeam}
                            onAddToTeam={onAddToTeam}
                        />
                    );
                }}
            />
        </div>
    );
};

CreatePokemonTeam.propTypes = {};

export default CreatePokemonTeam;

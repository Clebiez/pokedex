// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

import { useForm } from 'react-hook-form';
import { useState } from 'react/cjs/react.development';
import Pokedex from '../components/Pokemon/Pokedex';
import ToggleTeamButton from '../components/Pokemon/ToggleTeamButton';
import createTeam from '../services/api/createTeam';

const CreatePokemonTeam = () => {
    const { register, handleSubmit } = useForm();
    const [team, setTeam] = useState([]);

    const onSubmit = (data) => {
        createTeam(data);
    };

    const addToTeam = (pokemon) => {
        setTeam([...team, pokemon]);
    };

    const removeFromTeam = (pokemon) => {
        setTeam(team.filter((pokemonInArr) => pokemon.name === pokemonInArr.name));
    };

    return (
        <div className="flex flex-col justify-around items-center max-w-screen-lg mx-auto">
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
                pokemonCardFooter={
                    <ToggleTeamButton
                        isInTeam={isPokemonInTeam}
                        onRemoveFromTeam={removeFromTeam}
                        onAddToTeam={addToTeam}
                        pokemon={pokemon}
                    />
                }
            />
        </div>
    );
};

CreatePokemonTeam.propTypes = {};

export default CreatePokemonTeam;

// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

import { useForm } from 'react-hook-form';
import createTeam from '../services/api/createTeam';

const CreatePokemonTeam = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        createTeam(data);
    };

    return (
        <div className="flex flex-col justify-around items-center max-w-screen-lg mx-auto">
            <h1 className="text-4xl">New team !</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>
    );
};

CreatePokemonTeam.propTypes = {};

export default CreatePokemonTeam;

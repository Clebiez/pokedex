import PropTypes from 'prop-types';
import pokemonPropTypes from '../../propTypes/pokemonPropTypes';

const ToggleTeamButton = ({ pokemon, team, onRemoveFromTeam, onAddToTeam }) => {
    const isPokemonInTeam = (pokemon) => {
        return !!team.find((pokemonInArr) => pokemonInArr.name === pokemon.name);
    };

    return isPokemonInTeam(pokemon) ? (
        <button
            className="btn btn-error mt-2 w-full"
            onClick={(e) => {
                e.nativeEvent.stopPropagation();
                e.preventDefault();
                onRemoveFromTeam(pokemon);
            }}
        >
            Remove from my team
        </button>
    ) : (
        <button
            disabled={team.length >= 6}
            className="btn btn-primary mt-2 w-full"
            onClick={(e) => {
                e.nativeEvent.stopPropagation();
                e.preventDefault();
                onAddToTeam(pokemon);
            }}
        >
            Add to my team
        </button>
    );
};

ToggleTeamButton.propTypes = {
    team: PropTypes.arrayOf(pokemonPropTypes),
    pokemon: pokemonPropTypes,
    onRemoveFromTeam: PropTypes.func,
    onAddToTeam: PropTypes.func,
};

export default ToggleTeamButton;

import PropTypes from 'prop-types';
import pokemonPropTypes from '../../propTypes/pokemonPropTypes';

export default ToggleTeamButton = ({
    isInTeam,
    onRemoveFromTeam,
    onAddToTeam,
    pokemon,
}) => {
    return isInTeam === true ? (
        <button
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
    isInTeam: PropTypes.bool,
    onRemoveFromTeam: PropTypes.func,
    onAddToTeam: PropTypes.func,
    pokemon: pokemonPropTypes,
};

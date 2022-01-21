import PropTypes from 'prop-types';

export default PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    types: PropTypes.arrayOf({
        name: PropTypes.string,
    }),
});

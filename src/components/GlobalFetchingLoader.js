import propTypes from 'prop-types';
import { useIsFetching } from 'react-query';

const GlobalFetchingLoader = ({ children }) => {
    const isFetching = useIsFetching();
    return (
        <>
            {isFetching > 0 && <div>Loading...</div>}
            {children}
        </>
    );
};

GlobalFetchingLoader.propTypes = {
    children: propTypes.node,
};

export default GlobalFetchingLoader;

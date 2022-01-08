import { isLogged } from './login';

const getFavoritePokemons = () => {
    try {
        if (!isLogged) {
            return Promise.reject({
                status: 401,
                message: 'User is not logged',
            });
        }
        const favorites = localStorage.getItem('favorites');
        return Promise.resolve({
            status: 200,
            data: {
                results: JSON.parse(favorites),
            },
        });
    } catch {
        return Promise.resolve({
            status: 200,
            data: {
                results: [],
            },
        });
    }
};

export default getFavoritePokemons;

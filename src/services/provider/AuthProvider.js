import React, { useContext, useState } from 'react';
import { login, logout, isLogged as isConnected } from '../fakeApi/login';
import PropTypes from 'prop-types';

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(isConnected);
    const apiLogin = () => {
        login();
        setIsLogged(true);
    };
    const apiLogout = () => {
        logout();
        setIsLogged(false);
    };
    return (
        <AuthContext.Provider value={{ isLogged, apiLogin, apiLogout }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);

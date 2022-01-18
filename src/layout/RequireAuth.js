import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/provider/AuthProvider';

const RequireAuth = () => {
    const { isLogged } = useAuth();

    if (!isLogged) return <Navigate to="/" />;

    return <Outlet />;
};

export default RequireAuth;

import { useAuth } from '../../services/provider/AuthProvider';

const NavBar = () => {
    const { apiLogin, apiLogout, isLogged } = useAuth();
    return (
        <div className="navbar fixed w-full mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">Packémon</span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost btn-sm rounded-btn">Pokédex</a>
                    {isLogged && (
                        <a className="btn btn-ghost btn-sm rounded-btn">Favoris</a>
                    )}
                    <a className="btn btn-ghost btn-sm rounded-btn">A propos</a>
                </div>
            </div>
            <div className="navbar-end">
                {isLogged ? (
                    <button
                        className="btn btn-ghost btn-sm rounded-btn"
                        onClick={apiLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        className="btn btn-ghost btn-sm rounded-btn"
                        onClick={apiLogin}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default NavBar;

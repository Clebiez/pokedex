import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { useAuth } from '../../services/provider/AuthProvider';
import useNavBarScroll from '../../services/hook/useNavBarScroll';

const CustomLink = ({ to, children }) => {
    const resolve = useResolvedPath(to);
    const match = useMatch({ path: resolve.pathname });
    const linkClass = classNames('btn btn-ghost btn-sm rounded-btn', {
        'btn-active': match,
    });
    return (
        <Link to={to} className={linkClass}>
            {children}
        </Link>
    );
};

CustomLink.propTypes = {
    to: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

const NavBar = () => {
    const { ref } = useNavBarScroll();

    const { apiLogin, apiLogout, isLogged } = useAuth();

    return (
        <div
            ref={ref}
            className="navbar overflow-hidden z-10 fixed w-full mb-2 shadow-lg bg-neutral text-neutral-content transition-all"
        >
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">Packémon</span>
            </div>
            <div className="flex px-2 mx-2 navbar-center">
                <div className="flex items-stretch">
                    <CustomLink to="/">Pokédex</CustomLink>
                    {isLogged && <CustomLink to="/favorites">Favoris</CustomLink>}
                    <CustomLink to="/about">A propos</CustomLink>
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

import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Transition } from '@headlessui/react';
import { FaHamburger } from 'react-icons/fa';

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
        <Popover className="relative">
            <div
                ref={ref}
                className="navbar overflow-hidden z-10 fixed w-full mb-2 shadow-lg bg-neutral text-neutral-content transition-all"
            >
                <div className="px-2 mx-2 navbar-start">
                    <Popover.Button className="md:hidden">
                        <FaHamburger />
                    </Popover.Button>
                    <span className="text-lg font-bold">Packémon</span>
                </div>
                <div className="flex px-2 mx-2 navbar-center">
                    <div className="hidden md:flex items-stretch">
                        <CustomLink to="/">Pokédex</CustomLink>
                        {isLogged && (
                            <>
                                <CustomLink to="/favorites">Favoris</CustomLink>
                                <CustomLink to="/teams">My teams</CustomLink>
                            </>
                        )}
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
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="fixed top-16 bg-purple-900 text-black p-2 z-50 w-full">
                    <div className="flex flex-col md:hidden items-stretch">
                        <CustomLink to="/">Pokédex</CustomLink>
                        {isLogged && (
                            <>
                                <CustomLink to="/favorites">Favoris</CustomLink>
                                <CustomLink to="/teams">My teams</CustomLink>
                            </>
                        )}
                        <CustomLink to="/about">A propos</CustomLink>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default NavBar;

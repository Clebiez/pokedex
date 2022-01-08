// import { isLogged, login, logout } from '../../services/fakeApi/login';

const NavBar = () => {
    return (
        <div className="navbar fixed w-full mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">Packémon</span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center lg:flex">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost btn-sm rounded-btn">Pokédex</a>
                    <a className="btn btn-ghost btn-sm rounded-btn">Favoris</a>
                    <a className="btn btn-ghost btn-sm rounded-btn">A propos</a>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-sm rounded-btn">Login</button>
            </div>
        </div>
    );
};

export default NavBar;

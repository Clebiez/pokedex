import NavBar from '../components/common/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    console.log(props);

    return (
        <div>
            <NavBar />
            <div className="pt-24">
                <Outlet />
            </div>
        </div>
    );
};

Layout.propTypes = {};

export default Layout;

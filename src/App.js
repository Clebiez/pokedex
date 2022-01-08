import { Routes, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import NavBar from './components/common/NavBar';
function App() {
    return (
        <>
            <NavBar />
            <div className="pt-24">
                <Routes>
                    <Route path="/" element={<Pokedex />} />
                </Routes>
            </div>
        </>
    );
}

export default App;

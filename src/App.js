import { Routes, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import Lab from './pages/Lab';
import NavBar from './components/common/NavBar';
import AuthProvider from './services/provider/AuthProvider';
function App() {
    return (
        <AuthProvider>
            <NavBar />
            <div className="pt-24">
                <Routes>
                    <Route path="/" element={<Pokedex />} />
                    <Route path="/lab" element={<Lab />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;

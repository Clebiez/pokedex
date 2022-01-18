import { Routes, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import FavoritePokemons from './pages/FavoritePokemons';
import Lab from './pages/Lab';
import AuthProvider from './services/provider/AuthProvider';
import Layout from './layout/Layout';
import ProtectedRoute from './layout/RequireAuth';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Pokedex />} />
                    <Route path="/lab" element={<Lab />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/favorites" element={<FavoritePokemons />} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;

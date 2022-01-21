import { Routes, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import FavoritePokemons from './pages/FavoritePokemons';
import Lab from './pages/Lab';
import AuthProvider from './services/provider/AuthProvider';
import Layout from './layout/Layout';
import ProtectedRoute from './layout/RequireAuth';
import PokemonTeams from './pages/PokemonTeams';
import CreatePokemonTeam from './pages/CreatePokemonTeam';

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
                        <Route path="/teams" element={<PokemonTeams />} />
                        <Route path="/teams/create" element={<CreatePokemonTeam />} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;

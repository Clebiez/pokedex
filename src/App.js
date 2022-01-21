import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import AuthProvider from './services/provider/AuthProvider';

import ProtectedRoute from './layout/RequireAuth';
import Layout from './layout/Layout';

import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import FavoritePokemons from './pages/FavoritePokemons';
import Lab from './pages/Lab';
import PokemonTeams from './pages/PokemonTeams';
import CreatePokemonTeam from './pages/CreatePokemonTeam';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalFetchingLoader from './components/GlobalFetchingLoader';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <GlobalFetchingLoader>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Pokedex />} />
                            <Route path="/lab" element={<Lab />} />
                            <Route path="/pokemon/:id" element={<PokemonDetails />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path="/favorites" element={<FavoritePokemons />} />
                                <Route path="/teams" element={<PokemonTeams />} />
                                <Route
                                    path="/teams/create"
                                    element={<CreatePokemonTeam />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </GlobalFetchingLoader>
            </AuthProvider>
            <ReactQueryDevtools initialisOpen />
        </QueryClientProvider>
    );
}

export default App;

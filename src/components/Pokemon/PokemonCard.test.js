import { fireEvent, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';
import renderWithRouter from '../../testUtils';

test('pokemon name to be in document', () => {
    const pikachu = { name: 'Pikachu', url: 'url de pikachu' };
    renderWithRouter(<PokemonCard pokemon={pikachu} isLogged={true} />);
    const titleElement = screen.getByText(/Pikachu/i);
    expect(titleElement).toBeInTheDocument();
});

test('no heart when isLogged is false', () => {
    const pikachu = { name: 'Pikachu', url: 'url de pikachu' };
    renderWithRouter(<PokemonCard pokemon={pikachu} isLogged={false} />);
    const buttonElement = screen.queryByRole('button');
    expect(buttonElement).not.toBeInTheDocument();
});

test('heart when isLogged is true', () => {
    const pikachu = { name: 'Pikachu', url: 'url de pikachu' };
    renderWithRouter(<PokemonCard pokemon={pikachu} isLogged={true} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
});

test('heart is full if pokemon is favorite', () => {
    const onRemoveFavorite = jest.fn();
    const pikachu = { name: 'Pikachu', url: 'url de pikachu' };
    renderWithRouter(
        <PokemonCard
            onRemoveFavorite={onRemoveFavorite}
            pokemon={pikachu}
            isLogged={true}
            isFavorite={true}
        />
    );
    const iconElement = screen.getByTestId('full');
    expect(iconElement).toBeInTheDocument();
    fireEvent.click(iconElement);
    expect(onRemoveFavorite).toHaveBeenCalledTimes(1);
    expect(onRemoveFavorite).toHaveBeenCalledWith(pikachu);
});

test('heart is empty if pokemon is favorite', () => {
    const onAddFavorite = jest.fn();
    const pikachu = { name: 'Pikachu', url: 'url de pikachu' };
    renderWithRouter(
        <PokemonCard
            pokemon={pikachu}
            onAddFavorite={onAddFavorite}
            isLogged={true}
            isFavorite={false}
        />
    );
    const iconElement = screen.getByTestId('empty');
    expect(iconElement).toBeInTheDocument();
    fireEvent.click(iconElement);
    expect(onAddFavorite).toHaveBeenCalledTimes(1);
    expect(onAddFavorite).toHaveBeenCalledWith(pikachu);
});

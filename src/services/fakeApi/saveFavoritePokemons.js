const saveFavoritePokemons = (pokemons) => {
    localStorage.setItem('favorites', JSON.stringify(pokemons));
};

export default saveFavoritePokemons;

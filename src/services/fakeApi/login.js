export let isLogged = localStorage.getItem('isLogged');
export const login = () => {
    localStorage.setItem('isLogged', true);
    isLogged = true;
};

export const logout = () => {
    localStorage.removeItem('isLogged');
    isLogged = false;
};

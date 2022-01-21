import apiClient from './apiClient';

const createTeam = (team) => {
    return apiClient.post('/teams', { ...team, createdAt: new Date().toISOString() });
};

export default createTeam;

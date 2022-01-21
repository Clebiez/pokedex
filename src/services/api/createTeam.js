import apiClient from './apiClient';

const createTeam = (team) => {
    team.createdAt = new Date(Date.now()).toLocaleDateString();
    return apiClient.post('/teams', team);
};

export default createTeam;

import apiClient from './apiClient';

const getTeamList = () => {
    return apiClient.get('/teams');
};

export default getTeamList;

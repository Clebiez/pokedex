import apiClient from './apiClient';

export const deleteTeam = (id) => apiClient.delete(`/teams/${id}`);

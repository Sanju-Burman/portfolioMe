import { request } from './client';

export const portfolioApi = {
    fetchAbout: (userId) => request(`/api/about/${userId}`),
    fetchSkills: (userId) => request(`/api/skills/${userId}`),
    fetchProjects: (userId) => request(`/api/project/${userId}`),
    fetchExperience: (userId) => request(`/api/experience/${userId}`),
    fetchEducation: (userId) => request(`/api/education/${userId}`),
    submitContactMessage: (payload) => request('/api/contact', {
        method: 'POST',
        body: payload
    }),
};

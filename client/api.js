// api.js
const API_URL = '/api';

export const fetchReports = async () => {
    const response = await fetch(`${API_URL}/reports`);
    return response.json();
};

export const submitReport = async (reportData) => {
    const response = await fetch(`${API_URL}/reports`, {
        method: 'POST',
        body: reportData
    });
    return response.json();
};

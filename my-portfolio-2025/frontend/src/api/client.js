const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export async function request(endpoint, options = {}) {
    const { headers = {}, body, ...customConfig } = options;
    const config = {
        method: body ? 'POST' : 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        ...customConfig,
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new Error(data.message || 'Something went wrong');
    } catch (error) {
        return Promise.reject(error.message || error);
    }
}

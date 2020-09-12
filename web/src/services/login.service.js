import axios from 'axios'

const api = axios.request({
    baseURL: 'http://localhost:3333',
});

export default api;

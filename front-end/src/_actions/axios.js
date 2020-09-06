import axios from 'axios';
import {SERVER_URI} from "../config";

const instance = axios.create({
    baseURL: `${SERVER_URI}`,
    responseType: 'json'
});

// Set the AUTH token for any request
instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default instance;

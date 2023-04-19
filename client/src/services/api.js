import axios from 'axios';

const API_URL = 'http://localhost:1000/auth/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
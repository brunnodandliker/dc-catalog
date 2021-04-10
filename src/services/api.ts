import axios from 'axios';

const baseURL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'

const api = axios.create({
    baseURL
})

export default api;
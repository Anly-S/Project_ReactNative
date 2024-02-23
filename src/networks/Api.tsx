import axios from 'axios';

let api = axios.create();
api.defaults.baseURL = 'http://172.16.3.145:3000';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;

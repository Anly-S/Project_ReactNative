import axios from 'axios';

let api = axios.create();
api.defaults.baseURL = 'http://192.168.43.116:3000';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;

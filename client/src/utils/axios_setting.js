import axios from 'axios';

axios.create({
    baseURL: 'http://172.22.20.78:9000',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axios.defaults.baseURL = 'http://172.22.20.78:9000';
export default axios;

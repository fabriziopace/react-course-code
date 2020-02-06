import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-158fd.firebaseio.com/'
});

export default instance;
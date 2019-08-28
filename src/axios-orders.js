import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connectome-project.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-butger.firebaseio.com/"
});

export default instance;
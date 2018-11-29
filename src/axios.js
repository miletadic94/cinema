import axios from 'axios';

const createInstance =  axios.create({
    baseURL: 'http://82.117.211.142:8080/crowdfunding/',
})

export default createInstance;


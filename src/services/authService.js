import axios from 'axios';
import axiosApi from '../axios';

export const ACCESS_TOKEN_KEY = 'token';

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const setAccessToken = (token) => {
    axios.defaults.headers.common['Authorization'] = 'JWT' + token;
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const loginService = (data) => {
    return axiosApi.post('/login', data)
}

export const logoutService = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}
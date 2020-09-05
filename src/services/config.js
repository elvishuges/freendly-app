
// eslint-disable-next-line
/* eslint-disable */
var axios = require('axios');
const USER_TOKEN = localStorage.getItem('user-token')
import { getToken } from '../store/utils/token'

export const baseURL = 'http://localhost:3000'

export const api = axios.create({
    baseURL: baseURL,
    /* other custom settings */
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token':getToken()
    }
})
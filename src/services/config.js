
// eslint-disable-next-line
/* eslint-disable */
var axios = require('axios');

export const baseURL = 'http://localhost:3000'

export const api = axios.create({
    baseURL: baseURL,
    /* other custom settings */
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})
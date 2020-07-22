
// eslint-disable-next-line
/* eslint-disable */
var axios = require('axios');

export const baseURL = 'https://reqres.in/api/'

export const api = axios.create({
    baseURL: baseURL,
    /* other custom settings */
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})
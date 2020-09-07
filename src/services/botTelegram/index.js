
import axios from 'axios';
import  {telegrambaseBotURL}  from './../config'

export const apiBot = axios.create({
    baseURL: telegrambaseBotURL,
    /* other custom settings */
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})
import { getToken } from './../../store/utils/token'
import  { freendlyApiBaseURL }  from './../config'
import axios from 'axios';
//import  router from './../router';
//var showAlert = true

const freendlyApi = axios.create({
    baseURL: freendlyApiBaseURL, // service base_url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-access-token': getToken()
    }
});

export default freendlyApi
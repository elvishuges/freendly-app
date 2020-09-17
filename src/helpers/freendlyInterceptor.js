//import axios from 'axios';
import freendly from "../services/freendly";
import { getToken } from '../store/utils/token'
import { AUTH_LOGOUT } from "./../store/actions/auth";
import { CLEAN_COMPANY_DATE } from "./../store/actions/user";
// //import  router from './../router';
import  store from './../store';
var showAlert = true
export default function setup() {

  freendly.interceptors.request.use((request) => {
    if (getToken()) {
      request.headers['x-access-token'] = getToken() // cada solicitação carrega o token - ['Authorization'] como a chave personalizada. Modifique-o de acordo com a situação real.
    }
    return request;
  }, error => {
    // Do something with request error
    console.log('request', error) // for debug
    Promise.reject(error)
   });

   freendly.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  },(error) => {
    // Do something with response error
     var err = String(error)

     if (err.includes('Network')) {
            store.dispatch(AUTH_LOGOUT).then(() => {
                  store.dispatch(CLEAN_COMPANY_DATE)
            });
          if (showAlert) {
            alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.')
           // window.location.reload()
          }
      }
    throw error;
  });

}
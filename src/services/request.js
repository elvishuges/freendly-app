// import axios from 'axios'
// import { getToken, setToken } from '../store/utils/token'
// import { baseURL } from './config'
// var showAlert = true
// // create an axios instance
// const service = axios.create({
//   baseURL: baseURL, // api base_url,
//   // timeout: 15000 // request timeout
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     'x-access-token': getToken()
//   }

// })

// // request interceptor
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   if (getToken()) {
//     config.headers['x-access-token'] = getToken() // cada solicitação carrega o token - ['Authorization'] como a chave personalizada. Modifique-o de acordo com a situação real.
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log('request', error) // for debug
//   Promise.reject(error)
// })

// // respone interceptor
// service.interceptors.response.use(
//   response => {
//     // console.log("request-response: ",response) // for debug
//     showAlert = true
//     // console.log("response",response)
//     return response
//   },
//   error => {
//     var err = String(error)
//     console.log("ANTES");

//     if (err.includes('203')) {

//       this.$router.push("/login");
//       if (showAlert) {
//         alert('Sua sessão expirou.')
//       }
//     }
//     else if (err.includes('401')) {
//       setToken('')
//       this.$router.push("/login");
//       if (showAlert) {
//         alert('Sua sessão expirou.')
//       }
//     } else if (err.includes('Network')) {
//       if (showAlert) {
//         alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.')
//       }
//     } else {
//       if (showAlert) {
//         alert(error)// for debug
//       }
//     }
//     console.log("#ERROR INTERCEPTOR#", error)
//     showAlert = false
//     return Promise.reject(error)
//   })

// export default service
import { getToken } from './../store/utils/token'
import  {freendlyApiBaseURL}  from './config'
import axios from 'axios';
//import  router from './../router';
//var showAlert = true

const freendlyAapi = axios.create({
    baseURL: freendlyApiBaseURL, // service base_url,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-access-token': getToken()
    }
});

// freendlyAapi.interceptors.request.use((request) => {
//     if (getToken()) {
//       request.headers['x-access-token'] = getToken() // cada solicitação carrega o token - ['Authorization'] como a chave personalizada. Modifique-o de acordo com a situação real.
//     }
//     return request;
//   }, error => {
//     // Do something with request error
//     console.log('request', error) // for debug
//     Promise.reject(error)
//    });

//    service.interceptors.response.use((response) => {
//     // Do something with response data
//     return response;
//   },(error) => {
//     // Do something with response error
//      var err = String(error)

//      if (err.includes('Network')) {
//        console.log("REMOVE TOKEN net error");
//           removeToken()
//           if (showAlert) {
//             alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.')

//           }
//       }

//     // You can even test for a response code
//     // and try a new request before rejecting the promise

//     //return Promise.reject(error);
//     throw error;
//   });

export default freendlyAapi
// Here the pdfInstance extends the api instance so the pdfInstance has also access to the request interceptor but is also able to override the baseURL and adding additional header such as Accept

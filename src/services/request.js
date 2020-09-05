import axios from 'axios'
// import store from '../store/store'
// import router from '../router'
import { getToken, setToken } from '../store/utils/token'
import { baseURL } from './config'
var showAlert = true
// create an axios instance
const service = axios.create({
  baseURL: baseURL, // api base_url,
  // timeout: 15000 // request timeout
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'x-access-token':getToken()
}

})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (getToken()) {
    config.headers['x-access-token'] = getToken() // cada solicitação carrega o token - ['Authorization'] como a chave personalizada. Modifique-o de acordo com a situação real.
  }
  return config
}, error => {
  // Do something with request error
  console.log('request', error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    // console.log("request-response: ",response) // for debug
    showAlert = true
    // console.log("response",response)
    return response
  },
  error => {
    var err = String(error)

    if (err.includes('401')) {
      setToken('')
      this.$router.push('/login')
      if (showAlert) {
        alert('Sua sessão expirou.')
      }
    } else if (err.includes('Network')) {
      if (showAlert) {
        alert('Não foi possível conectar ao servidor. Tente novamente mais tarde.')
      }
    } else {
      if (showAlert) {
        alert(error)// for debug
      }
    }
    /*
    alert({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    */
    console.log(err)
    showAlert = false
    return Promise.reject(error)
  })

export default service

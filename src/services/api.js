import { api } from './config'

export default {

        login(email, password) {
            console.log('*log*',email,password);
            var obj = {
                email: email,
                password: password,
            }
            return api.post('/login', obj)
        },

}
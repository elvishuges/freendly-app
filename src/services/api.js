import { api } from './config'

export default {

        login(email, password) {
            var obj = {
                email: email,
                password: password,
            }
            return api.post('/login', obj)
        },
        register(nome, email, nick, senha) {
            var obj = {
                nome: nome,
                email: email,
                nick: nick,
                senha: senha,
            }
            return api.post('/register', obj)
        },

}
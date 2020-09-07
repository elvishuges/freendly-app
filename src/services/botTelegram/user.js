import request from './index'

export default {

        login(email, senha) {
            var obj = {
                email: email,
                senha: senha,
            }

            return request({
                url: '/login',
                method: 'post',
                data : obj
              })

        },
        register(nome, email, nick, senha) {
            var obj = {
                nome: nome,
                email: email,
                nick: nick,
                senha: senha,
            }
            return request({
                url: '/register',
                method: 'post',
                data : obj
            })
        },

}
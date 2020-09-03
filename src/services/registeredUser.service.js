import request from './request'

export default {

        cadastrarProjeto(nome, descricao,salario,encontrosSemanais,
            linguagensProgramacao,ativo,
            Imagem) {
            var obj = {
                nome: nome,
                descricao: descricao,
                salario: salario,
                encontrosSemanais: encontrosSemanais,
                linguagens: linguagensProgramacao,
                ativo:ativo,
                file: Imagem,
            }
            return request({
                url: '/cadastrarProjeto',
                method: 'post',
                data : obj
            })
        },

        numProjetosCriados(nome, descricao,salario){
            var obj = {
                nome: nome,
                descricao: descricao,
                salario: salario,
            }
            return request({
                url: '/numCreatedProjectByUser',
                method: 'get',
                data : obj
            })
        },

        getEmpresa(userId){

            return request({
                url: `/user/${userId}/empresa/`,
                method: 'get',
            })
        },


}
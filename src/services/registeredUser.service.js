import request from './request'

export default {

        createProject(nome, descricao,salario,encontrosSemanais,
            linguagensProgramacao,ativo,
            file) {
            // var obj = {
            //     nome: nome,
            //     descricao: descricao,
            //     salario: salario,
            //     encontrosSemanais: encontrosSemanais,
            //     linguagens: linguagensProgramacao,
            //     ativo:ativo,
            // }

            return request.post("/createProject", file, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }

              });
        },

        getUserAmountProjects(){
            return request({
                url: '/user/projects',
                method: 'get',
            })
        },

        getUserCompany(){
            return request({
                url: '/user/company/',
                method: 'get',
            })
        },

}




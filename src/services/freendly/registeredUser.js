import request from './'

export default {

        createProject(nome, descricao,salario,encontrosSemanais,
            linguagensProgramacao,ativo,
            file) {
                var info = {
                    nome: nome,
                    descricao: descricao,
                    salario: salario,
                    encontrosSemanais: encontrosSemanais,
                    linguagens: linguagensProgramacao,
                    ativo:ativo,
                }

            return request.post("/createProject", file, {
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                infoImage: {
					info: info
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




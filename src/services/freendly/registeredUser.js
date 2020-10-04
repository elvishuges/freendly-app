import request from './'
import { getToken } from './../../store/utils/token'

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
                console.log("BOOLL",info)

            return request.post("/createProject", file, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  'Access-Control-Allow-Origin': '*',
                  'Accept' : 'application/json',
                  'x-access-token': getToken()
                },
                params: {
                    nome: nome,
                    descricao: descricao,
                    salario: salario,
                    encontrosSemanais: encontrosSemanais,
                    linguagens: linguagensProgramacao,
                    ativo:ativo,
                }
              });
        },

        getUserAmountProjects(){ // acessando os dados atravez do token !!!
            return request({
                url: '/user/amountProjects',
                method: 'get',
            })
        },

        getUserCompany(){
            return request({
                url: '/user/company/',
                method: 'get',
            })
        },
        getUserProjects(){
            return request({
                url: '/user/projects/',
                method: 'get',
            })
        },

        getUserProject(idProject){
            return request({
                url: `/user/project/${idProject}`,
                method: 'get',
            })
        },
        createProjectTask(idProject) { //ok
            console.log('createProjectTask',idProject)
             var obj = {
                 idProject: idProject,
             } 
             return request({
                url: '/user/project/task',
                method: 'post',
                data : obj
              }) 
           
        },

}




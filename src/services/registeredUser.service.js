import { api } from './config'

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
            return api.post('/cadastrarProjeto', obj)
        },


}
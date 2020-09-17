/** * Created by vouill on 11/13/17. */

<template>
  <v-container>
    <v-flex xs12>
      <v-card elevation="0">

        <v-card-text>
          <v-card-title>
            <span class="font-weight-medium">Criar projeto ({{createdProjects }}/4)</span>
          </v-card-title>
          <v-form ref="form" enctype="multipart/form-data" method="POST" v-model="valid">
            <v-container>
              <v-row>
                <v-col class="pt-0 pb-0">
                  <v-text-field v-model="nome" :rules="nomeRules" label="Nome" required outlined></v-text-field>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12">
                  <v-textarea
                    outlined
                    :rules="descricaoRules"
                    maxlength="100"
                    counter
                    v-model="descricaoProjeto"
                  >
                    <template v-slot:label>
                      <div>
                        Descrição
                        <small>(Breve)</small>
                      </div>
                    </template>
                  </v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    v-model="selectedItensLinguagens"
                    :items="itensLinguagens"
                    :rules="linguagensRules"
                    label="Linguagens de programação"
                    multiple
                    outlined
                    chips
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                      >
                        <v-avatar
                          class="accent white--text"
                          left
                          v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-col>

                <v-col class="pt-0 pb-0" cols="12" sm="6">
                  <v-text-field
                    label="Salário (R$)"
                    outlined
                    prepend-icon
                    v-model="salarioBase"
                    :rules="iSal_BaseRules"
                    v-money="money"
                    required
                  ></v-text-field>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12" sm="6">
                  <v-text-field
                    v-model="numEncontros"
                    outlined
                    :rules="encontrosRules"
                    type="number"
                    editable
                    label="Encontro(s) semanais"
                  ></v-text-field>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12">
                  <v-file-input
                    v-model="fileInputModel"
                    @change="onFileChange($event)"
                    :rules="fileInputRules"
                    outlined
                    id="image"
                    ref="files"
                    type="file"
                    name="file"
                    accept="image/*"
                    label="Imagem"
                  ></v-file-input>
                </v-col>
             <v-col class="pt-0 pb-0" cols="12">
                <v-checkbox
                  v-model="checkAtivo"
                  label="Projeto ativo "
                  required
                ></v-checkbox>
             </v-col>
              </v-row>
            </v-container>
            <v-card-actions class="pt-0 pb-0">
              <v-spacer></v-spacer>
              <v-btn large :rounded="false" dark color="primary" @click="createProject">Cadastrar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
import { VMoney } from "v-money";
import registeredUserService from "./../../services/freendly/registeredUser";

export default {
  name: "login",
  directives: { money: VMoney },
  data() {
    return {
      checkAtivo:true,
      createdProjects:0,
      nome: "freendly",
      itensLinguagens: ["React Native", "nodejs", "Vue js", "GraphQL"],
      selectedItensLinguagens: [],
      descricaoProjeto:
        "Olá estamos com vagas abertas para projeto com Graphql",
      numEncontros: 3,
      nick: "cityslicka",
      email: "",
      senha: "",
      valid: true,
      salarioBase: "5000",
      fileInputModel: null,
      money: {
        decimal: ",",
        max: 100,
        error: false,
        precision: 2,
        masked: false /* doesn't work with directive */,
      },

      url: null,
      submitFormData: null,
      file: null,

      nomeRules: [
        (v) => !!v || "Sua Projeto deve possuir um nome",
        (v) => (v && v.length <= 13) || "Nome deve ter menos de 14 caracteres",
      ],
      descricaoRules: [(v) => !!v || "Seu projeto deve possuir uma descrição"],
      linguagensRules: [
        (v) =>
          !!v.length ||
          "Seu projeto deve possuir alguma linguagem para o desenvolvimento",
        (v) => (v && v.length <= 4) || "Apenas 4 itens por projetos",
      ],
      iSal_BaseRules: [
        //(v) => !!v || "Salario base es requerido",
        (v) => v.length < 7 || "Este campo deve ter menos de 6 digitos",
        (v) =>
          this.validSalary(v) ||
          "Salario deve ser superior a 0 e inferior o igual a 100 R$",
      ],
      encontrosRules: [
        (v) => !!v || "Error Dado obrigatório ",
        (v) => v >= 0 || "Error",
        (v) => v <= 5 || "Deve ter menos que 6 reuniões semanais",
      ],
      fileInputRules: [(v) => !!v || "Imagem obrigatória"],
    };
  },
  mounted () {
    this.getUserAmountProjects()
  },

  methods: {
    createProject() {
      if (this.$refs.form.validate()) {
        //this.file = this.$refs.uploadInput.files[0]
        const formData = new FormData();
        formData.append("file", this.file);

        registeredUserService
          .createProject(
            this.nome,
            this.descricaoProjeto,
            this.salarioBase,
            this.numEncontros,
            this.selectedItensLinguagens,
            this.checkAtivo,
            formData
          )
          .then((rsp) => {
            console.log("RSP CADASTRAR PROJETO", rsp);
            this.createdProjects = rsp.data.msg
            this.$refs.form.reset()
          }).catch((rsp) => {

          console.log("Cadastrar Projeto catch", rsp);
        });
      }
    },
    getUserAmountProjects(){
      registeredUserService
          .getUserAmountProjects()
          .then((rsp) => {
            console.log("RSP QuantUserProj", rsp);
            this.createdProjects = rsp.data.msg
          }).catch((rsp) => {

          console.log("getUserAmountProjects catch", rsp);
        });
    },

    validSalary(salario) {
      var replacedSalary = salario.replace(",", "."); // subst "," por "."
      if (replacedSalary > 100 || replacedSalary == 0) {
        return false;
      }
      return true;
    },

    onFileChange(event) {
      if (event) {
        this.file = event;

      }
    },
  },
};
</script>
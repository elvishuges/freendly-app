<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-skeleton-loader
          :loading="loadingProject"
          class="mx-auto"
          max-width="300"
          type="card"
        >
          <v-card flat>
            <v-img
              :src="`${serverHost}${project.dirImagem}`"
              height="150"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title"> {{ project.nome }} </v-card-title>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <v-col cols="8">
        <v-skeleton-loader
          :loading="loadingProject"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-card flat class="mx-auto">
            <v-card-text class="pt-0">
              <p class="title text--primary">{{ project.descricao }}</p>
              <div>Salário : {{ project.salario }}</div>
              <div>Encontos senamais : {{ project.encontrosSemanais }}</div>
              <div>Linguagens de Programação : {{ project.linguagens }}</div>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-skeleton-loader
          :loading="loadingProject"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-card flat class="mx-auto">
            <v-card-title class="title text--primary"
              >Tarefas
              <v-spacer></v-spacer>
              <v-btn @click="henderFormTask" color="black" icon>
                <v-icon>{{ showFormTask ? 'mdi-trash-can' : 'mdi-plus' }}</v-icon>
              </v-btn></v-card-title
            >
            <v-card-text class="scroll pt-0">
              <v-list  subheader three-line height="250px">
                <v-card  v-show="showFormTask">
                  <v-list-item >
                    <template>
                      <v-list-item-action>
                        <v-checkbox :input-value="false"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-form ref="form" enctype="multipart/form-data" method="POST" v-model="validCreateTask">
                        <v-list-item-title class="pa-0">
                          <v-col class="pa-0" cols="5">
                            <v-text-field
                              :rules="tituloTaskRules"
                              placeholder="Título..."
                              solo
                            ></v-text-field>
                          </v-col>
                        </v-list-item-title>
                        <v-list-item-subtitle class="pt-0">
                          <v-text-field
                            class="ma-0"
                            :rules="descricaoTaskRules"
                            placeholder="Descrição..."
                            solo
                          ></v-text-field>
                        </v-list-item-subtitle>
                        </v-form>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                  <v-card-actions class="pa-0 ma-0">
                    <v-spacer></v-spacer>
                    <v-btn @click="createTask" icon>
                      <v-icon>mdi-creation</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>

                <v-list-item-group
                  :key="item.title"
                  v-for="item in projectTasks"
                  v-model="settings"
                  multiple
                  active-class=""
                >
                  <v-list-item>
                    <template>
                      <v-list-item-action>
                        <v-checkbox :input-value="item.concluido"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.descricao
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <v-col cols="6">
        <v-skeleton-loader
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
        </v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import registeredUserService from "./../../../../services/freendly/registeredUser";
export default {
  props: {
    loadingProject: {
      type: Boolean,
      default: null,
    },
    project: {
      type: Object,
      default: null,
    },
    projectTasks: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      key: "value",
      showFormTask:false,
      validCreateTask:false,
      serverHost: this.$freendlyHost,
      settings: [],
      tituloTaskRules: [(v) => !!v || "Campo obrigatório"],
      descricaoTaskRules: [(v) => !!v || "Campo obrigatório"],
    };
  },

  mounted() {},

  methods: {
    henderFormTask() {
      !this.showFormTask ? this.showFormTask = true : this.showFormTask = false
    },
    createTask() {
      if(this.$refs.form.validate()){
        registeredUserService
          .createProject(
            this.project.id
          )
          .then((rsp) => {
            console.log("RSP CADASTRAR PROJETO", rsp);
            this.createdProjects = rsp.data.msg
            this.$refs.form.reset()
          }).catch((rsp) => {

          console.log("Cadastrar Projeto catch", rsp);
        });
      }
      console.log("creatin taks");
    },
  },
};
</script>

<style>
</style>
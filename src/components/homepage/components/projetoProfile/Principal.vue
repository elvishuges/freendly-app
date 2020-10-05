<template>
  <v-container>
    <v-row>
      <v-col xs12 sm8 md8 class="pa-0">
        <v-skeleton-loader
          :loading="loadingProject"          
          type="card"
        >
          <v-card class="pb-0" max-width="500" min-height="200" flat elevation="0">
            <v-img
              :src="`${serverHost}${project.dirImagem}`"
              height="200"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title font-weight-bold"> {{ project.nome }} </v-card-title>
          </v-card>
        </v-skeleton-loader>
      </v-col>
      <v-col xs12 sm8 md8 class="pa-0" >
        <v-skeleton-loader
          :loading="loadingProject"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-card tile flat>
            <v-card-text class="pt-0">
              <p  :class="descriptionImageStyle" >{{ project.descricao }}</p>
              <div :class="infoImageStyle">Salário : {{ project.salario }}</div>
              <div :class="infoImageStyle">Encontos senamais : {{ project.encontrosSemanais }}</div>
              <div :class="infoImageStyle">Linguagens de Programação : {{ project.linguagens }}</div>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
     </v-row>
     <v-row>
      <v-col  xs12 sm8 md8>
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
              <v-btn @click="henderFormTask" :color="showFormTask ? 'red':'primary'" icon>
                <v-icon >{{
                  showFormTask ? "mdi-trash-can" : "mdi-plus"
                }}</v-icon>
              </v-btn></v-card-title
            >
            <v-card-text class="scroll pt-0">
              <v-list subheader three-line height="250px">
                <v-card flat  v-show="showFormTask">
                  <v-list-item >
                    <template>
                      <v-list-item-action>
                        <v-checkbox :input-value="false"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content class="pa-0">
                        <v-form
                          ref="form"
                          enctype="multipart/form-data"
                          method="POST"
                          v-model="validCreateTask"
                        >
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
                  <v-card-actions class="pt-0">
                    <v-spacer></v-spacer>
                    <v-btn class="secondary" @click="createTask" icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-list-item-group >
                  <v-list-item :key="item.title" v-for="item in projectTasks">
                    <template>
                      <v-list-item-action>
                        <v-checkbox v-model="item.concluido" :input-value="item.concluido"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>{{ item.titulo }}  
                        </v-list-item-title>
                        <v-list-item-subtitle :class=" item.concluido ? 'text-decoration-line-through':''">{{
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
      <v-col xs12 sm8 md8 >
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
      showFormTask: false,
      validCreateTask: false,
      serverHost: this.$freendlyHost,
      settings: [],
      tituloTaskRules: [(v) => !!v || "Campo obrigatório"],
      descricaoTaskRules: [(v) => !!v || "Campo obrigatório"],
      tasks:[ 
        {id:1,titulo:"aaaaaaaaaaa 1",descricao:"lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1",concluido:false},
        {id:2,titulo:"Interface 2",descricao:"lorem inputn asd ere photo 2",concluido:true},
        {id:3,titulo:"Interface 3",descricao:"lorem inputn asd ere photo 3",concluido:false},
        {id:4,titulo:"Interface 4",descricao:"lorem inputn asd ere photo 4",concluido:false},
        {id:5,titulo:"Interface 5",descricao:"lorem inputn asd ere photo 5",concluido:false}
        ],
    };
  },

  mounted() {},

  methods: {
    henderFormTask() {
      !this.showFormTask
        ? (this.showFormTask = true , this.$refs.form.reset())
        : (this.showFormTask = false);
        
    },
    createTask() {
      if (this.$refs.form.validate()) {
        registeredUserService
          .createProject(this.project.id)
          .then((rsp) => {
            console.log("RSP CADASTRAR PROJETO", rsp);
            this.createdProjects = rsp.data.msg;
            this.$refs.form.reset();
          })
          .catch((rsp) => {
            console.log("Cadastrar Projeto catch", rsp);
          });
      }
      console.log("creatin taks");
    },
  },

  computed: {
    infoImageStyle() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'body-2'
          case 'sm': return 'body-1'
          case 'md': return 'body-1'
          default :
            return "title"
        }
    },
    descriptionImageStyle() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'title'
          case 'sm': return 'title'
          case 'md': return 'title'
          case 'lg': return 'text-h5 font-weight-bold'
          default :
            return "title"
        }
    }
  },
};
</script>

<style>
</style>
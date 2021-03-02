<template>
  <v-container>
    <v-row>
      <v-flex xs12 sm7 md7 class="pt-4 pb-0">
        <v-skeleton-loader :loading="loadingProject" type="card">
          <v-card class="pb-0" min-height="200" dark elevation="0">
            <v-card-title class="title teal lighten-2 font-weight-bold">
              {{ project.nome }}
            </v-card-title>
            <v-img
              aspect-ratio="1"
              :src="`${serverHost}${project.dirImagem}12`"
              height="200"
              :lazy-src="`https://picsum.photos/10/6?image=12`"
              class="grey darken-4"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </v-card>
        </v-skeleton-loader>
      </v-flex>
      <v-col xs12 sm5 md5 class="pa-0 pt-0">
        <v-skeleton-loader
          :loading="loadingProject"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-card flat>
            <v-card-title>{{ project.descricao }}</v-card-title>
            <v-card-text class="pt-0">
              <div :class="infoImageStyle">Salário : {{ project.salario }}</div>
              <div :class="infoImageStyle">
                Encontos senamais : {{ project.encontrosSemanais }}
              </div>
              <div :class="infoImageStyle">
                Linguagens de Programação : {{ project.linguagens }}
              </div>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row>
      <v-flex xs12 sm7 md7>
        <v-skeleton-loader
          :loading="loadingProject"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-card flat>
            <v-card-title class="title text--primary"
              >Tarefas
              <v-spacer></v-spacer>
              <v-btn
                @click="henderFormTask"
                :color="showFormTask ? 'red' : 'primary'"
                icon
              >
                <v-icon>{{
                  showFormTask ? "mdi-trash-can" : "mdi-plus"
                }}</v-icon>
              </v-btn></v-card-title
            >
            <v-card-text class="scroll pt-0">
              <v-list subheader three-line height="250px">
                <v-card flat v-show="showFormTask">
                  <v-list-item>
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
                <v-list-item-group>
                  <v-list-item :key="item.title" v-for="item in projectTasks">
                    <template>
                      <v-list-item-action>
                        <v-checkbox
                          v-model="item.concluido"
                          :input-value="item.concluido"
                        ></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title
                          >{{ item.titulo }}
                        </v-list-item-title>
                        <v-list-item-subtitle
                          :class="
                            item.concluido ? 'text-decoration-line-through' : ''
                          "
                          >{{ item.descricao }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-flex>
      <v-flex xs12 sm5 md5>
        <v-skeleton-loader type="list-item-three-line">
          <v-card flat>
            <v-card-title class="title text--primary"
              >Outras funcionalidades (Comming soon)
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </v-card-text>
          </v-card>
        </v-skeleton-loader>
      </v-flex>
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
      tasks: [
        {
          id: 1,
          titulo: "Título 1",
          descricao:
            "lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1",
          concluido: false,
        },
        {
          id: 2,
          titulo: "Título 2",
          descricao: "lorem inputn asd ere photo 2",
          concluido: true,
        },
        {
          id: 3,
          titulo: "Título 3",
          descricao: "lorem inputn asd ere photo 3",
          concluido: false,
        },
        {
          id: 4,
          titulo: "Título 4",
          descricao: "lorem inputn asd ere photo 4",
          concluido: false,
        },
        {
          id: 5,
          titulo: "Título 5",
          descricao: "lorem inputn asd ere photo 5",
          concluido: false,
        },
      ],
    };
  },

  mounted() {},

  methods: {
    henderFormTask() {
      !this.showFormTask
        ? ((this.showFormTask = true), this.$refs.form.reset())
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
        case "xs":
          return "body-2";
        case "sm":
          return "body-1";
        case "md":
          return "body-1";
        default:
          return "title";
      }
    },
  },
};
</script>

<style>
</style>
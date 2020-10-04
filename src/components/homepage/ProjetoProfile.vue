<template>
  <v-container fluid >
      <Chat :listChatMessage="messages" /> 
      <Principal :loadingProject="loadingProject" :project="project" :projectTasks="projectTasks" />
  </v-container>
</template>

<script>
//import ChatMessages from "./components/projetoProfile/ChatMessages";
//import Participante from "./components/projetoProfile/Participante";
import Principal from "./components/projetoProfile/Principal";
import Chat from "./components/projetoProfile/Chat";

import registeredUserService from "./../../services/freendly/registeredUser";

export default {
  components: {
    //ChatMessages,
    //Participante,
    Principal,
    Chat,
  },

  data() {
    return {
      inset: false,
      project:{},
      idCurrentProject:undefined,
      loadingProject: false,
       projectTasks:[ 
        {id:1,titulo:"Interface 1",descricao:"lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1 lorem inputn asd ere photo 1",concluido:false},
        {id:2,titulo:"Interface 2",descricao:"lorem inputn asd ere photo 2",concluido:true},
        {id:3,titulo:"Interface 3",descricao:"lorem inputn asd ere photo 3",concluido:false},
        {id:4,titulo:"Interface 4",descricao:"lorem inputn asd ere photo 4",concluido:false},
        {id:5,titulo:"Interface 5",descricao:"lorem inputn asd ere photo 5",concluido:false}
        ],
      direction: "bottom",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition",
      tab: null,
      userId: 0,
      inputChatText: "",      
      messages: [],
    };
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },    
  },
  mounted() {
    //this.addMessagesTeste();
    //console.log("USUARIO DADOS",this.$store.state.auth.usuario);
    this.userId = this.$store.state.auth.usuario.id;
    this.$socket.emit("onProjectPage", this.userId); // enviar id para servidor saber que este user entrou
  },
  methods: {    
    addMessagesTeste() {
      setInterval(() => {
        let m = { text: "Oi" };
        this.messages.push(m);
      }, 2000);
    },

    getUserProject(projectId){
      this.loadingProject = true
      registeredUserService
        .getUserProject(projectId)
        .then((rsp) => {          
          console.log("RSP GETUSERPROJECT", rsp);
          switch (rsp.status) {
            case 200:
              this.loadingProject = false
              var project = rsp.data.msg[0]
              this.project = project
              break;
            case 203:
              console.log("projeto n encontrado");
              break
            default:
              break;
          }
        })
        .catch((error) => {
          console.log("Error Catch", error);
        });
    },
    
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
  },
  watch: {
    
  },
  created() {
    console.log("creted params", this.$route.params);
    this.idCurrentProject = this.$route.params.idProjeto
    var projectId = this.idCurrentProject
    this.getUserProject(projectId)
  },
};
</script>

<style>
</style>
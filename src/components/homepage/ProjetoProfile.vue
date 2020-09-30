<template>
  <v-container fluid class="pt-0">
    <v-row>
      <Principal />
       <Chat :listChatMessage="messages" /> 
    </v-row>
  </v-container>
</template>

<script>
//import ChatMessages from "./components/projetoProfile/ChatMessages";
//import Participante from "./components/projetoProfile/Participante";
import Principal from "./components/projetoProfile/Principal";
import Chat from "./components/projetoProfile/Chat";

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
      items: [
        { tab: 0, isChat: true, title: "Chat", content: "ChatMessages" },
        {
          tab: 1,
          isChat: false,
          title: "Participante",
          content: "Participante",
        },
      ],
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
    //Fired when the server sends something on the "messageChannel" channel.
    chatChannel(data) {
      let serverMessage = { text: data.text, myMessage: false };
      this.messages.push(serverMessage);
    },
  },
  mounted() {
    //this.addMessagesTeste();
    //console.log("USUARIO DADOS",this.$store.state.auth.usuario);
    this.userId = this.$store.state.auth.usuario.id;
    this.$socket.emit("onProjectPage", this.userId); // enviar id para servidor saber que este user entrou
  },
  methods: {
    sendMessage(message) {
      let myMessage = { text: message, myMessage: true };
      // manda para o usuário de id 11
      let socketMessage = { usr: 17, text: message };
      this.messages.push(myMessage);
      this.inputChatText = "";
      this.$socket.emit("chat", socketMessage);
    },
    addMessagesTeste() {
      setInterval(() => {
        let m = { text: "Oi" };
        this.messages.push(m);
      }, 2000);
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
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },
  created() {
    console.log("creted", this.$route.params.idProjeto);
  },
};
</script>

<style>
</style>
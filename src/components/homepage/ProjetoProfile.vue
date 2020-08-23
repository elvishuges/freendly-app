<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-flex xs12 sm8 md9>Corpo</v-flex>
      <v-flex xs12 sm4 md3>
        <v-card height="595px" class="overflow-hidden">
          <v-toolbar color="white" flat>
            <v-toolbar-title class="teal--text text--darken-3">Coversa com participante</v-toolbar-title>

            <v-spacer></v-spacer>
            <template v-slot:extension>
              <v-tabs centered v-model="tab">
                <v-tab v-for="item in items" :key="item.tab">{{ item.title }}</v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <component v-if="item.isChat" :listMessages="messages" v-bind:is="item.content"></component>
                    <component v-else v-bind:is="item.content"></component>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>

          <v-card-text>
            <v-row>
              <v-col cols="9">
                <v-text-field
                  prepend-icon="mdi-emoticon"
                  :append-icon-cb="sendMessage"
                  filled
                  v-model="inputChatText"
                  clear-icon="mdi-close-mesasge"
                  clearable
                  label="digite sua mensage"
                  type="text"
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="pl-3">
                <v-btn @click="sendMessage(inputChatText)" class="ma-2" text icon>
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import ChatMessages from "./components/projetoProfile/ChatMessages";
import Participante from "./components/projetoProfile/Participante";

export default {
  components: {
    ChatMessages,
    Participante,
  },

  data() {
    return {
      inset: false,
      tab: null,
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
      messages: [{ text: "messagem do pai 1" }, { text: "messagem do pai 2" }],
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
      let serverMessage = { text: data.msg };
      this.messages.push(serverMessage);
      this.socketMessage = data;
    },
  },
  mounted() {
    //this.addMessagesTeste();
    //this.$socket.emit('onProjectPage', 1) // 1 de teste para id do usuário mas seria user.id
  },
  methods: {
    sendMessage(message) {
      let msg = { text: message };
      let socketMessage = { usr: 2, msg: message };
      this.$socket.emit("chat", socketMessage);
      this.messages.push(msg);
    },
    addMessagesTeste() {
      setInterval(() => {
        let m = { text: "Oi" };
        this.messages.push(m);
      }, 2000);
    },
  },
  computed: {},
  watch: {
    messages() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    },
  },
  created() {
    console.log("creted", this.$route.params.idProjeto);
  },
};
</script>

<style>
</style>
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
              <v-tabs centered slider-color="teal">
                <v-tab class="teal--text text--darken-3">Participante</v-tab>
                <v-tab class="teal--text text--darken-3">Chat</v-tab>
              </v-tabs>
            </template>
          </v-toolbar>

          <v-card-text>
            <v-row>
              <v-card  ref="chat" height="350px" class="scroll" flat>
                <v-col cols="12" :key="i" v-for="(item, i) in messages">
                  <v-card max-width="100%">
                    <v-card-text class="font-weight-medium">
                      {{item.text}}
                      <v-row justify="end">
                        <span class="ml-4 px-1 caption grey--text">2:25pm</span>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                 <!-- <v-col xs="12">
                  <v-row justify="end" align="end">
                    <v-card :color="$vuetify.theme.dark ? '' : 'green lighten-4'">
                      <v-card-text class="font-weight-medium">
                        <span>tripnu pattiya nalla places athokkeyanu ?</span>
                        <v-row justify="end"><span class="ml-4 px-1 caption grey--text">2:25pm</span></v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                </v-col> -->
              </v-card>
            </v-row>

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
export default {
  data() {
    return {
      inset: false,
      inputChatText:"",
      items: [
        { title: "Home", icon: "mdi-account" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account" },
      ],
      messages: [ ],
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

    // Fired when the server sends something on the "messageChannel" channel.
    chatChannel(data) {
      let serverMessage = {text:data.msg}
      this.messages.push(serverMessage)
      this.socketMessage = data
    }
  },
  mounted() {
     //this.addMessagesTeste()
     this.$socket.emit('onProjectPage', 1) // 1 de teste para id do usuário mas seria user.id
  },

  methods: {
    sendMessage(message) {
      let msg = { text:message }
      let socketMessage = { usr:2,msg:message }
      this.$socket.emit('chat', socketMessage)
      this.messages.push(msg)
    },
    addMessagesTeste(){
      setInterval(() => {
       let m = { text: 'Oi'}
       this.messages.push(m)
      }, 2000);
    }
  },

  computed: {},
  watch: {
    messages() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  },
  created() {
    console.log("route", this.$route.params.idProjeto);
  },
};
</script>

<style>

</style>
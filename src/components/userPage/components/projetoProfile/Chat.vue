<template>
  <v-fab-transition>
    <v-menu left :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          dark
          absolute
          bottom
          right
          fab
          @click="userClickChat"
          v-bind="attrs"
          v-on="on"
          id="fixedbutton"
        >
          <v-icon>mdi-chat</v-icon>
        </v-btn>
      </template>

      <v-card class="elevation-12">
        <v-toolbar dark class="secondary">
          <v-toolbar-title>Chat</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-card ref="chat" flat class="scroll" height="130" width="230">
            <v-list rounded>
              <v-list-item-group>
                <template v-for="(item, i) in listChatMessage">
                  <v-list-item
                    :class="item.myMessage ? 'grey' : ''"
                    :key="`item-${i}`"
                    :value="item"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
          <v-row>
            <v-col cols="10">
              <v-text-field
                class="pa-0 ma-0"
                v-model="inputChatText"
                label="mensagem..."
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pl-2">
              <v-btn
                :disabled="removeWhiteSpaceChatText === ''"
                @click="sendMessage(inputChatText)"
                class="ma-0"
                text
                icon
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-fab-transition>
</template>

<script>
import { EventBus } from "./../../../../utils/event-bus";
export default {
  props: {
    listChatMessage: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      messages: [{ text: "ChatMessage 1" }, { text: "ChatMessage 2" }],
      inputChatText: "",
      userClickedChat: false,
      drawer: true,
      mini: true,
    };
  },
  mounted() {
    EventBus.$on("GlobalEventshowChatDrawer", (drawerState) => {
      this.drawer = drawerState;
    });
  },

  watch: {
    listChatMessage() {
      if (this.userClickedChat) {
        setTimeout(() => {
          this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
        }, 0);
      }
    },
  },

  methods: {
    userClickChat() {
      !this.userClickedChat ? (this.userClickedChat = true) : "";
    },
    sendMessage(message) {
      let myMessage = { text: message, myMessage: true };
      // manda para o usuário de id 11
      let socketMessage = { usr: 17, text: message };
      this.listChatMessage.push(myMessage);
      this.inputChatText = "";
      this.$socket.emit("chat", socketMessage);
    },
  },

  computed: {
    removeWhiteSpaceChatText() {
      return this.inputChatText.trim();
    },
  },
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#fixedbutton {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
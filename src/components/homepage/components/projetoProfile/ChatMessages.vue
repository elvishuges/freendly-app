<template>
  <v-card  ref="chat" height="350px" class="scroll" flat>
                <v-col cols="10" :key="i" v-for="(item, i) in listMessages">
                  <v-card max-width="100%" class="pa-0 ma-0">
                    <v-card-text class="font-weight-medium">
                      {{item.text}}
                      <v-row justify="end">
                        <span class="ml-4 pt-0 px-1 caption grey--text">2:25pm</span>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                 <v-col xs="12">
                  <v-row justify="end" align="end">
                    <v-card :color="$vuetify.theme.dark ? '' : 'green lighten-4'">
                      <v-card-text class="font-weight-medium">
                        <span>tripnu pattiya nalla places athokkeyanu ?</span>
                        <v-row justify="end"><span class="ml-4 px-1 caption grey--text">2:25pm</span></v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                </v-col>
              </v-card>
</template>

<script>
export default {
  props: {
    listMessages: {
      type: Array,
      default: null
    },
  },
   data() {
       return {
           messages: [ {text:"ChatMessage 1"},{text:"ChatMessage 2"} ],
       }
   },
    watch: {
    listMessages() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    },
  },
}
</script>

<style>

</style>
<template>
  <v-container fluid class="pt-0">
    <v-row>
      <v-flex xs12 sm8 md9>Corpo</v-flex>
      <v-flex xs12 sm4 md3>
        <v-card height="600px" class="overflow-hidden">
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
              <v-card height="350px" class="scroll" flat>
                <v-col cols="12">
                  <v-card max-width="100%">
                    <v-card-text class="font-weight-medium">
                      Hello, is there any body in there ? Just notify if you can hear me.
                      <v-row justify="end">
                        <span class="ml-4 px-1 caption grey--text">2:25pm</span>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card max-width="100%">
                    <v-card-text class="font-weight-medium">
                      Hello, is there any body in there ? Just notify if you can hear me.
                      <v-row justify="end">
                        <span class="ml-4 px-1 caption grey--text">2:25pm</span>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card max-width="100%">
                    <v-card-text class="font-weight-medium">
                      Hello, is there any body in there ? Just notify if you can hear me.
                      <v-row justify="end">
                        <span class="ml-4 px-1 caption grey--text">2:25pm</span>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col xs="12">
                  <v-row justify="end" align="end">
                    <v-card :color="$vuetify.theme.dark ? '' : 'green lighten-4'">
                      <v-card-text class="font-weight-medium">
                        <span>tripnu pattiya nalla places athokkeyanu ?</span>
                        <v-row justify="end">
                          <span class="ml-4 px-1 caption grey--text">2:25pm</span>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-row>
                </v-col>
              </v-card>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-emoticon"
                  append-outer-icon="mdi-send"
                  filled
                  clear-icon="mdi-close-mesasge"
                  clearable
                  label="digite sua mensage"
                  type="text"
                ></v-text-field>
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
      items: [
        { title: "Home", icon: "mdi-account" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account" },
      ],
    };
  },
  mounted() {},

  methods: {
    name() {},
  },

  computed: {},
  created() {
    console.log("route", this.$route.params.idProjeto);
  },
};
</script>

<style>

</style>
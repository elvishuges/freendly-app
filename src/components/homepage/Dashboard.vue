<template>
  <div>
    <Projetos />
    <v-row>
      <v-flex xs12 sm9 md9>
      <v-container class="pl-3" >
        <v-tabs
        background-color="white"
        color="deep-purple accent-4"
        left
        class="pl-5"
      >
        <v-tab>Trabalhos</v-tab>
        <v-tab>Notificações</v-tab>

        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-container fluid>
            oi
          </v-container>
        </v-tab-item>
      </v-tabs>

           </v-container>
      </v-flex>
      <v-flex xs12 sm3 md3>
        <Propostas/>
      </v-flex>
    </v-row>
  </div>
</template>
<script>
import Projetos from "./Projetos";
import Propostas from "./Propostas";
//import Empregos from "./Empregos";

export default {
  components: {
    Projetos,
    Propostas,
    //Empregos,
  },

  data() {
    return {
      key: "value",
    };
  },

  mounted() {
    console.log("*mounted dash*");
  },

  methods: {
    name() {},
  },
};
</script>

<style lang="scss">
   .scroll {
   overflow-y: scroll;

}

.v-application ::-webkit-scrollbar {
    width: 8px;
}
</style>
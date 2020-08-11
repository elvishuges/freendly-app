<template>
  <div>
    <Projetos />
    <v-row>
      <v-flex xs12 sm8 md8>
        <v-container class="pl-8 pb-0 pt-0 pr-6">
            <v-tabs v-model="tab"  >
              <v-tab v-for="item in items" :key="item.tab">{{ item.name }}</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat>
                  <v-card-text><component v-bind:is="item.content"></component></v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <Propostas />
      </v-flex>
    </v-row>
  </div>
</template>
<script>
import Projetos from "./Projetos";
import Propostas from "./Propostas";
import Trabalhos from "./Trabalhos";
import Notificacoes from './Notificacoes'

export default {
  components: {
    Projetos,
    Propostas,
    Trabalhos,
    Notificacoes
  },

  data() {
    return {
      key: "value",
      tab: null,
      items: [
        { tab: 0, name: "Trabalho", content: "Trabalhos" },
        { tab: 1, name: "Notificações", content: "Notificacoes" },
      ],
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
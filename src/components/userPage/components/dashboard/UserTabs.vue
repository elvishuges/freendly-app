<template>
  <v-container class="pl-8 pb-0 pt-5 pr-6">
    <v-tabs v-model="tab" class="pl-0 pr-9">
      <v-tab
        class="subtitle-1 font-weight-medium"
        v-for="tab in tabs"
        :key="tab.tab"
        >{{ tab.name }}</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab.id">
        <v-card flat>
          <v-card-text>
            <component v-bind:is="tab.content"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import Trabalhos from "./Trabalhos";
import Notificacoes from "./Notificacoes";

export default {
  components: {
    Trabalhos,
    Notificacoes,
  },

  data() {
    return {
      tab: null,
      tabs: [
        { id: 0, name: "Jobs", content: "Trabalhos" },
        { id: 1, name: "Notificações", content: "Notificacoes" },
        { id: 2, name: "Minhas Anotações", content: "Notificacoes" },
      ],
    };
  },
};
</script>

<style>
</style>
<template>
  <v-app>
    <drawer @updateDrawer="updateDrawer" :drawer="drawer" />
    <bar title="Usuário" @opendDrawer="handleOpenDrawerEvent" />

    <router-view></router-view>
  </v-app>
</template>

<script>
import Drawer from "./../components/userPage/Drawer";
import Bar from "./../components/userPage/Bar";

export default {
  components: {
    Drawer,
    Bar,
  },
  data() {
    return {
      drawer: false,
      key: "value",
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" },
      ],
    };
  },

  mounted() {},

  methods: {
    handleClickOutside() {
      console.log("log", this.drawer);
      this.drawer ? (this.drawer = false) : "";
    },
    handleOpenDrawerEvent() {
      this.drawer = true;
    },
    updateDrawer(payload) {
      payload ? "" : (this.drawer = false);
    },
  },
};
</script>

<style>
</style>
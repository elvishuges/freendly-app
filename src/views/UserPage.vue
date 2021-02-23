<template>
  <v-app>
    <drawer @input="input" :value="drawer" />
    <bar @opendDrawer="handleOpenDrawerEvent" />
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
      console.log("handleOpenDrawerEvent", this.drawer);
      this.drawer = true;
    },
    input(payload) {
      payload ? "" : (this.drawer = false);
    },
  },
};
</script>

<style>
</style>
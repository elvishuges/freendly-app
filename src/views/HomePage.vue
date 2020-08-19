<template>
  <v-app>
    <Drawer />
      <router-view></router-view>
  </v-app>
</template>

<script>
import Drawer from "./../components/homepage/Drawer";
//import Bar from './../components/homepage/Bar'

export default {
  components: {
    Drawer,
    //Bar
  },
  data() {
    return {
      openDrawer: null,
      key: "value",
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" },
      ],
    };
  },

  mounted() {},

  methods: {
    onToggleDrawer() {
      console.log("*toggle*");
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>

<style>
</style>
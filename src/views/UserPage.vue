<template>
  <v-app>
    <drawer
      :drawerItens="drawerItens"
      @updateDrawer="updateDrawer"
      :drawer="drawer"
    />
    <bar title="Usuário" @open-drawer="handleOpenDrawerEvent" />

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
      drawerItens: [
        {
          title: "Dashboard",
          icon: "mdi-puzzle-edit-outline",
          route: "/dashboard",
        },
        {
          title: "Projeto",
          icon: "mdi-plus",
          route: "/projeto/add",
        },
        {
          title: "Jobs",
          icon: "mdi-eye",
          route: "/projetos",
        },
        {
          title: "Editar dados",
          icon: "mdi-content-save-edit",
          route: "/#",
        },
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
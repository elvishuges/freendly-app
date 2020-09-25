<template>
  <div>
    <v-navigation-drawer
      v-model="showDrawer"
      absolute
      dark
      class="light-blue darken-1"
      height="100%"
      temporary
    >
      <v-list-item class="grey lighten-4">
        <v-list-item-content>
          <v-list-item-title class="title light-blue--text">{{
            infoEmpresa.nome
          }}</v-list-item-title>
          <v-list-item-subtitle class="light-blue--text">{{
            infoEmpresa.descricao
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="{ path: '/' + item.route }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- * bar superior * -->

    <v-app-bar
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon
        @click="showDrawer = !showDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>showDrawer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AUTH_LOGOUT } from "./../../store/actions/auth";
import { CLEAN_COMPANY_DATE } from "./../../store/actions/user";

export default {
  props: {
    openDrawer: { type: Boolean },
  },
  data() {
    return {
      key: "value",
      showDrawer: false,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-puzzle-edit-outline",
          route: "dashboard",
        },
        {
          title: "Projeto",
          icon: "mdi-plus",
          route: "formProjeto",
        },
        {
          title: "Jobs",
          icon: "mdi-eye",
          route: "searchJobs",
        },
        {
          title: "Editar dados",
          icon: "mdi-content-save-edit",
          route: "",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    logout() {
      console.log("logout");
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$store.dispatch(CLEAN_COMPANY_DATE);
        this.$router.push("/login");
      });
    },
  },

  computed: {
    ...mapGetters([
      "infoEmpresa",
      // ...
    ]),
  },
};
</script>

<style>
</style>
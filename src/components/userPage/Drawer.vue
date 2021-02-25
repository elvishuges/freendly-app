<template>
  <div>
    <v-navigation-drawer
      v-bind:value="drawer"
      v-on:input="$emit('updateDrawer', $event)"
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
          :to="{ path: item.route }"
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EventBus } from "./../../utils/event-bus.js";
import { AUTH_LOGOUT } from "./../../store/actions/auth";
import { CLEAN_COMPANY_DATE } from "./../../store/actions/user";

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      key: "value",
      items: [
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
    logout() {
      console.log("logout");
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
        this.$store.dispatch(CLEAN_COMPANY_DATE);
      });
    },
    handleClickOutside() {
      console.log("aquiii");
    },

    GlobalEventshowChatDrawer() {
      // Send the event on a channel (i-got-clicked) with a payload (the click count.)
      EventBus.$emit("GlobalEventshowChatDrawer", true);
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
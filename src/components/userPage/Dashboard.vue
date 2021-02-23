<template>
  <div>
    <Projetos :listProjects="listProjects" />
    <v-row>
      <v-flex xs12 sm8 md8>
        <user-tabs />
      </v-flex>
      <v-flex xs12 sm4 md4 class="pt-4">
        <Propostas />
      </v-flex>
    </v-row>
  </div>
</template>
<script>
import registeredUserService from "./../../services/freendly/registeredUser";
import { SET_COMPANY_DATE } from "../../store/actions/user";

import Projetos from "./components/dashboard/Projetos";
import Propostas from "./components/dashboard/Propostas";
import UserTabs from "./components/dashboard/UserTabs.vue";

export default {
  components: {
    Projetos,
    Propostas,
    UserTabs,
  },

  data() {
    return {
      key: "value",
      listProjects: [],
      tab: null,
    };
  },

  mounted() {
    this.getUserCompany();
    this.getUserProjects();
  },

  methods: {
    getUserCompany() {
      registeredUserService
        .getUserCompany()
        .then((rsp) => {
          console.log("RSP GETUSERCOMPANY", rsp);
          let empresa = rsp.data.msg;
          this.$store.dispatch(SET_COMPANY_DATE, empresa);
        })
        .catch((error) => {
          console.log("Error Catch", error);
        });
    },
    getUserProjects() {
      registeredUserService
        .getUserProjects()
        .then((rsp) => {
          console.log("RSP GETUSERPROJECTS", rsp);
          this.listProjects = rsp.data.msg;
        })
        .catch((error) => {
          console.log("Error Catch", error);
        });
    },
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
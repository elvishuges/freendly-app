<template>
  <div>
    <Projetos :listProjects="listProjects" />
    <v-row>
      <v-flex xs12 sm8 md8>
        <v-container class="pl-8 pb-0 pt-0 pr-6">
          <v-tabs v-model="tab" class="pl-0 pr-9">
            <v-tab class="subtitle-1 font-weight-medium"  v-for="item in tabs" :key="item.tab">{{ item.name }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in tabs" :key="item.tab">
              <v-card flat>
                <v-card-text>
                  <component v-bind:is="item.content"></component>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <Propostas/>
      </v-flex>
    </v-row>
  </div>
</template>
<script>
import registeredUserService from "./../../services/freendly/registeredUser";
import { SET_COMPANY_DATE } from "../../store/actions/user";

import Projetos from "./components/dashboard/Projetos";
import Propostas from "./components/dashboard/Propostas";
import Trabalhos from "./components/dashboard/Trabalhos";
import Notificacoes from "./components/dashboard/Notificacoes";

export default {
  components: {
    Projetos,
    Propostas,
    Trabalhos,
    Notificacoes,
  },

  data() {
    return {
      key: "value",
      listProjects:[],
      tab: null,
      tabs: [
        { tab: 0, name: "Jobs", content: "Trabalhos" },
        { tab: 1, name: "Notificações", content: "Notificacoes" },
        { tab: 2, name: "Minhas Anotações", content: "Notificacoes" },
      ],
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
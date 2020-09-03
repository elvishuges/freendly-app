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
import registeredUserService from "./../../services/registeredUser.service";
import {SET_COMPANY_DATE} from "../../store/actions/user";

import Projetos from "./components/dashboard/Projetos";
import Propostas from "./components/dashboard/Propostas";
import Trabalhos from "./components/dashboard/Trabalhos";
import Notificacoes from './components/dashboard/Notificacoes'

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
    registeredUserService.getEmpresa(1).then((rsp)=>{
        this.setDadosEmpresa(rsp.data.msg[0])
    }).catch((error)=>{
        console.log("Error Catch",error);
    })
  },

  methods: {
    setDadosEmpresa(dados) {
      this.$store
        .dispatch(SET_COMPANY_DATE, dados)
        .then((rsp) => {
           console.log("# setDadosEmpresa sucess #",rsp);
        })
        .catch((rsp) => {
          console.log("setDadosEmpresa catch", rsp);
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
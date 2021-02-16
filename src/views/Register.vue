/** * Created by vouill on 11/13/17. */

<template>
  <v-container>
    <app-bar color="secondary" title="Freendly"></app-bar>
    <v-container fluid class="mt-4">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <register-form @submitFormRegister="submit"></register-form>
          <v-alert :value="alert" color="red">{{ msg }}</v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
import AppBar from "@/components/AppBar";
import { AUTH_REGISTER_REQUEST } from "./../store/actions/auth";
import RegisterForm from "../components/register/RegisterForm.vue";

export default {
  name: "login",
  components: {
    AppBar,
    RegisterForm,
  },
  data() {
    return {
      msg: "",
      alert: false,

      nomeRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => (v && v.length < 20) || "Nome deve ter menos de 20 caracteres",
      ],
      emailRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => (v && v.length <= 30) || "Email deve ter menos de 30 caracteres",
      ],
      nickRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => (v && v.length <= 15) || "Nick deve ter menos de 15",
      ],
      senhaRules: [
        (v) => !!v || "Campo obrigatório",
        (v) => (v && v.length < 20) || "Senha deve ter menos de 20 caracteres",
      ],
      confirmeSenhaRules: [
        (value) => !!value || "Campo obrigatório",
        (value) => value === this.senha || "A senha confirmada não coincide.",
      ],
    };
  },
  methods: {
    login: function () {
      this.$router.push("/login");
    },

    submit(payload) {
      const { nome, nick, email, senha } = payload;
      this.alert = false;
      this.msg = "";

      this.$store
        .dispatch(AUTH_REGISTER_REQUEST, { nome, nick, email, senha })
        .then((rsp) => {
          if (rsp) {
            // true
            this.$router.push("/dashboard");
          } else {
            // false
            console.log("email já cadastrado");
            this.alert = true;
            this.msg = "email já cadastrado";
          }
        })
        .catch((rsp) => {
          this.alert = true;
          this.msg = rsp;
          console.log("Login catch", rsp);
        });
    },
  },
};
</script>
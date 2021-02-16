/** * Created by elvis on 06/09/2020. */

<template>
  <v-container>
    <app-bar title="Freendly"></app-bar>
    <v-layout row>
      <v-flex xs12 sm6 md8 class="pr-3 pt-4 pl-3 hidden-sm-and-down">
        <v-img src="./../assets/loginImage2.jpg"></v-img>
      </v-flex>
      <v-flex xs12 sm12 md4 class="pt-4" align-center justify-center>
        <v-layout column>
          <login-form @submitFormLogin="submitForm"> </login-form>
          <v-alert dark shaped :value="alert" color="red">{{ msg }}</v-alert>
        </v-layout>
      </v-flex>
    </v-layout>
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
import LoginForm from "@/components/login/LoginForm";
import AppBar from "@/components/AppBar";
import { AUTH_LOGIN_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  components: {
    AppBar,
    LoginForm,
  },
  data() {
    return {
      validFormLogin: true,
      loading: false,
      msg: "",
      alert: false,
    };
  },
  mounted() {
    console.log("####***", process.env.NODE_ENV, "***####");
  },
  methods: {
    submitForm(payload) {
      const { email, senha } = payload;
      this.alert = false;
      this.msg = "";
      this.$store
        .dispatch(AUTH_LOGIN_REQUEST, { email, senha })
        .then((rsp) => {
          if (rsp) {
            this.$router.push("/dashboard");
          } else {
            this.alert = true;
            this.msg = "email ou senha incorretos";
          }
        })
        .catch((rsp) => {
          this.alert = true;
          this.msg = rsp;
          console.log("Login catch", rsp);
        });
    },

    register: function () {
      this.$router.push("/register");
    },
  },
};
</script>
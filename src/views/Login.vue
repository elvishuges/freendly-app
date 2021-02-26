/** * Created by elvis on 06/09/2020. */

<template>
  <v-container>
    <login-register-bar title="Freendly"></login-register-bar>
    <v-layout align-center justify-center>
      <v-flex xs12 sm6 md8 class="pr-3 pt-4 pl-3 hidden-sm-and-down">
        <v-img src="./../assets/loginImage2.jpg"></v-img>
      </v-flex>
      <v-flex xs12 sm6 md4>
        <login-form
          :loadingSubmitBottom="loading"
          @submitFormLogin="submitForm"
        >
        </login-form>
        <v-alert dark shaped :value="alert" color="red">{{ msg }}</v-alert>
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
import LoginRegisterBar from "@/components/LoginRegisterBar";
import { AUTH_LOGIN_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  components: {
    LoginRegisterBar,
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
      this.loading = true;
      this.$store
        .dispatch(AUTH_LOGIN_REQUEST, { email, senha })
        .then((rsp) => {
          if (rsp) {
            this.$router.push("/dashboard");
          } else {
            this.alert = true;
            this.msg = "email ou senha incorretos";
          }
          this.loading = false;
        })
        .catch((rsp) => {
          this.alert = true;
          this.msg = rsp;
          this.loading = false;

          console.log("Login catch", rsp);
        });
    },

    register: function () {
      this.$router.push("/register");
    },
  },
};
</script>
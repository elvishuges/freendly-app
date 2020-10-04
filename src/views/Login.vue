/** * Created by elvis on 06/09/2020. */

<template>
  <v-main>
    <v-app-bar app color="blue-grey darken-1" dark>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text>
        <span class="mr-2">Freendly</span>
        <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md4>
          <v-card elevation="12">
            <v-card-text align-center>
              <div>Freendly</div>
              <p class="text-center font-weight-black display-1 text--primary">
                Login
              </p>
              <v-form ref="form" v-model="validFormLogin">
                <v-text-field
                  prepend-icon="mdi-face"
                  name="email"
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  type="text"
                  outlined
                  dense
                  v-on:keyup.enter="$refs.form.validate() && login()"
                ></v-text-field>
                <v-text-field
                  v-model="senha"
                  :rules="senhaRules"
                  prepend-icon="mdi-lock"
                  name="senha"
                  label="Senha"
                  type="password"
                  outlined
                  dense
                  v-on:keyup.enter="$refs.form.validate() && login()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="$refs.form.validate() && login()" block dark color="primary">Login</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="register()" dark block color="secondary"
                >Register</v-btn
              >
            </v-card-actions>
          </v-card>
          <v-alert :value="alert" color="red">{{ msg }}</v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
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
import { AUTH_LOGIN_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      validFormLogin: true,
      email: '',
      senha: '',
      loading: false,
      msg: "",
      alert: false,
      isConnected: false,
      socketMessage: "",

      senhaRules: [(v) => !!v || "Campo obrigatório"],

      emailRules: [
        (value) => !!value || "Campo Obrigatório.",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
      ],
    };
  },
  methods: {
    login: function () {
        const { email, senha } = this;
        this.alert = false;
        this.msg = "";
        this.$store
          .dispatch(AUTH_LOGIN_REQUEST, { email, senha })
          .then((rsp) => {
            if (rsp) {
              // true
              this.$router.push("/dashboard");
            } else {
              console.log("RSP", rsp);
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
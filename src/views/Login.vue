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
            <!-- <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Freendly</v-card-title>
            </v-img>-->
            <v-card-text align-center>
              <div>Freendly</div>
              <p class="text-center font-weight-black display-1 text--primary">Login</p>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-face"
                  name="email"
                  v-model="email"
                  label="Email"
                  type="text"
                  outlined
                  dense
                  v-on:keyup.enter="login()"
                ></v-text-field>
                <v-text-field
                  v-model="senha"
                  prepend-icon="mdi-lock"
                  name="senha"
                  label="Senha"
                  type="password"
                  outlined
                  dense
                  v-on:keyup.enter="login()"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="login()" block dark color="blue-grey">Login</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn @click="register()" dark block color="light-blue darken-4">Register</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert :value="alert" color="red">{{msg}}</v-alert>
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
      email: "jaque@hotmail.com",
      senha: "123",
      loading: false,
      msg: "",
      alert: false,
      isConnected: false,
      socketMessage: "",
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
            this.msg = "email ou senha incoretos";
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
    clickButton: function () {
      // $socket is socket.io-client instance
      console.log("click button");
      this.$socket.emit("authenticate", "teste");
    },
  },
};
</script>
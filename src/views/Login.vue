/** * Created by elvis on 06/09/2020. */

<template>
  <v-container>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text>
        <span class="mr-2">Freendly</span>
        <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-layout row>
      <v-flex xs12 sm6 md8 class="pr-3 pt-4 pl-3 hidden-sm-and-down">
        <v-img
          src="data:image/jpeg;base64,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"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm12 md4 class="pt-4" align-center justify-center>
        <v-layout column>
          <v-card-text>
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
            <v-btn
              @click="$refs.form.validate() && login()"
              dark
              block
              color="primary"
              >Login</v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn @click="register()" dark block color="secondary"
              >Register</v-btn
            >
          </v-card-actions>
          <v-alert :value="alert" color="red">{{ msg }}</v-alert>
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
import { AUTH_LOGIN_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      validFormLogin: true,
      email: "",
      senha: "",
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
  mounted() {
    console.log("####***", process.env.NODE_ENV, "***####");
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
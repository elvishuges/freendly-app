/** * Created by vouill on 11/13/17. */

<template>
  <v-container>
    <v-app-bar app color="blue-grey darken-1" dark>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text>
        <span class="mr-2">Freendly</span>
        <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card elevation="4">
          <v-card-title src="https://picsum.photos/1920/1080?random">
            <v-icon large left>mdi-cube-unfolded</v-icon>
            <span>Freendly</span>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-row>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      v-model="nome"
                      dense
                      :rules="nomeRules"
                      label="Nome"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      v-model="email"
                      dense
                      :rules="emailRules"
                      label="Email"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-text-field
                      v-model="nick"
                      dense
                      :rules="nickRules"
                      label="Nick"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" class="pl-1 pt-0 pr-1">
                    <v-text-field
                      v-model="senha"
                      ref="password"
                      type="password"
                      dense
                      :rules="senhaRules"
                      label="Senha"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" class="pl-0 pt-0 pr-0">
                    <v-text-field
                      v-model="confirmeSenha"
                      dense
                      type="password"
                      :rules="confirmeSenhaRules"
                      label="Comfirmar senha"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <div style="cursor: pointer;" @click="login()">Já possui cadastro ?</div>

                <v-spacer></v-spacer>
                <v-btn
                  large
                  :rounded="false"
                  dark
                  color="blue-grey darken-1"
                  @click="submit"
                >Cadastrar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
        <v-alert :value="alert" color="red">{{msg}}</v-alert>
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
import { AUTH_REGISTER_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      msg: "",
      alert: false,
      nome: "Elvis Huges",
      nick: "Elvinho",
      email: "elvis@hotmail.com",
      senha: "",
      confirmeSenha: "",
      valid: true,

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
    register: function () {
      this.$router.push("/register");
    },
    submit() {
      if (this.$refs.form.validate()) {
        const { nome, nick, email, senha } = this;
        this.alert = false;
        this.msg = "";

        this.$store
          .dispatch(AUTH_REGISTER_REQUEST, { nome, nick, email, senha })
          .then((rsp) => {
            if (rsp) { // true
              this.$router.push("/dashboard");
            } else { // false
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
      }
    },
  },
};
</script>
<template>
  <div>
    <v-card-text>
      <p class="text-center font-weight-black display-1 text--primary">Login</p>
      <v-form ref="form" v-model="validFormLogin">
        <v-text-field
          prepend-icon="mdi-face"
          name="email"
          v-model="form.email"
          :rules="emailRules"
          label="Email"
          type="text"
          outlined
          dense
          v-on:keyup.enter="$refs.form.validate() && login()"
        ></v-text-field>
        <v-text-field
          v-model="form.senha"
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
        block
        :loading="loadingSubmitBottom"
        :disabled="loadingSubmitBottom"
        color="primary"
        >Login</v-btn
      >
    </v-card-actions>
    <v-card-actions>
      <v-btn @click="register()" dark block color="secondary">Register</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {
    loadingSubmitBottom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      validFormLogin: true,
      form: {
        email: "",
        senha: "",
      },
      senhaRules: [(v) => !!v || "Campo obrigatório"],
      emailRules: [
        (value) => !!value || "Campo Obrigatório.",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
      ],
    };
  },
  methods: {
    login: function () {
      this.$emit("submitFormLogin", this.form);
    },
    register: function () {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
</style>
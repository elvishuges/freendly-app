/** * Created by vouill on 11/13/17. */

<template>
  <v-container>
    <v-flex xs12>
      <v-card elevation="0">
        <v-card-text>
          <v-card-title>
            <v-icon large left></v-icon>
            <span>Dados projeto</span>
          </v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="nome" :rules="nomeRules" label="Nome" required outlined></v-text-field>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12">
                  <v-textarea outlined maxlength="100" counter v-model="value" color="teal">
                    <template v-slot:label>
                      <div>
                        Descriçãp
                        <small>(Breve)</small>
                      </div>
                    </template>
                  </v-textarea>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12" sm="6">
                  <v-text-field label="Salário/Semana" outlined value="10.00" prefix="$"></v-text-field>
                </v-col>
                <v-col class="pt-0 pb-0" cols="12" sm="6">
                  <v-text-field
                    v-model="numEncontros"
                    outlined
                    type="number"
                    label="Encontro semanais"
                    @click:append-outer="increment"
                    @click:prepend="decrement"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="nome" :rules="nomeRules" label="Linguagens de programação" required outlined></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                :rounded="false"
                dark
                color="blue-grey darken-1"
                @click="validate"
              >Cadastrar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
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
export default {
  name: "login",
  data() {
    return {
      nome: "freendly socket",
      sobreNome: "",
      numEncontros: 0,
      nick: "cityslicka",
      nomeEmpresa: "",
      bio: "teste",
      idioma: "",
      pais: "",
      value: "",
      custom: true,
      email: "",
      senha: "",
      valid: true,

      nomeRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      nikRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      nomeEmpresaRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  computed: {
    progress() {
      return Math.min(100, this.value.length * 10);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    },
  },
  methods: {
    increment() {
      this.foo = parseInt(this.foo, 10) + 1;
    },
    decrement() {
      this.foo = parseInt(this.foo, 10) - 1;
    },
    login: function () {
      this.$router.push("/login");
    },

    register: function () {
      this.$router.push("/register");
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
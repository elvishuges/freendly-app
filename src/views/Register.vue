/** * Created by vouill on 11/13/17. */

<template>
  <v-container>

    <v-app-bar
      scroll-target="#scrolling-techniques-3"
      app
      color="blue-grey darken-1"  dark>
      <v-spacer></v-spacer>
      <v-btn target="_blank" text>
        <span class="mr-2">Freendly</span>
        <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-flex xs12 class="pa-4">
      <v-card elevation="4">
        <v-card-title src="https://picsum.photos/1920/1080?random" >
          <v-icon large left>mdi-cube-unfolded</v-icon>
          <span >Freendly</span>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <v-form ref="form" v-model="valid"  lazy-validation>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="nome"
                    dense
                    :rules="nomeRules"
                    label="Nome"
                    required
                    outlined></v-text-field>
                </v-col>
                 <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="nick"
                    dense
                    :rules="nikRules"
                    label="Nick"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="senha"
                    dense
                    :rules="nikRules"
                    label="Senha"
                    required
                    outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="senha"
                    dense
                    :rules="nikRules"
                    label="Comfirmar senha"
                    required
                    outlined></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    dense
                    :rules="emailRules"
                    label="Email"
                    required
                    outlined
                  ></v-text-field>
                </v-col>


                <v-col cols="12" sm="6">
                  <v-text-field
                   dense
                    v-model="nomeEmpresa"
                    :rules="nomeEmpresaRules"
                    label="Nome da empresa"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                   dense
                    v-model="pais"
                    label="pais"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    dense
                    v-model="idioma"
                    label="Idioma para comunicação"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
            <div style="cursor: pointer;" @click="login()">Já possui cadastro ?</div>

                 <v-spacer></v-spacer>
            <v-btn large="" :rounded="false" dark color="blue-grey darken-1" @click="validate">Cadastrar</v-btn>
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
      nome: "eve.holt@reqres.in",
      sobreNome:"",
      nick: "cityslicka",
      nomeEmpresa: '',
      idioma:"",
      pais:"",
      email:"",
      senha:"",
      valid: true,

      nomeRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      nikRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      nomeEmpresaRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],



    };
  },
  methods: {
    login: function() {
        this.$router.push("/login");
    },

    register: function() {
      this.$router.push("/register");
    },
    validate () {
      this.$refs.form.validate()
    },

  }
};
</script>
<template>
<div>
<p class="headline font-weight-regular pl-4 pt-4">Projetos</p>
<v-row align="center"
      justify="center">

      <v-slide-group
        v-model="model"
        class="pa-0"
        mandatory
        show-arrows
      >
        <v-slide-item
          v-for="project in listProjects"
          :key="project.id"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="200"
            width="200"
            elevation="6"
            @click="toggle"
          >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="`http://localhost:3000/${project.dirImagem}`"
          >
            <v-card-title class=" caption pt-0 text-body-1">{{project.descricao }}</v-card-title>
          </v-img>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  @click="openProjectProfile(n)"
                  color="white"
                  size="48"
                  v-text="'mdi-share-circle'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    </div>

</template>


<script>
export default {
  props: {
    listProjects: {
      type: Array,
      default: null
    },
  },
  data() {
    return {
      key: "",
      model: null,
    };
  },

  methods: {
    openProjectProfile(n) {
      console.log('#m projeto#',n);
      this.$router.push({ name: 'projeto', params: { idProjeto:n }})
    },
  },
};
</script>

<style>
</style>
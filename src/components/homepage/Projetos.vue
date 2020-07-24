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
          v-for="n in 5"
          :key="n"
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
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
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
  data() {
    return {
      key: "",
      model: null,
    };
  },

  methods: {
    name() {},
  },
};
</script>

<style>
</style>
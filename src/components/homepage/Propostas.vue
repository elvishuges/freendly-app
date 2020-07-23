<template>
  <v-container>
    <v-row dense>
    <v-flex xs12 sm9 md9>
      <v-card elevation="0" height="300px" class="scroll">
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card @click="name()" elevation="10" >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="caption" v-text="item.title"></v-card-title>
                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex xs12 sm3 md3>
      <p class="caption font-weight-regular pl-0 pt-0">Propostas</p>
      <v-card elevation="0" height="250px" class="scroll">
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card @click="name()" elevation="10" >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="caption pt-0" v-text="item.title"></v-card-title>
                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-flex>
    </v-row >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      key: "",
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
         {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
         {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    name() {},
  },
};
</script>

<style>
.scroll {
   overflow-y: scroll;
}

.v-application ::-webkit-scrollbar {
    width: 8px;
}
</style>
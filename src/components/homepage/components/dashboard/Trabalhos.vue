<template>
  <v-container>
    <v-card elevation="0" height="250px" class="scroll">
      <v-container fluid>
        <v-skeleton-loader
          :loading="loadingList"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
        <v-row dense>
          <v-col v-for="item in items" :key="item.id" cols="12" sm="6" md="6" lg="6">
            <v-card @click="name()" elevation="3">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="caption pt-0" v-text="item.title"></v-card-title>
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        </v-skeleton-loader>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      key: "",
      loadingList:false,
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          id:'1'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          id:'2'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          id:'3'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
          id:'4'
        },
      ],
    };
  },
  mounted() {
    this.getJobs()
  },
  methods: {
    getJobs() {
      console.log("fake ajax get list...");
      this.loadingList = true;
      setTimeout(() => {
        this.loadingList = false;
      }, 2000);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
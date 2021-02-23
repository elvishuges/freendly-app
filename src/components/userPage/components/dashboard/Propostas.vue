<template>
  <v-container class="">
    <p class="title font-weight-medium pl-2 pt-0 pa-0">Propostas pendentes</p>
    <v-card elevation="0" height="270px" class="scroll pt-0 pl-2">
      <v-container>
        <v-skeleton-loader
          :loading="loadingList"
          transition="scale-transition"
          height="94"
          type="list-item-three-line"
        >
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12">
              <v-card @click="name()" elevation="10">
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
  components: {
    
  },
  data() {
    return {
      key: "",
      loadingList: true,            
      inject: ["theme"],
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
  mounted() {
    this.getJobOfferList();
  },
  methods: {
    getJobOfferList() {
      console.log("fake ajax get list...");
      this.loadingList = true;
      setTimeout(() => {
        this.loadingList = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.scroll {
  overflow-y: scroll;
}

.v-application ::-webkit-scrollbar {
  width: 8px;
}
</style>


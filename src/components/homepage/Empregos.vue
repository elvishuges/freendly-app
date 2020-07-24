<template>
    <v-container>
      <p class="headline font-weight-regular pl-4 pt-4">Empregos</p>
       <v-card elevation="5" height="250px" class="scroll pt-0">
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="6">
              <v-card @click="name()" elevation="3" >
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

    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                key: '',
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
            }
        },
        mounted () {

        },

        methods: {
            name() {

            }
        },
    }
</script>

<style lang="scss">
   .scroll {
   overflow-y: scroll;
}

.v-application ::-webkit-scrollbar {
    width: 8px;
}
</style>
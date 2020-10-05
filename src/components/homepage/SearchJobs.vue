<template>
  <v-main>
    <v-container fluid>
      <v-row>
          <v-col cols="12" sm="12">
            <v-autocomplete 
                clearable
                :loading="loading"
                v-model="searchString"
                :disabled="isUpdating"
                :search-input.sync="search"
                solo
                color="orange"
                label="Buscar projeto por linguagem de programação"
                item-text="name"
                item-value="name"
                multiple                
                :append-icon-cb="helo"
                :open-on-click="true"></v-autocomplete>
          </v-col>
      </v-row>

      <v-row class="pt-0">
          <v-container>
            <v-row>
              <v-col
                v-for="item in items"
                :key="item.id"
                class="pl-5 pr-5"
                xs6
                lg12
              >
                <v-card elevation="8" class="mx-auto" max-width="344" >
                  <v-list-item three-line>
                    <v-list-item-avatar                      
                      size="80"
                      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                      color="grey"
                    >
                      <v-img
                        height="100"
                        width="100"
                        src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                      ></v-img
                    ></v-list-item-avatar>
                    <v-list-item-content>
                      <div class="overline mb-4">OVERLINE</div>
                      <v-list-item-title class="headline mb-1"
                        >Headline 5</v-list-item-title
                      >
                      <v-list-item-subtitle
                        >Greyhound divisely hello coldly
                        fonwderfully</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon >mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon >mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { EventBus } from "./../../utils/event-bus";
export default {
  props: {
    tabId: {
      type: Number,
    },
    loadFirst: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadedData: false,
      loading: false,
      search: null,
      select: null,
      searchString:"",
      helo:'',
      isUpdating:false,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
      ],
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  mounted() {
    console.log("#Mounted#");
    this.loadInicialTab();

    EventBus.$on("load-data-tab", (tabId) => {
      console.log(`Oh, o id da tab clicada foi: ${tabId} ! :)`);
      //EventBus.$off('load-data-tab');
      //});
    });
  },
  methods: {
    loadInicialTab() {
      console.log("#loadInicialTab#", this.tabId);
      if (this.loadFirst) {
        console.log("Id da pagina inicial:", this.tabId);
      }
    },
    detalheProduto(name) {
      this.$router.push({ name: "item", params: { ItemName: name } });
    },
    querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
  },
  },
  watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },

  computed: {
    classTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "caption";
        default:
          return "body-2";
      }
    },

    classSubtitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "caption";
        default:
          return "subtitle-2";
      }
    },

    classItemTitle() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "caption";
        default:
          return "subtitle-2";
      }
    },
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
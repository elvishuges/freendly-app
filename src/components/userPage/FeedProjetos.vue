<template>
  <div>
    <p class="headline font-weight-regular pl-4 pt-4">Projetos</p>
    <v-container style="min-height: 600px" class="mt-3">
      <v-row>
        <v-flex class="pa-2" v-for="item in items" :key="item.id" xs12 sm6 md4
          ><card-projeto></card-projeto>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardProjeto from "./components/FeedProjetos/CardProjeto.vue";
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
  components: {
    CardProjeto,
  },
  data() {
    return {
      loadedData: false,
      loading: false,
      search: null,
      select: null,
      searchString: "",
      helo: "",
      isUpdating: false,

      items: [
        {
          id: 0,
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          id: 1,
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
        {
          id: 2,
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
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
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
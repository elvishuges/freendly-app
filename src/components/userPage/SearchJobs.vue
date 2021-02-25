<template>
  <v-container style="min-height: 600px">
    <v-flex xs12>
      <v-card elevation="0">
        <v-card-text>
          <v-card-title>
            <span class="font-weight-medium">Criar projeto ({{}}/4)</span>
          </v-card-title>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
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
      searchString: "",
      helo: "",
      isUpdating: false,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
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
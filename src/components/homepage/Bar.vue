<template>
<v-app-bar
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon  @click="ChildtoggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{openDrawer}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
props: {
    toggleDrawer: { type: Function },
     openDrawer: { type: Boolean },
  },
  data() {
    return {
      drawer:null,
    }
  },
  mounted () {
     this.drawer = this.openDrawer ;
  },

  methods: {
    ChildtoggleDrawer: function () {
           // Do your stuff
           this.toggleDrawer(true);
       }
  },

};
</script>

<style>
</style>
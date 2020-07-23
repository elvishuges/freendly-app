<template>
<div>

 <v-navigation-drawer
      v-model="showDrawer"
      absolute
      dark
      class="blue-grey darken-1"
      height="100%"
      temporary
    >
      <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Software tears
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
         <v-divider></v-divider>
      <v-list nav >

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>
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

      <v-app-bar-nav-icon  @click="showDrawer = !showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>showDrawer</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
props: {
    openDrawer: { type: Boolean },
  },
   data() {
       return {
           key: 'value',
           showDrawer:false,
           items: [
            { title: 'Home', icon: 'mdi-puzzle-edit-outline' },
            { title: 'About', icon: 'mdi-puzzle-edit-outline' },
            { title: 'Sair', icon: 'mdi-puzzle-edit-outline' },
          ],
       }
   },
   computed: {
     hideDrawer() {
        return this.openDrawer
     }
   },

   mounted () {
   },
}
</script>

<style>

</style>
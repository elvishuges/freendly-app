<template>
  <v-app-bar app :color="color" dark>
    <v-spacer></v-spacer>
    <v-btn target="_blank" text>
      <span class="mr-2">{{ title }}</span>
      <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    title: {
      type: String,
      default: "Title",
    },
  },
  mounted() {
    console.log("HEREE");
  },
};
</script>

<style>
</style>
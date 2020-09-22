<template>
    <div>
      <v-skeleton-loader
          :loading="loading"
          :transition="transition"
          height="94"
          :type="type"
        >
        oi
      </v-skeleton-loader>
    </div>
</template>

<script>

export default {
    props: {
    loading: {
        type: Boolean,
        default: null
    },
    transition: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: null
    },
},
}
</script>

<style lang="scss" scoped>

</style>
<template>
     <div >
       <Projetos/>
     </div>
</template>
<script>

import Projetos from './Projetos'

export default {
   components: {
        Projetos,
   },

   data() {
        return {
             key: 'value'
        }
   },

   mounted () {
        console.log('*mounted dash*');
   },

   methods: {
        name() {

        }
   },
}
</script>

<style>

</style>
<template>
     <div >
       <p class="headline font-weight-regular pl-4 pt-4">Projetos</p>
       <Projetos/>
       <p class="headline font-weight-regular pl-4 pt-4">Propostas</p>
       <Propostas/>
     </div>
</template>
<script>

import Projetos from './Projetos'
import Propostas from './Propostas'

export default {
   components: {
        Projetos,
        Propostas
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
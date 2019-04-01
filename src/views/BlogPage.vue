<template>
    <div>
      <hero-banner v-bind:headline='headline'/>  
    </div>
</template>



<script>
import Banner from "../components/banner/Banner.vue";
export default {
    components:{
        'hero-banner':Banner,
    },
    data(){
        return{
            headline: 'My Pretty Blog'
        }
    }
    
}
</script>



<style scoped>

</style>

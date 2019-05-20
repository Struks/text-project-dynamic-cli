<template>
    <div class="text-center">
        <img v-if="loading" src="/img/spinner.gif" alt="spinner" class="img img-fluid align-center" id="blogLoader">
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        loading(){
            return this.$store.getters['spinner/loading'];
        }
    },
    methods:{

    },
    actions:{

    }
}
</script>


<style scoped>
    
</style>


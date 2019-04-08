<template>
    <div>
        <new-post :headline='headline'/>
    </div>
</template>


<script>
import newPost from './newPost.vue';
export default {
    components:{
        'new-post': newPost,
    },
    data(){
        return{
            headline:'edit post',
        }
    },
}
</script>


<style scoped>

</style>

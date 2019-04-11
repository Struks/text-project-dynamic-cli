<template>
    <div class="margin-bottom">
        <banner :headline='headline'/>
        <div class="container">
            <article class="mt-5">
                <img :src='url' class="img group list-group-image mr-3 float-left">
                <h2 class="mb-4">{{title}}</h2>
                <p class="paragraph" v-html="text"></p>
                <span class="badge badge-secondary">{{timestamp}}</span>
            </article>
        </div>    
    </div>
</template>

<script>
import db from '@/firebase/init'
import Banner from '@/components/banner/Banner.vue';
export default {
    components:{
        'banner':Banner
    }, 
    name: "show-post",
    data(){
        return{
            title:'',
            url:'',
            text:'',
            timestamp:'',           
            headline:'My single post'
            
        }
    },
    created(){
        db.collection('blog').doc(this.$route.params.id).get().then(doc =>{
            if(doc.exists){
                this.title = doc.data().title;
                this.url = doc.data().url;
                this.text = doc.data().text;
                this.timestamp = doc.data().timestamp;
            }
        })
        
    }
}
</script>

<style scoped>
.margin-bottom{
    margin-bottom: 400px;
}
.img{
    max-width: 100%;
}
</style>

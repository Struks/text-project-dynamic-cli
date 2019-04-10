<template>
    <div class="marginBottom">    
        <div class="container align-center">
            <div class="backgroundPost bg-dark">
                <banner :src='src' :headline='headline' class="text-center"/>
                <div class="editPost">
                        <input 
                            class="title" 
                            v-model="post.title"
                            type="text" 
                            placeholder="Title"
                        >
                        <input 
                            class="url" 
                            v-model="post.url" 
                            type="text" 
                            placeholder="Thumbnails URL"
                        >
                        <textarea class="textarea" name="ckeditor" id="ckeditor" v-model="post.text"></textarea>
                        <div class="afterbtn"><button type="button" class="btn btn-success" @click="editPost(post.id)">EDIT POST</button></div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
import { setTimeout } from 'timers';
import {store} from '@/store/index' 
export default {
    components:{
        'banner':Banner
    },
    data(){
        return{
        post:{},
           headline: 'Edit post',
           src:true,
            
        }
    },

    mounted(){
        CKEDITOR.replace( 'ckeditor' )
    },
    created(){
        db.collection("blog").doc(this.$route.params.id)
        .onSnapshot((doc) => {
            this.post ={
                title: doc.data().title,
                url:doc.data().url,
                text:doc.data().text
            }  
        })
    },
    computed:{
        // post(){return this.$store.getters.post}
    },
    methods:{
        editPost(){       
            db.collection('blog').doc(this.$route.params.id).set(this.post).then((docRef)=>{
                this.post.title = this.title,
                this.post.text = CKEDITOR.instances.ckeditor.getData(),
                this.post.url = this.url,
                this.post.timestamp = new Date()
                
            })

            
        }
    }
}
</script>


<style scoped>
.title{
    margin-top: 30px;
}
input{
    width: 70%;
    margin: 20px 0px;
    padding: 20px;
    border: 3px solid #212529;
}
p{
    margin-top: -15px;
}
textarea{
    width:70%;
    margin: 20px 0px;
}
.btn{
    font-family: "Novecentosan", Arial, sans-serif;
    background: #2ecc71;
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    margin-top: 20px;
}
.editPost{
   text-align: center;
}
.marginBottom{
    margin-bottom: 250px;
}
.afterbtn{
    padding-bottom: 20px;
}
.error-message {
  color: red;
  font-size: 12px;
}
.error{
  border-color: red;
}
.backgroundPost{
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;  
    -moz-box-shadow:    3px 3px 5px 6px #ccc;  
    box-shadow:         3px 3px 5px 6px #ccc;
}
</style>

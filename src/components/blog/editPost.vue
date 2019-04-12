<template>
    <div class="marginBottom">    
        <banner :src='src' :headline='headline'/>
        <div class="container">
            <div class="backgroundPost">
                
                <div class="editPost pt-5">
                    <label for="title">Title:</label><br/>
                    <input 
                        id="title"
                        class="title" 
                        v-model="post.title"
                        type="text" 
                        placeholder="Title"
                    ><br/>
                    <label for="url">URL:</label><br/>
                    <input 
                        id="url"
                        class="url" 
                        v-model="post.url" 
                        type="text" 
                        placeholder="Thumbnails URL"
                    >
                    <vue-ckeditor v-model="post.text"></vue-ckeditor>

                    <!-- <textarea class="textarea" name="ckeditor" id="ckeditor" v-model="post.text"></textarea> -->
                    <div class="afterbtn">
                        <button type="button" class="btn btn-success" @click="editPost(post.id)">EDIT POST</button>
                        <button type="button" class="float-right btn btn-danger btn-delete" @click="deletePost(post.id)">DELETE</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import VueCkeditor from 'vue-ckeditor2';
import Banner from '@/components/banner/Banner.vue';
import db from '@/firebase/init'
import {store} from '@/store/index' 
export default {
    components:{
        'banner':Banner,
        VueCkeditor
    },
    data(){
        return{
        // post:{},
        headline: 'Edit post',
        src:true,
            
        }
    },
    created(){
        db.collection("blog").doc(this.$route.params.id)
        .onSnapshot((doc) => {
            this.post ={
                title: doc.data().title,
                url:doc.data().url,
                text:doc.data().text,
                timestamp: doc.data().timestamp,
                id:doc.id
            }  
        })
    },
    computed:{
        post(){return this.$store.getters.post}
    },
    methods:{
        setPost(){return commit('setPost',post.id)},
        editPost(id){
            this.$store.dispatch('editPost',{
                title: post.title,
                url: post.url,
                text: post.url,
                
            })
        },
        // editPost(id){       
        //     db.collection('blog').doc(id)
        //     .set(this.post).then((docRef)=>{
        //         this.post.title = this.title,
        //         this.post.text = this.text,
        //         this.post.url = this.url,
        //         this.post.timestamp = this.timestamp       
        //     }) 
        //     this.$router.push(`/blog/${id}`)   
        // },
        deletePost(id){
        if(confirm('Are you sure ? ')){
          db.collection("blog").doc(id).delete();
          setTimeout(() => {
            document.querySelector('.article').remove()
          }, 400); 
          this.$router.push({path:`/blog`}) 
        }
      },
        
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
    border: 1px solid #212529;
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
    border: none;
    border-radius: 0px;
    padding: 10px 40px;
    margin-top: 20px;
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
.title,.url{
    margin-top: -0px
}
label{
    margin: 0px;
    text-transform :none;
    font-size:15px;
    font-family:"Helvetica", Arial, sans-serif
}

</style>
